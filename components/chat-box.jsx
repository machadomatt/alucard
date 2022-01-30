import { useEffect, useState } from 'react'
import ChatMessage from './chat-message'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import ButtonSendSticker from './button-send-sticker'

const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function ChatBox() {
    const route = useRouter()
    const loggedinUser = route.query.username

    const [chatTextInput, setChatTextInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const supabaseData = supabaseClient
            .from('messages')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => setMessages(data))
    }, [])

    const handleTextInput = (event) => {
        setChatTextInput(event.target.value)
    }

    const handleSubmitMessage = (customMessage) => {
        console.log(customMessage)
        supabaseClient
            .from('messages')
            .insert([
                {
                    message: customMessage ? customMessage : chatTextInput,
                    from: loggedinUser,
                },
            ])
            .then(({ data }) => {
                setMessages([data[0], ...messages])
            })
        setChatTextInput('')
    }

    return (
        <>
            <div className="flex flex-col-reverse gap-y-6 h-[450px] overflow-y-scroll chat-scrollbar">
                {messages.map((message) => (
                    <ChatMessage message={message} key={message.id} />
                ))}
            </div>
            <div className="flex mt-10">
                <textarea
                    className="p-3 mr-4 transition duration-200 rounded-lg bg-white/10 backdrop-blur-lg placeholder:text-black focus:bg-white/60 focus:outline-none grow"
                    name="chat"
                    cols="10"
                    rows="3"
                    placeholder="Message..."
                    value={chatTextInput}
                    onChange={handleTextInput}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && event.shiftKey === false) {
                            event.preventDefault()
                            handleSubmitMessage()
                        }
                    }}
                ></textarea>
                <ButtonSendSticker
                    onStickerClick={(sticker) =>
                        handleSubmitMessage(`:sticker: ${sticker}`)
                    }
                />
            </div>
        </>
    )
}
