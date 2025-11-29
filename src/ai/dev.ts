import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-document-for-mobile.ts';
import '@/ai/flows/ai-classification-of-uploaded-documents.ts';
import '@/ai/flows/validate-extracted-data-with-ai.ts';