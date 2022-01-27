import Head from 'next/head'
import ChatBox from '../components/chat-box'
import ChatHeader from '../components/chat-header'
import aurora from '../public/aurora-borealis.jpg'

export default function Chat() {
    return (
        <div
            className="flex items-center justify-center min-h-screen p-5 bg-center bg-cover"
            style={{ backgroundImage: `url('${aurora.src}')` }}
        >
            <Head>
                <title>Boas-vindas! Conversas das nuvens</title>
                <meta name="description" content="Conversas das nuvens" />
            </Head>
            <div className="flex flex-col items-stretch w-full max-w-5xl p-6 rounded-lg shadow-xl bg-white/30 backdrop-blur-md md:grid-cols-2 md:p-8">
                <ChatHeader />
                <ChatBox />
            </div>
        </div>
    )
}
