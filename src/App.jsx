import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useRef, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) =>{
    //Helper function to update chat history
    const updateHistory = (text, isError = false) =>{
      setChatHistory((prev) => [...prev.filter((msg) => msg.text !== "Thinking..."), {role: "model", text, isError}]);
    };
    
    //Format chat history for API request
    history = history.map(({role, text}) => ({role, parts: [{text}] }));

    const requestOptions = {
      method : "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({ contents: history })
    }

    try{
      //API call to get the bot response 
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Failed to fetch response ");

      //Update chat history with the bot response
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error){
      updateHistory(error.message, true)
    }
  };

  useEffect(() => {
    // Improved: Only scroll if chatBodyRef is available
    if (chatBodyRef.current) {
      // Instantly scroll if user is near bottom, smooth if not
      const el = chatBodyRef.current;
      const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 100;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: isNearBottom ? "smooth" : "auto"
      });
    }
  }, [chatHistory]);
  
  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
    <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
      <span className="material-symbols-outlined" style={{ display: showChatbot ? 'none' : 'inline' }}>mode_comment</span>
      <span className="material-symbols-outlined" style={{ display: showChatbot ? 'inline' : 'none' }}>close</span>

    </button>

    <div className="chatbot-popup">
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon/>
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-outlined"> keyboard_arrow_down </button>
      </div>

      {/* Chatbot Body */}
      <div ref={chatBodyRef} className="chat-body">
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there! How can I assist you today?
          </p>
        </div>

        {/* Render chat history */}
        {chatHistory.map((chat, index) => (
          <ChatMessage key={index} chat={chat}/> 
        ))}
      </div>

      {/* Chatbot Footer */}
      <div className="chat-footer">
        <ChatForm chatHistory ={chatHistory} setChatHistory ={setChatHistory}  generateBotResponse ={generateBotResponse} />
      </div>
    </div>
     </div>
  );
};

export default App