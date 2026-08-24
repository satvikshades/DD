import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t-[3px] border-border pt-16 pb-8">
      <div className="container px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 border-b-[3px] border-background/20 pb-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-4 group">
              <span className="font-heading text-3xl font-black tracking-tighter uppercase text-white group-hover:text-primary transition-colors">Date Doctor</span>
            </Link>
            <p className="font-bold text-lg leading-snug opacity-90 mb-6">
              Guiding men to get women, and women to get men. Period. 💯
            </p>
            <div className="bg-primary text-primary-foreground p-4 brutal-border -rotate-1 inline-block">
              <p className="font-bold text-sm uppercase tracking-wider">
                ⚠️ Not a crisis service. <br />
                In distress? Call iCall: 9152987821
              </p>
            </div>
          </div>
          
          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-black uppercase tracking-tight text-secondary">Quick Links</h3>
              <a href="#how-it-works" className="font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">How It Works</a>
              <a href="#features" className="font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">Why Us</a>
              <a href="#booking" className="font-bold uppercase tracking-wider text-sm hover:text-secondary transition-colors">Book a Session</a>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-heading text-xl font-black uppercase tracking-tight text-accent">Legal</h3>
              <Link href="/privacy" className="font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="/for-doctors" className="font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors">Join as a Doctor</Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-bold uppercase tracking-wider text-sm">
          <p className="opacity-70">
            © {new Date().getFullYear()} Date Doctor. All rights reserved.
          </p>
          <div className="bg-white text-black px-3 py-1 brutal-border rotate-1 text-sm font-black">
            Built with ❤️ in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  );
}
