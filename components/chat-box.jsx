import { useState } from 'react'
import ChatMessage from './chat-message'

export default function ChatBox() {
    const [chatTextInput, setChatTextInput] = useState('')
    const [messages, setMessages] = useState([])

    const handleTextInput = (event) => {
        setChatTextInput(event.target.value)
    }

    const handleTextInputSubmit = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault()
            setChatTextInput('')
            setMessages([
                {
                    message: chatTextInput,
                    user: 'machadomatt',
                    id: messages.length + 1,
                },
                ...messages,
            ])
        }
    }

    return (
        <>
            <div className="flex flex-col-reverse gap-y-6 h-[450px] overflow-y-scroll chat-scrollbar">
                {messages.map((message) => (
                    <ChatMessage message={message} key={message.id} />
                ))}
            </div>
            <textarea
                className="p-3 mt-10 transition duration-200 rounded-lg bg-white/10 backdrop-blur-lg placeholder:text-black focus:bg-white/60 focus:outline-none blank"
                name="chat"
                cols="10"
                rows="3"
                placeholder="Message..."
                value={chatTextInput}
                onChange={handleTextInput}
                onKeyPress={handleTextInputSubmit}
            ></textarea>
        </>
    )
}
