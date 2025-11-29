import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, BrainCircuit, HeartPulse, Puzzle, Star, Bot } from 'lucide-react';

const benefits = [
  {
    icon: <Target className="w-8 h-8 text-secondary" />,
    title: 'The Only True Brand Communication Center',
    description: "Other tools only manage individual channels. AffeXAI brings all channels together to show your brand's true state."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-secondary" />,
    title: 'Powered by Emotional Intelligence',
    description: "It understands not just numbers, but your customers' emotions and measures your brand's emotional health."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-secondary" />,
    title: 'Proactive, Not Reactive',
    description: 'Predicts and recommends before problems escalate. Crisis prevention, not crisis management.'
  },
  {
    icon: <Puzzle className="w-8 h-8 text-secondary" />,
    title: 'Modular and Integrated',
    description: 'Each module can work independently, but when they work together, real value emerges.'
  },
  {
    icon: <Bot className="w-8 h-8 text-secondary" />,
    title: 'AI-Powered Automation',
    description: 'With multi-AI provider support (OpenAI, Anthropic, Google), it uses the most suitable intelligence for each task.'
  },
];

export function Benefits() {
  return (
    <section id="why-us" className="container py-20 md:py-28 bg-card/20 rounded-3xl">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Why AffeXAI Stands Out</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          AffeXAI goes beyond traditional tools—it's a complete Brand Communication Center.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1">{benefit.icon}</div>
            <div>
              <h3 className="font-headline text-xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground mt-1">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
