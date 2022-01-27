import Image from 'next/image'

export default function ChatMessage({ message }) {
    return (
        <div
            className="flex flex-col p-4 rounded-lg bg-white/60 backdrop-blur-lg"
            key={message.id}
        >
            <div className="flex items-center mb-3 gap-x-3">
                <Image
                    src={`https://github.com/${message.user}.png`}
                    alt={message.user}
                    className="rounded-full"
                    width={32}
                    height={32}
                />
                <h3 className="">{message.user}</h3>
                <span className="text-xs">2022-01-26</span>
            </div>
            <p>{message.message}</p>
        </div>
    )
}
