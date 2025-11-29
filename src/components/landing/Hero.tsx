"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingFeatures = [
  '🎯 Brand Intelligence Center',
  '📊 Emotional Analysis Engine',
  '🤖 AI-Powered Insights',
  '🔄 Integrated Communication Management',
];

export function Hero() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) =>
        (prevIndex + 1) % rotatingFeatures.length
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-abstract');

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col items-start gap-6">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter">
          Manage Your Brand's Digital Pulse from a <span className="text-primary">Single Hub</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          AffeXAI unifies all your customer interactions on one platform, analyzing your brand's emotional state and providing strategic recommendations. Bring support, marketing, social media, and content management under one roof.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button size="lg">Discover Your Brand</Button>
          <Button size="lg" variant="outline">
            Request a Demo
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-4 h-8">
          <div className="w-1.5 h-full bg-primary rounded-full" />
          <AnimatePresence mode="wait">
            <motion.p
              key={currentFeatureIndex}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-lg font-semibold text-foreground"
            >
              {rotatingFeatures[currentFeatureIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <div className="relative">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={600}
            height={400}
            className="rounded-xl shadow-2xl shadow-primary/10 w-full"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
    </section>
  );
}
