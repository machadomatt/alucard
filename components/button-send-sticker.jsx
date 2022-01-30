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

        // <Box
        //     styleSheet={{
        //         position: 'relative',
        //     }}
        // >
        //     <Button
        //         styleSheet={{
        //             borderRadius: '50%',
        //             padding: '0 3px 0 0',
        //             minWidth: '50px',
        //             minHeight: '50px',
        //             fontSize: '20px',
        //             marginBottom: '8px',
        //             lineHeight: '0',
        //             display: 'flex',
        //             alignItems: 'center',
        //             justifyContent: 'center',
        //             backgroundColor: appConfig.theme.colors.neutrals[300],
        //             filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',
        //             hover: {
        //                 filter: 'grayscale(0)',
        //             },
        //         }}
        //         label="😋"
        //         onClick={() => setOpenState(!isOpen)}
        //     />
        //     {isOpen && (
        //         <Box
        //             styleSheet={{
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 borderRadius: '5px',
        //                 position: 'absolute',
        //                 backgroundColor: appConfig.theme.colors.neutrals[800],
        //                 width: {
        //                     xs: '200px',
        //                     sm: '290px',
        //                 },
        //                 height: '300px',
        //                 right: '30px',
        //                 bottom: '30px',
        //                 padding: '16px',
        //                 boxShadow:
        //                     'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
        //             }}
        //             onClick={() => setOpenState(false)}
        //         >
        //             <Text
        //                 styleSheet={{
        //                     color: appConfig.theme.colors.neutrals['000'],
        //                     fontWeight: 'bold',
        //                 }}
        //             >
        //                 Stickers
        //             </Text>
        //             <Box
        //                 tag="ul"
        //                 styleSheet={{
        //                     display: 'flex',
        //                     flexWrap: 'wrap',
        //                     justifyContent: 'space-between',
        //                     flex: 1,
        //                     paddingTop: '16px',
        //                     overflow: 'scroll',
        //                 }}
        //             >
        //                 {appConfig.stickers.map((sticker) => (
        //                     <Text
        //                         onClick={() => {
        //                             // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);
        //                             if (Boolean(props.onStickerClick)) {
        //                                 props.onStickerClick(sticker)
        //                             }
        //                         }}
        //                         tag="li"
        //                         key={sticker}
        //                         styleSheet={{
        //                             width: '50%',
        //                             borderRadius: '5px',
        //                             padding: '10px',
        //                             focus: {
        //                                 backgroundColor:
        //                                     appConfig.theme.colors
        //                                         .neutrals[600],
        //                             },
        //                             hover: {
        //                                 backgroundColor:
        //                                     appConfig.theme.colors
        //                                         .neutrals[600],
        //                             },
        //                         }}
        //                     >
        //                         <Image src={sticker} alt="Sticker" />
        //                     </Text>
        //                 ))}
        //             </Box>
        //         </Box>
        //     )}
        // </Box>
    )
}
