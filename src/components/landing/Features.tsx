import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, GitBranchPlus, Puzzle, Mail, FileText, Bot } from 'lucide-react';

const features = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Brand Intelligence Center',
    description: "AffeXAI collects data from every customer interaction and continuously analyzes your brand's emotional state. It keeps a finger on your brand's pulse with data from support quality, marketing performance, and content engagement.",
    details: [
        "Real-time brand health score",
        "Customer sentiment trends",
        "Cross-departmental performance comparison",
        "Early warning system"
    ]
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: 'Strategic Insights and Recommendations',
    description: 'The AI-powered analysis engine processes data from all your communication channels to provide strategic recommendations.',
    details: [
        "Which support topics create the most dissatisfaction?",
        "Do your email campaigns' tone and style align with your brand voice?",
        "How do your social media interactions reflect on your brand?",
        "Which content delivers the highest conversions?"
    ]
  },
  {
    icon: <GitBranchPlus className="w-8 h-8 text-primary" />,
    title: 'Integrated Communication Management',
    description: 'Manage all your communication channels on a single platform: Support Center, Email Marketing, Content Management (CMS), and Certificate Management.',
     details: [
        "AI chatbot and live support",
        "Campaign management and A/B testing",
        "Block-based page editor",
        "Bulk certificate generation"
    ]
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'Smart Automation System',
    description: 'Thanks to event bus architecture, all modules communicate with each other.',
    details: [
        "FAQs are automatically created from support tickets",
        "Emails are triggered based on customer behavior",
        "Social media feedback is routed to the support team",
        "Content performance influences marketing strategy"
    ]
  },
];

export function Features() {
  return (
    <section id="features" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Key Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              {feature.icon}
              <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground/80 text-sm">
                {feature.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
