// components/SupportChat.js

import React, { useState } from 'react';

const SupportChat = ({ orderId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '') return; // Prevent sending empty messages
        setMessages([...messages, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');
        
        // Simulate a response from support
        setTimeout(() => {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: 'Support: How can I assist you with order ' + orderId + '?', sender: 'support' }
            ]);
        }, 1000);
    };

    return (
        <div className={`fixed bottom-4 right-4 w-80 bg-white border rounded shadow-lg transition-transform ${isOpen ? 'transform-none' : 'transform translate-y-full'}`}>
            <div className="flex justify-between items-center p-2 bg-blue-500 text-white rounded-t">
                <h3 className="font-bold">Support Chat</h3>
                <button onClick={toggleChat} className="text-white">
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            {isOpen && (
                <div className="p-2">
                    <div className="h-48 overflow-y-auto border-b mb-2">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-grow border rounded p-1"
                        />
                        <button type="submit" className="bg-blue-500 text-white rounded p-1 ml-2">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SupportChat;