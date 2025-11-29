import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    quote: "Thanks to AffeXAI, customer dissatisfaction decreased by 40%. We see problems before they grow.",
    name: 'Brand Manager',
    title: 'Technology Company',
  },
  {
    id: 'testimonial-2',
    quote: "We manage all our marketing channels from one place. Our brand consistency has never been this high.",
    name: 'CMO',
    title: 'E-commerce Platform',
  },
  {
    id: 'testimonial-3',
    quote: "Thanks to AI-powered recommendations, our email open rates increased by 65%.",
    name: 'Marketing Director',
    title: 'SaaS Company',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Loved by Industry Leaders</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our clients have to say.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => {
          const image = PlaceHolderImages.find(img => img.id === testimonial.id);
          return (
            <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="pt-6">
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader className="flex flex-row items-center gap-4">
                {image && (
                    <Avatar>
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                )}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
