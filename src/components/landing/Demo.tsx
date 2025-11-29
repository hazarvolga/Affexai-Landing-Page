import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Demo() {
  const demoImages = [
    {id: 'demo-dashboard', description: 'Brand health dashboard (score indicators)'},
    {id: 'demo-reasoning', description: 'Real-time sentiment analysis graph'},
    {id: 'demo-results', description: 'Event bus flow diagram (inter-module communication)'},
    {id: 'demo-upload', description: 'AI-powered content suggestion screen'},
  ].map(item => {
    const img = PlaceHolderImages.find(p => p.id === item.id);
    return img ? { ...img, description: item.description } : null;
  }).filter(Boolean);

  return (
    <section id="demo" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Product Demo Preview</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          See how AffeXAI provides a unified view of your brand's digital pulse and turns insights into action.
        </p>
      </div>

      <Carousel className="w-full max-w-4xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {demoImages.map((image, index) => image && (
            <CarouselItem key={index}>
              <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <CardContent className="p-0">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    data-ai-hint={image.imageHint}
                  />
                </CardContent>
              </Card>
              <p className="text-center mt-4 text-muted-foreground font-medium">{image.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-foreground" />
        <CarouselNext className="text-foreground" />
      </Carousel>

      <div className="text-center mt-12">
        <Button size="lg">
          Watch Live Demo
        </Button>
      </div>
    </section>
  );
}
