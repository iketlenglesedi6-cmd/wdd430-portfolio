import Link from "next/link";

export default function Header() {
  return <header className="border-b border-violet-200 bg-[#fffdf9]"><nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main navigation"><Link href="/" className="font-serif text-2xl text-violet-950">Iketleng Lesedi</Link><ul className="flex gap-5 text-sm font-bold text-violet-900"><li><Link href="/" className="border-b-2 border-transparent pb-1 hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-700">Work</Link></li><li><Link href="/about" className="border-b-2 border-transparent pb-1 hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-700">About</Link></li></ul></nav></header>;
}
