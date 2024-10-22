import React, { useState } from 'react';
import { IoCodeSlash, IoSend } from 'react-icons/io5';
import { BiPlanet } from 'react-icons/bi';
import { FaPython } from 'react-icons/fa';
import { TbMessageChatbot } from 'react-icons/tb';
import { GoogleGenerativeAI } from "@google/generative-ai";

function Chat() {
  const [message, setMessage] = useState("");
  const [isResponseScreen, setisResponseScreen] = useState(false);
  const [messages, setMessages] = useState([]);

  const hitRequest = () => {
    if (message) {
      generateResponse(message);
    } else {
      alert("You must write something... !");
    }
  };

  const generateResponse = async (msg) => {
    if (!msg) return;

    const genAI = new GoogleGenerativeAI("AIzaSyCSCaEpwReAI-6Cc7xauUg7Z4EsoCZblQA");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(`You are 'Maya' is an AI chatbot designed to assist users in discovering eco-friendly activities, tracking their environmental contributions, and visualizing their impact in real-time. You provide personalized recommendations for sustainability initiatives based on location and interests, and offers dynamic progress updates using interactive charts and dashboards. you also motivate users with achievements and badges, while also reminding them of upcoming events through customizable notifications. 

Based on details proveided above - answer the following user query. \n\n ${msg} `);

    const newMessages = [
      ...messages,
      { type: "userMsg", text: msg },
      { type: "responseMsg", text: result.response.text() },
    ];

    setMessages(newMessages);
    setisResponseScreen(true);
    setMessage("");
  };

  const newChat = () => {
    setisResponseScreen(false);
    setMessages([]);
  };

  return (
    <div className="w-screen min-h-screen overflow-x-hidden dark:bg-black dark:text-white bg-gray-100 text-black ">
      {isResponseScreen ? (
        <div className="h-[80vh]">
          <div className="flex items-center justify-between w-full px-24 pt-6">
            <h2 className="text-2xl">AssistMe</h2>
            <button
              className="bg- px-6 py-2 rounded-lg text-sm cursor-pointer bg-gray-300 dark:bg-zinc-800"
              onClick={newChat}
            >
              New Chat
            </button>
          </div>

          <div className="flex flex-col px-24 py-6 space-y-4">
            {messages?.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.type === "userMsg"
                    ? "dark:bg-[#181818] bg-gray-200 self-end"
                    : "dark:bg-[#181818] bg-gray-200 self-start"
                } p-4 rounded-3xl max-w-[60vw] min-w-[20vw]`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <h1 className="text-4xl">AssistMe</h1>
          <div className="flex items-center gap-2 mt-8 ">
            {[
              {
                text: "I’m interested in volunteering but don’t know where to start. Can you suggest local opportunities to get involved?",
                icon: <IoCodeSlash />,
              },
              {
                text: "What are some ways I can help support environmental sustainability in my community?",
                icon: <BiPlanet />,
              },
              {
                text: "How can I encourage others to participate in social services or charitable activities?",
                icon: <FaPython />,
              },
              {
                text: "I want to organize a fundraiser for a cause I care about. Can you guide me through the steps?",
                icon: <TbMessageChatbot />,
              },
            ].map((card, index) => (
              <div
                key={index}
                className="dark:bg-zinc-800 dark:text-white bg-gray-200 text-black  p-4 rounded-lg cursor-pointer transition-all min-h-[20vh] px-6 relative"
              >
                <p className="text-lg">{card.text}</p>
                <i className="absolute bottom-3 right-3 text-lg">{card.icon}</i>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full">
        <div className="flex items-center w-[60%] py-2 rounded-full text-sm dark:bg-zinc-800 dark:text-white bg-gray-200 text-black px-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 p-2 bg-transparent outline-none border-none"
            placeholder="Write your message here..."
          />
          {message && (
            <i
              className="mr-5 text-[20px] text-green-500 cursor-pointer"
              onClick={hitRequest}
            >
              <IoSend />
            </i>
          )}
        </div>
        <p className="my-4 text-sm text-gray-500">
          AssistMe is developed by Mo. Mahdi Farooqui. This AI uses the Gemini
          API for providing responses.
        </p>
      </div>
    </div>
  );
}

export default Chat;
