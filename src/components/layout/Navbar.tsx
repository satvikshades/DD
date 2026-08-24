import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-[3px] border-border">
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary w-8 h-8 brutal-border rotate-12 flex items-center justify-center font-black text-white group-hover:rotate-0 transition-transform duration-300">
            D
          </div>
          <span className="font-heading text-2xl font-black tracking-tighter uppercase text-foreground">Date Doctor</span>
        </Link>

        <nav className="hidden md:flex gap-10">
          <a href="#how-it-works" className="font-bold uppercase tracking-wider text-sm hover:underline decoration-4 underline-offset-4 decoration-primary transition-all">
            How It Works
          </a>
          <a href="#features" className="font-bold uppercase tracking-wider text-sm hover:underline decoration-4 underline-offset-4 decoration-secondary transition-all">
            Why Us
          </a>
          <a href="#booking" className="font-bold uppercase tracking-wider text-sm hover:underline decoration-4 underline-offset-4 decoration-accent transition-all">
            Book a Session
          </a>
        </nav>

        <a href="#booking">
          <Button className="font-bold uppercase tracking-wider h-12 px-8 rounded-none brutal-border brutal-shadow-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-transform active:translate-y-1 active:translate-x-1">
            Book Now
          </Button>
        </a>
      </div>
    </header>
  );
}
