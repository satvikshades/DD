import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-background overflow-hidden border-b-[3px] border-border pt-20">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full brutal-border brutal-shadow-sm -z-10 animate-bounce" style={{animationDuration: '3s'}} />
      <div className="absolute bottom-24 right-10 w-24 h-24 bg-secondary brutal-border -rotate-12 brutal-shadow-sm -z-10" />
      <div className="absolute top-40 right-1/4 w-16 h-16 bg-accent rounded-full brutal-border brutal-shadow-sm -z-10" />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-primary rotate-45 brutal-border -z-10" />

      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 mb-6 bg-accent text-accent-foreground px-4 py-1.5 brutal-border brutal-shadow-sm rotate-2 font-bold uppercase tracking-wider text-sm">
          <Flame className="w-4 h-4 fill-current" /> Anonymous · Verified Experts · Made for Indians
        </div>
        
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tighter mb-8 max-w-5xl uppercase">
          Your Dating <span className="text-primary">Cheat</span> <br/>
          Code Is Here.
        </h1>
        
        <div className="bg-secondary text-secondary-foreground p-6 md:p-8 brutal-border brutal-shadow max-w-3xl mb-12 -rotate-1 hover:rotate-0 transition-transform duration-300">
          <p className="text-xl md:text-2xl font-black leading-tight uppercase">
            We guide men to get women, and women to get men. 💯
          </p>
          <p className="text-lg font-medium mt-3 opacity-90">
            Anonymous calls. Verified doctors. Zero judgment. Book your session — ₹500.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-20">
          <a href="#booking">
            <Button className="h-16 px-12 text-xl font-black uppercase tracking-wider bg-primary text-primary-foreground brutal-border brutal-shadow hover:bg-primary transition-transform active:translate-x-1 active:translate-y-1 group">
              Book Session
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </Button>
          </a>
          <a href="#how-it-works">
            <Button variant="outline" className="h-16 px-12 text-xl font-black uppercase tracking-wider bg-white text-black brutal-border brutal-shadow hover:bg-gray-100 transition-transform active:translate-x-1 active:translate-y-1">
              See How It Works
            </Button>
          </a>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 w-full bg-accent border-y-[3px] border-border py-3 marquee-container overflow-hidden">
        <div className="marquee-content flex gap-8 items-center text-accent-foreground font-black text-xl uppercase tracking-widest whitespace-nowrap">
          <span>🔥 Rizz Mechanics</span>
          <span>•</span>
          <span>👻 Ghost-Proof Texting</span>
          <span>•</span>
          <span>💬 First Date Scripts</span>
          <span>•</span>
          <span>💅 Confidence Boost</span>
          <span>•</span>
          <span>❤️ Arranged Marriage Help</span>
          <span>•</span>
          <span>🔥 Rizz Mechanics</span>
          <span>•</span>
          <span>👻 Ghost-Proof Texting</span>
          <span>•</span>
          <span>💬 First Date Scripts</span>
          <span>•</span>
          <span>💅 Confidence Boost</span>
          <span>•</span>
          <span>❤️ Arranged Marriage Help</span>
        </div>
      </div>
    </section>
  );
}
