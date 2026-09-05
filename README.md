# AI Chatbot

A simple full-stack AI chatbot built with React, Node.js, Express.js, and OpenRouter.

## Features

- 💬 Continuous conversation
- 🧠 Conversation context
- 🌊 Streaming AI responses
- 🤖 OpenRouter AI integration
- 📱 Responsive UI
- 🚀 Deployed on Render

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **AI:** OpenRouter (`gpt-4o-mini`)
- **Deployment:** Render

## Architecture

React → Express API → OpenRouter → Streaming Response → React

## Project Structure

ai-chatbot/
├── client/
│   └── src/
│       ├── components/
│       └── services/
├── server/
│   ├── routes/
│   ├── server.js
│   └── .env
└── README.md

## Environment Variables

### Backend

OPENROUTER_API_KEY=your_api_key

### Frontend

VITE_API_URL=your_backend_url

## Run Locally

### Backend

cd server
npm install
npm start

### Frontend

cd client
npm install
npm run dev

## Deployment

The frontend and backend are deployed separately on Render:

- Frontend → Render Static Site
- Backend → Render Web Service

## Future Improvements

- Authentication
- Chat history
- Database integration
- Multiple conversations
- Markdown/code formatting
- Improved error handling

