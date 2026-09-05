import Link from "next/link";

export default function Header() {
  return <header className="border-b border-[#20352a]/25 bg-[#6f9b70]"><nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main navigation"><Link href="/" className="display-serif text-2xl font-bold tracking-tight text-[#f1f0d8]">Iketleng<span className="text-[#82ed35]">.</span></Link><div className="flex items-center gap-6"><span className="hidden text-xs font-bold uppercase tracking-[0.2em] text-[#dce5bd] sm:inline">Web + ideas</span><ul className="flex gap-5 text-sm font-bold text-[#f1f0d8]"><li><Link href="/" className="border-b-2 border-transparent pb-1 hover:border-[#82ed35] focus:outline-none focus:ring-2 focus:ring-[#82ed35]">Work</Link></li><li><Link href="/about" className="border-b-2 border-transparent pb-1 hover:border-[#82ed35] focus:outline-none focus:ring-2 focus:ring-[#82ed35]">About</Link></li></ul></div></nav></header>;
}
