import { Layers, Brain, BarChart, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    title: 'Step 1 — Data Collection',
    description: 'AffeXAI collects data from all your digital touchpoints: support tickets, email campaigns, website analytics, social media, and more.',
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: 'Step 2 — Intelligent Analysis',
    description: 'The AI engine processes collected data for sentiment analysis, customer behavior patterns, content performance, and cross-departmental interactions.',
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: 'Step 3 — Insight Generation',
    description: 'Analysis results transform into strategic recommendations like brand health reports, risk detection, content optimization, and proactive strategies.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: 'Step 4 — Automatic Action',
    description: 'The system can automatically escalate critical tickets, pause low-performing campaigns, and route feedback to the right teams based on your preferences.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">How AffeXAI Works</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          From scattered data to actionable insights in four simple steps.
        </p>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/50 hidden md:block -translate-x-1/2" />
        <div className="space-y-0 md:space-y-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 w-full md:w-5/12 ${
                index % 2 === 0 
                  ? 'md:pr-8 md:text-right md:items-end' 
                  : 'md:pl-8 md:text-left md:items-start'
              }`}>
                <div className="p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                  <h3 className="font-headline text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Icon circle */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center z-10">
                  {step.icon}
                </div>
              </div>
              
              {/* Empty column for spacing on desktop */}
              <div className="flex-1 hidden md:block w-full md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}