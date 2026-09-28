import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white border-b-[3px] border-border">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 brutal-border brutal-shadow-sm -rotate-1 font-black uppercase tracking-widest text-sm mb-6">
              Dead Simple
            </div>
            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter">
              How It <span className="text-primary underline decoration-[8px] underline-offset-4">Works</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: "📅",
                title: "Book a Slot",
                desc: "Pick a free time on our calendar below. No sign-up, no lengthy forms. Just pick and confirm.",
                color: "bg-primary text-primary-foreground",
                rotate: "-rotate-2",
              },
              {
                step: "02",
                icon: "👻",
                title: "Stay Anonymous",
                desc: "You get a link. You join. We never know who you are. Your secrets stay yours. Period.",
                color: "bg-secondary text-secondary-foreground",
                rotate: "rotate-2",
              },
              {
                step: "03",
                icon: "🔥",
                title: "Get the Sauce",
                desc: "Your certified Date Doctor drops real, actionable advice. Leave with a concrete game plan.",
                color: "bg-accent text-accent-foreground",
                rotate: "-rotate-1",
              },
            ].map((item, i) => (
              <div key={i} className={`${item.color} ${item.rotate} p-8 brutal-border brutal-shadow`}>
                <div className="text-7xl font-black opacity-20 font-heading mb-2">{item.step}</div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-2xl font-black uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="font-semibold text-base opacity-90 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground border-b-[3px] border-border">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter bg-white text-black inline-block px-6 py-3 brutal-border brutal-shadow-sm rotate-1">
              Receipts. 🧾
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Bro literally gave me the exact text to send. We're going on a third date this Friday. Absolute cheat code.",
                tag: "@mumbai_dude",
                rotate: "-rotate-2",
              },
              {
                quote: "Finally someone who gets the Indian dating scene. Stopped getting ghosted in literally 2 sessions.",
                tag: "@delhi_girlie",
                rotate: "rotate-2",
              },
              {
                quote: "My parents were forcing rishtas on me. My Date Doctor helped me set boundaries AND keep them happy. 🙏",
                tag: "@confused_bng",
                rotate: "-rotate-1",
              },
              {
                quote: "I'm a shy guy. My doc gave me a step-by-step approach plan. She said yes. I'm still shaking.",
                tag: "@introvert_wins",
                rotate: "rotate-1",
              },
              {
                quote: "Was in a toxic situationship. One session helped me see it clearly and finally move on. No cap.",
                tag: "@healing_era",
                rotate: "-rotate-2",
              },
              {
                quote: "The advice is so culturally relevant. Not some generic Western stuff. Feels like your smart best friend talking.",
                tag: "@hyderabad_anon",
                rotate: "rotate-2",
              },
            ].map((t, i) => (
              <div key={i} className={`bg-white text-black p-6 brutal-border brutal-shadow-sm flex flex-col justify-between ${t.rotate}`}>
                <div className="text-4xl mb-3">💬</div>
                <p className="font-bold text-base leading-tight mb-6">"{t.quote}"</p>
                <div className="border-t-[3px] border-black pt-3 mt-auto">
                  <p className="font-black font-heading bg-secondary text-secondary-foreground inline-block px-2 py-0.5 uppercase tracking-wide text-sm">{t.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cal.com Booking Section */}
      <section id="booking" className="py-24 bg-background border-b-[3px] border-border">
        <div className="container px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 brutal-border brutal-shadow-sm rotate-1 font-black uppercase tracking-widest text-sm mb-6">
              ₹29 for 30 Mins Session
            </div>
            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
              Book Your <span className="text-primary underline decoration-[8px] underline-offset-4">Session</span>
            </h2>
            <p className="text-xl font-bold max-w-xl mx-auto">
              Pick a time that works for you. 30 minutes. 100% anonymous. Real advice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Step 1: Calendar */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="brutal-border brutal-shadow bg-white rotate-1 hover:rotate-0 transition-transform overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3 border-b-[3px] border-black">
                  <div className="w-4 h-4 bg-white rounded-full brutal-border" />
                  <div className="w-4 h-4 bg-white rounded-full brutal-border" />
                  <div className="w-4 h-4 bg-white rounded-full brutal-border" />
                  <span className="font-black uppercase tracking-wider text-sm ml-2">Step 1: Pick a Slot</span>
                </div>
                <iframe
                  src="https://cal.com/drdate-su6xkx/30min?embed=true&layout=month_view&theme=light"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Book a Date Doctor Session"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Step 2: Payment */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col justify-center">
              <div className="bg-accent text-accent-foreground p-8 brutal-border brutal-shadow -rotate-2 hover:rotate-0 transition-transform">
                <h3 className="font-heading text-3xl font-black uppercase mb-4 leading-tight">
                  Step 2: <br/> Secure Invite
                </h3>
                <div className="bg-white text-black p-4 brutal-border mb-6 rotate-1">
                  <p className="font-black text-xl mb-1">Session Fee:</p>
                  <p className="font-heading text-6xl text-primary mb-2">₹29</p>
                  <p className="font-bold text-sm text-muted-foreground uppercase">For 30 Minutes</p>
                </div>
                <p className="font-bold mb-6 text-lg leading-snug">
                  To get your calendar invitation accepted, please pay exactly <span className="bg-white text-black px-1 border-2 border-black">₹29</span> as a custom amount.
                </p>
                <a href="https://buymeachai.in/drdate" target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full h-16 text-lg font-black uppercase tracking-wider bg-black text-white brutal-border brutal-shadow-sm hover:-translate-y-1 hover:-translate-x-1 transition-transform active:translate-x-1 active:translate-y-1">
                    Pay on Buy Me a Chai →
                  </button>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 font-bold text-muted-foreground text-sm uppercase tracking-widest">
            🔒 Your identity is never shared. Ghost Mode stays ON.
          </p>
        </div>
      </section>



      {/* Final CTA Banner */}
      <section className="py-20 bg-secondary border-b-[3px] border-border">
        <div className="container px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-secondary-foreground mb-6">
            Stop overthinking. <br /> Start winning. 🏆
          </h2>
          <a href="#booking">
            <button className="h-16 px-14 text-xl font-black uppercase tracking-wider bg-black text-white brutal-border brutal-shadow hover:-translate-y-1 hover:-translate-x-1 transition-transform active:translate-x-1 active:translate-y-1">
              Book Your Session Now →
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
