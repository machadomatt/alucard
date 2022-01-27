import Link from 'next/link'

export default function ChatHeader() {
    return (
        <div className="flex justify-between mb-5">
            <h1>Chat</h1>
            <Link href="/">Logout</Link>
        </div>
    )
}
