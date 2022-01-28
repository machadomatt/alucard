import Link from 'next/link'

export default function ChatHeader() {
    return (
        <div className="flex justify-between mb-5">
            <h1 className="px-4 py-2 rounded-lg pointer-events-none bg-white/5 backdrop-blur-lg">
                Chat
            </h1>
            <Link href="/">
                <a
                    className="px-4 py-2 transition duration-200 rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/60"
                    href=""
                >
                    Logout
                </a>
            </Link>
        </div>
    )
}
