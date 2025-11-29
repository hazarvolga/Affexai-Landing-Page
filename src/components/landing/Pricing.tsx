import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const tiers = [
  {
    name: 'Starter',
    price: 'For Small Businesses',
    description: 'For Small Businesses',
    features: ['Basic brand analysis', '1 user', 'Support + CMS modules', 'Email support'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 'For Growing Companies',
    description: 'For Growing Companies',
    features: ['Advanced brand intelligence', 'Up to 10 users', 'All modules', 'AI-powered recommendations', 'Priority support'],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Corporate Solutions',
    description: 'Corporate Solutions',
    features: ['Custom brand strategy consulting', 'Unlimited users', 'Custom integrations', 'On-premise installation', '24/7 support + dedicated account manager'],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Pricing That Scales With You</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. No hidden fees, no surprises.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className={cn('flex flex-col', tier.highlighted && 'border-primary shadow-2xl shadow-primary/10')}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <p className="font-headline text-3xl font-bold mb-6">{tier.price}</p>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={tier.highlighted ? 'default' : 'outline'}>{tier.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
