'use server';
/**
 * @fileOverview AI-powered data validation flow for AffeXAI.
 *
 * - validateExtractedData - Validates extracted data from documents using AI.
 * - ValidateExtractedDataInput - The input type for the validateExtractedData function.
 * - ValidateExtractedDataOutput - The return type for the validateExtractedData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ValidateExtractedDataInputSchema = z.object({
  documentText: z
    .string()
    .describe('The text content of the document from which data was extracted.'),
  extractedData: z
    .string()
    .describe('The extracted data in JSON format to be validated.'),
});
export type ValidateExtractedDataInput = z.infer<typeof ValidateExtractedDataInputSchema>;

const ValidateExtractedDataOutputSchema = z.object({
  isValid: z.boolean().describe('Whether the extracted data is valid and consistent.'),
  validationErrors: z
    .array(z.string())
    .describe('A list of validation errors, if any.'),
  validatedData: z
    .string()
    .optional()
    .describe('The validated and corrected data in JSON format, if applicable.'),
});
export type ValidateExtractedDataOutput = z.infer<typeof ValidateExtractedDataOutputSchema>;

export async function validateExtractedData(
  input: ValidateExtractedDataInput
): Promise<ValidateExtractedDataOutput> {
  return validateExtractedDataFlow(input);
}

const validateExtractedDataPrompt = ai.definePrompt({
  name: 'validateExtractedDataPrompt',
  input: {schema: ValidateExtractedDataInputSchema},
  output: {schema: ValidateExtractedDataOutputSchema},
  prompt: `You are an AI data validation expert for AffeXAI, specializing in identifying inconsistencies and errors in extracted data from documents.

You will receive the document text and the extracted data in JSON format. Your task is to:

1.  Assess the validity and consistency of the extracted data based on the document text.
2.  Identify any errors, inconsistencies, missing information, or anomalies in the extracted data.
3.  Provide a list of validation errors, if any.
4.  If possible, correct the data and return the validated data in JSON format.

Document Text: {{{documentText}}}

Extracted Data (JSON): {{{extractedData}}}

Output a JSON object with the following fields:

-   isValid (boolean): true if the extracted data is valid and consistent, false otherwise.
-   validationErrors (string[]): A list of validation errors, if any.  If there are no errors, this should be an empty array.
-   validatedData (string, optional): The validated and corrected data in JSON format, if applicable. Only include this field if corrections were made.

Ensure that the output is a valid JSON object.

Example Output (with errors):
{
  "isValid": false,
  "validationErrors": [
  "Inconsistency found in the address field.",
  "Missing invoice number."
  ],
}

Example Output (no errors):
{
  "isValid": true,
  "validationErrors": []
}
`,
});

const validateExtractedDataFlow = ai.defineFlow(
  {
    name: 'validateExtractedDataFlow',
    inputSchema: ValidateExtractedDataInputSchema,
    outputSchema: ValidateExtractedDataOutputSchema,
  },
  async input => {
    const {output} = await validateExtractedDataPrompt(input);
    return output!;
  }
);
