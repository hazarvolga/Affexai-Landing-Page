import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How is AffeXAI different from other CRM and support tools?',
    answer: "AffeXAI is not just a CRM or support tool, it's a Brand Communication Center. It unifies all your communication channels, analyzes them, and provides insights about your brand's emotional health.",
  },
  {
    question: 'Which AI providers do you use?',
    answer: 'OpenAI (GPT-4), Anthropic (Claude), and Google (Gemini) are integrated. You can select the most suitable model for each task or use your own API keys.',
  },
  {
    question: 'Does it integrate with our existing systems?',
    answer: 'Yes. AffeXAI works seamlessly with your existing tools through REST API, webhooks, and platform integrations.',
  },
  {
    question: 'Is our data secure?',
    answer: 'AffeXAI is designed to be GDPR compliant. All data is stored encrypted, and an on-premise installation option is also available.',
  },
  {
    question: 'Which industries is it suitable for?',
    answer: "It's ideal for any sector with intensive customer communication, such as software, e-commerce, education, finance, and healthcare.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Find answers to common questions about AffeXAI.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
