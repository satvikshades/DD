export function Features() {
  const features = [
    {
      title: "Ghost Mode: ON",
      description: "100% anonymous. We never ask for your real name. Drop your problems, get the sauce, and dip.",
      color: "bg-secondary text-secondary-foreground",
      icon: "👻",
      rotate: "-rotate-1",
    },
    {
      title: "Real Talk Only",
      description: "No generic 'be yourself' BS. Actionable, psychology-backed strategies to get who you actually want.",
      color: "bg-primary text-primary-foreground",
      icon: "🎯",
      rotate: "rotate-1",
    },
    {
      title: "Vibe Matchers",
      description: "Our Docs aren't dusty boomers. They get modern dating — situationships, hard launches, the whole meta.",
      color: "bg-accent text-accent-foreground",
      icon: "🔥",
      rotate: "-rotate-1",
    },
    {
      title: "First 2 on the House",
      description: "Try before you buy. Your first two sessions are FREE. Get a taste of the rizz mechanics, zero risk.",
      color: "bg-white text-black",
      icon: "💸",
      rotate: "rotate-1",
    },
    {
      title: "Arranged Marriage Pros",
      description: "We get the desi struggle. Family pressure, rishtas, impressing in-laws — we have playbooks for all of it.",
      color: "bg-secondary text-secondary-foreground",
      icon: "🏠",
      rotate: "rotate-1",
    },
    {
      title: "All Genders Welcome",
      description: "Whether you're a guy trying to shoot his shot or a girl figuring out mixed signals — we've got you.",
      color: "bg-primary text-primary-foreground",
      icon: "🤝",
      rotate: "-rotate-1",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background border-b-[3px] border-border relative overflow-hidden">
      <div className="container px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mb-16 mx-auto text-center bg-white p-8 brutal-border brutal-shadow-sm rotate-1">
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Why We Hit <span className="text-primary underline decoration-[8px] underline-offset-4">Different</span>
          </h2>
          <p className="text-xl font-bold">
            Forget everything you thought you knew about relationship advice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className={`${feature.color} ${feature.rotate} p-8 brutal-border brutal-shadow transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 cursor-default`}
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-black uppercase tracking-tight mb-4">{feature.title}</h3>
              <p className="font-sans text-base font-semibold opacity-90 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
