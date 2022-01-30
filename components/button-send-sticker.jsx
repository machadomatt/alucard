import { useState } from 'react'
import stickers from '../stickers.json'

export default function ButtonSendSticker({ onStickerClick }) {
    const [isOpen, setOpenState] = useState(false)

    return (
        <div className="relative">
            <button
                className="w-16 h-full text-2xl transition-all rounded-md md:w-24 bg-white/60 backdrop-blur-lg hover:text-3xl hover:bg-white/80"
                onClick={() => setOpenState(!isOpen)}
            >
                😋
            </button>
            {isOpen && (
                <div className="absolute w-48 rounded-md sm:w-72 right-16 md:right-24 bottom-24 bg-white/80 backdrop-blur-lg h-60">
                    <div className="grid grid-cols-2 gap-4 p-4 overflow-y-scroll h-60 scroll chat-scrollbar">
                        {stickers.stickers.map((sticker) => (
                            // eslint-disable-next-line
                            <img
                                src={sticker}
                                alt="sticker"
                                key={sticker}
                                onClick={() => {
                                    if (Boolean(onStickerClick))
                                        onStickerClick(sticker)
                                    setOpenState(false)
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
