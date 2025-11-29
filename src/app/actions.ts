'use server';

import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(data: { email: string; message: string; }) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    // In a real app, you might want to return more specific error messages
    return { success: false, message: 'Invalid data provided. Please check your inputs.' };
  }

  // Here you would implement the logic to connect to Firebase, send an email, etc.
  // For demonstration purposes, we'll just log the data and simulate a success response.
  console.log('Contact form submitted:');
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Thank you for your message! We will get back to you shortly.' };
}
