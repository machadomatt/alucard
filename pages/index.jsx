import Image from 'next/image'
import Head from 'next/head'
import clouds from '../public/clouds-bg.jpg'
import aurora from '../public/aurora-borealis.jpg'

export default function Home() {
    const username = 'machadomatt'

    return (
        <div
            className="flex items-center justify-center min-h-screen p-5 bg-center bg-cover"
            style={{ backgroundImage: `url('${aurora.src}')` }}
        >
            <Head>
                <title>Boas-vindas! Conversas das nuvens</title>
                <meta name="description" content="Conversas das nuvens" />
            </Head>
            <div className="grid items-center max-w-2xl grid-cols-1 gap-12 p-6 rounded-lg shadow-xl bg-white/30 backdrop-blur-md md:grid-cols-2 md:p-8">
                <div className="text-center">
                    <h1 className="mb-0 text-3xl font-semibold">
                        Boas-vindas!
                    </h1>
                    <h2 className="mb-5">Aluracord - Matt in the sky</h2>
                    <div className="flex flex-col items-center">
                        <input
                            className="self-stretch px-3 py-1 mb-6 transition duration-200 rounded-full shadow-md bg-white/20 backdrop-blur-lg focus:outline-none hover:bg-white/60 focus:shadow-lg"
                            type="text"
                        />
                        <button
                            className="py-1 transition duration-200 rounded-full shadow-md px-7 bg-white/25 backdrop-blur-md hover:bg-white/60 hover:shadow-lg active:shadow-md"
                            type="button"
                        >
                            Entrar
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center max-w-xs">
                    <Image
                        src={`https://github.com/${username}.png`}
                        alt="User profile photo"
                        className="rounded-full"
                        width={460}
                        height={460}
                    />
                    <p className="mt-5">{username}</p>
                </div>
            </div>
        </div>
    )
}
