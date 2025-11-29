"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long.' }),
});

export function Contact() {
  const [serverState, setServerState] = useState<{ message: string; success: boolean | null }>({ message: '', success: null });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app this would be a separate action
    const response = { success: true, message: 'Thank you for your message! We will get back to you shortly.' };
    setServerState(response);
    if (response.success) {
      form.reset();
    }
  }

  return (
    <section id="contact" className="container py-20 md:py-28">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Ready to Shape Your Brand's Digital Future?</h2>
        <p className="text-lg text-muted-foreground mt-4">
          With AffeXAI, listen to your customers' voices, keep your finger on your brand's pulse, and base your strategic decisions on data.
        </p>
        <div className="flex justify-center gap-4 mt-8">
            <Button size="lg">Try It Free</Button>
            <Button size="lg" variant="outline">Schedule a Demo</Button>
        </div>
      </div>
    </section>
  );
}
