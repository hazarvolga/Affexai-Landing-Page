'use server';
/**
 * @fileOverview This file contains the AI classification flow for uploaded documents.
 *
 * It defines a Genkit flow that takes a document (as a data URI) and classifies it into predefined categories using AI.
 *
 * @fileOverview
 * - `classifyDocument`: A function that classifies the document.
 * - `ClassifyDocumentInput`: The input type for the classifyDocument function.
 * - `ClassifyDocumentOutput`: The return type for the classifyDocument function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassifyDocumentInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "The document to classify, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'"
    ),
  categories: z
    .array(z.string())
    .describe('A list of document categories to classify the document into.'),
});
export type ClassifyDocumentInput = z.infer<typeof ClassifyDocumentInputSchema>;

const ClassifyDocumentOutputSchema = z.object({
  classification: z
    .string()
    .describe('The predicted category of the document based on its content.'),
  confidence: z
    .number()
    .describe('The confidence score (0-1) of the classification.'),
});
export type ClassifyDocumentOutput = z.infer<typeof ClassifyDocumentOutputSchema>;

export async function classifyDocument(input: ClassifyDocumentInput): Promise<ClassifyDocumentOutput> {
  return classifyDocumentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classifyDocumentPrompt',
  input: {schema: ClassifyDocumentInputSchema},
  output: {schema: ClassifyDocumentOutputSchema},
  prompt: `You are an AI document classification expert. You will classify the provided document into one of the following categories: {{categories}}.

  Analyze the content of the document and determine the most appropriate category.

  Document: {{media url=documentDataUri}}

  Respond with the classification and a confidence score (0-1).`,
});

const classifyDocumentFlow = ai.defineFlow(
  {
    name: 'classifyDocumentFlow',
    inputSchema: ClassifyDocumentInputSchema,
    outputSchema: ClassifyDocumentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
