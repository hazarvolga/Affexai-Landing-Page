'use server';
/**
 * @fileOverview A document summarization AI agent for mobile devices.
 *
 * - summarizeDocumentForMobile - A function that handles the document summarization process.
 * - SummarizeDocumentForMobileInput - The input type for the summarizeDocumentForMobile function.
 * - SummarizeDocumentForMobileOutput - The return type for the summarizeDocumentForMobile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDocumentForMobileInputSchema = z.object({
  documentText: z
    .string()
    .describe('The text content of the document to be summarized.'),
});
export type SummarizeDocumentForMobileInput = z.infer<typeof SummarizeDocumentForMobileInputSchema>;

const SummarizeDocumentForMobileOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the document, optimized for mobile viewing.'),
});
export type SummarizeDocumentForMobileOutput = z.infer<typeof SummarizeDocumentForMobileOutputSchema>;

export async function summarizeDocumentForMobile(input: SummarizeDocumentForMobileInput): Promise<SummarizeDocumentForMobileOutput> {
  return summarizeDocumentForMobileFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeDocumentForMobilePrompt',
  input: {schema: SummarizeDocumentForMobileInputSchema},
  output: {schema: SummarizeDocumentForMobileOutputSchema},
  prompt: `You are an AI assistant specialized in summarizing documents for mobile devices. Please provide a concise summary of the following document, optimized for quick understanding on a mobile screen.  The summary should be no more than 5 sentences.

Document: {{{documentText}}}`,
});

const summarizeDocumentForMobileFlow = ai.defineFlow(
  {
    name: 'summarizeDocumentForMobileFlow',
    inputSchema: SummarizeDocumentForMobileInputSchema,
    outputSchema: SummarizeDocumentForMobileOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
