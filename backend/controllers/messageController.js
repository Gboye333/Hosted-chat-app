import Conversation from "../model/conversationModel.js";
import Message from "../model/messageModel.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {
try {
    const {message} = req.body;
    const {id: receiverId} = req.params;
    const senderId = req.user._id

   let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId]}
    })

    if(!conversation) {
        conversation = await Conversation.create({
        participants: [senderId, receiverId],   
        })
    }

  const newMessage = new Message({
   senderId,
   receiverId,
   message,
  })

  if(newMessage){
    conversation.messages.push(newMessage._id);
  }

// await conversation.save();
// await newMessage.save();

// this will run in parallel
await Promise.all([conversation.save(), newMessage.save()])

   //SOCKET IO FUNCTIONALITY WILL GO HERE 
   const receiverSocketId = getReceiverSocketId(receiverId);
   if(receiverId) {
    // io.to(<socket_id>.emit() used to send event to specific client)
    io.to(receiverSocketId).emit("newMessage",newMessage)
   }

  res.status(201).json(newMessage)
} catch (error) {
 console.log("Error in sendMessage controller: ", error.message)
 res.status(400).json({error: "cannot acess route"});
}
}

export const getMessages = async (req, res) => {
 try {
    const {id:userToChatsId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, userToChatsId] }
    }).populate("messages"); //giving us the actual message not the reference

    if(!conversation) return res.status(200).json([]);

    const messages = conversation.messages

  res.status(200).json(messages)

 

 } catch (error) {
    console.log("error in the getMessages controller: ", error.message)
    res.status(401).json({error: "internal server error"})
 }
}