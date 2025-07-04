# Chatbot ReactJS

This project is a modern, professional chatbot built with **ReactJS**. It features a clean, responsive UI and integrates with the Google Gemini API to provide intelligent conversational responses.

## Features

- **Modern UI:** 3D-inspired, professional design with smooth transitions and gradients.
- **Responsive:** Works seamlessly on desktop and mobile devices.
- **Sticky Header:** The chatbot heading is always visible for easy navigation.
- **Auto-Scroll:** Chat window automatically scrolls to the latest message.
- **API Integration:** Connects to Google Gemini (via REST API) for real-time AI-powered responses.
- **Error Handling:** User-friendly error messages for failed API calls.
- **Accessible:** Keyboard and screen-reader friendly controls.

## Technologies Used

- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/) (for fast development)
- [Google Gemini API](https://ai.google.dev/)
- CSS3 (custom, no frameworks)

## How It Works

1. **User Input:** Type a message in the chat form and send.
2. **API Call:** The app sends your message history to the Gemini API.
3. **Bot Response:** The chatbot displays the AI's response in the chat window.
4. **UI:** The chat popup can be opened/closed with a floating button and is centered on the screen.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/CHATBOT-REACTJS.git
   cd CHATBOT-REACTJS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your API key:**
   - Create a `.env` file in the root directory.
   - Add your Gemini API endpoint:
     ```
     VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=YOUR_API_KEY
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to use the chatbot.

## Customization

- **Change the look:** Edit `src/index.css` for colors, gradients, and layout.
- **Change the bot icon or name:** Edit `src/components/ChatBotIcon.jsx` and the header in `App.jsx`.

## License

This project is for educational and personal use. For commercial use, please check the terms of the Gemini API and ReactJS licenses.

---

**Enjoy chatting with your AI-powered assistant!**
