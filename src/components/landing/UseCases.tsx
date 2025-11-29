import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, User, BarChart, GraduationCap } from 'lucide-react';

const useCases = [
  {
    icon: <Building className="w-8 h-8 text-secondary" />,
    title: 'For Enterprise Brands',
    items: ['Brand Consistency Control', 'Proactive Reputation Management']
  },
  {
    icon: <User className="w-8 h-8 text-secondary" />,
    title: 'For Brand Managers',
    items: ['Strategic Decision Support', 'Predictive customer behavior models']
  },
  {
    icon: <BarChart className="w-8 h-8 text-secondary" />,
    title: 'For Marketing Teams',
    items: ['Campaign Optimization', 'Personalized send time recommendations']
  },
   {
    icon: <GraduationCap className="w-8 h-8 text-secondary" />,
    title: 'For Education and Event Managers',
    items: ['Participant Experience Tracking', 'Automatic certificate generation', 'Satisfaction analysis']
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Powerful for Any Role</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          AffeXAI is a flexible platform that adapts to your unique needs, whether you're a developer, a designer, or a business leader.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {useCases.map((useCase, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row items-center gap-4">
              {useCase.icon}
              <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {useCase.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
