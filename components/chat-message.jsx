import Image from 'next/image'

export default function ChatMessage({ message }) {
    return (
        <div
            className="flex flex-col p-4 rounded-lg bg-white/60 backdrop-blur-lg"
            key={message.id}
        >
            <div className="flex items-center mb-3 gap-x-3">
                <Image
                    src={`https://github.com/${message.from}.png`}
                    alt={message.from}
                    className="rounded-full"
                    width={32}
                    height={32}
                />
                <h3 className="">{message.from}</h3>
                <span className="hidden text-xs sm:inline">2022-01-26</span>
            </div>
            {message.message.startsWith(':sticker:') ? (
                // eslint-disable-next-line
                <img
                    className="max-w-[100px]"
                    src={message.message.replace(':sticker:', '')}
                    alt="Sticker"
                />
            ) : (
                <p>{message.message}</p>
            )}
        </div>
    )
}
