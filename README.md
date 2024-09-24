Chat App (MERN Stack)
This project is a full-stack Chat Application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to register, log in, and send real-time messages to one another. The frontend is developed using React with Vite, and the backend is built using Node.js and Express, with MongoDB as the database. The app also integrates authentication with JWT for secure communication.

Features
User Authentication:

Register new users with hashed passwords using bcrypt.
Secure login using JWT (JSON Web Tokens).
User sessions are managed via tokens for secure access to chat features.
Real-time Messaging:

Send and receive messages in real time between users.
Seamless, fast chat experience using the MERN stack.
Responsive UI:

The frontend is built with React and Vite, offering a fast and efficient user experience.
The UI is responsive and mobile-friendly, making it accessible across devices.
MongoDB Database:

User data and chat history are stored in a MongoDB database, using Mongoose for object data modeling.
Technologies Used
Frontend:

React (with Vite)
JavaScript (ES6+)
HTML5 & CSS3
Axios for API calls
Backend:

Node.js
Express.js
JWT for authentication
bcrypt for password hashing
Database:

MongoDB
Mongoose for schema modeling
Other Tools:

Git for version control
Postman for API testing
Render for deployment
pnpm for package management
Installation
Prerequisites:
Node.js (v20 or above)
MongoDB (running locally or via cloud)
pnpm (for package management)
Backend Setup:
Clone the repository:


git clone https://github.com/your-username/your-repo.git
cd your-repo
Install backend dependencies:

pnpm install
Create a .env file in the root directory and configure your environment variables:

MONGODB_URI=<your-mongo-db-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
Start the backend server:


pnpm start
Frontend Setup:
Navigate to the frontend folder:

cd frontend
Install frontend dependencies:

pnpm install
Build the frontend:


pnpm build
Serve the frontend:


pnpm preview
Usage
Once both the backend and frontend servers are running, you can access the application locally at http://localhost:5000. Register a new user, log in, and start chatting in real time!

Deployment
The app is deployed on Render. You can check out the live version here.
https://hosted-chat-app.onrender.com

Future Improvements
Add more features like group chats and media sharing.
Enhance security measures with refresh tokens and OAuth.
Implement a more sophisticated notification system for real-time updates.
