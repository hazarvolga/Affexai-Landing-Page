const integrations = [
  { name: 'OpenAI', logo: <OpenAI_Logo /> },
  { name: 'Anthropic', logo: <Anthropic_Logo /> },
  { name: 'Google AI', logo: <GoogleAI_Logo /> },
  { name: 'AWS', logo: <AWS_Logo /> },
  { name: 'PostgreSQL', logo: <PostgreSQL_Logo /> },
  { name: 'Redis', logo: <Redis_Logo /> },
  { name: 'Webhooks', logo: <Webhooks_Logo /> },
];

export function Integrations() {
  return (
    <section id="integrations" className="container py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Integrates With Your Stack</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          AffeXAI integrates seamlessly with your existing workflow, APIs, cloud storage, and internal systems.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 items-center">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex justify-center grayscale hover:grayscale-0 transition-all text-muted-foreground hover:text-foreground">
              <div className="w-24 h-16 flex items-center justify-center">
                {integration.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenAI_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor">
      <path d="M22.2819 19.3333L18.6666 17.3334L15.0513 19.3333L11.436 17.3334L7.82072 19.3333L4.20541 17.3334L0.590088 19.3333V15.5L4.20541 13.5L7.82072 15.5L11.436 13.5L15.0513 15.5L18.6666 13.5L22.2819 15.5V19.3333ZM22.2819 8.5V4.66667L18.6666 6.66663L15.0513 4.66667L11.436 6.66663L7.82072 4.66667L4.20541 6.66663L0.590088 4.66667V8.5L4.20541 10.5L7.82072 8.5L11.436 10.5L15.0513 8.5L18.6666 10.5L22.2819 8.5Z" />
    </svg>
  );
}
function Anthropic_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="currentColor">
      <path d="M22.613.003H1.383C.62.003 0 .622 0 1.386v21.229c0 .763.62 1.383 1.383 1.383h21.23c.763 0 1.383-.62 1.383-1.383V1.386c0-.764-.62-1.383-1.383-1.383ZM7.88 19.493H4.12V7.12h3.76zm8.24-5.462-3.66-6.911h4.032l1.624 3.447 1.623-3.447h4.032l-3.66 6.91v5.352h-3.99z" />
    </svg>
  );
}

function GoogleAI_Logo() {
  return (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12" fill="currentColor">
      <path d="M12 15.667a.917.917 0 0 1-.917-.917V9.17c0-.506.41-.917.917-.917s.917.41.917.917v5.58a.917.917 0 0 1-.917.917m5.58-2.75a.917.917 0 0 1-.917-.917V6.417c0-.506.41-.917.917-.917s.917.41.917.917v5.58a.917.917 0 0 1-.917.917m-11.16 0a.917.917 0 0 1-.917-.917V9.17c0-.506.41-.917.917-.917s.917.41.917.917v3.03a.917.917 0 0 1-.917.917M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12"/>
    </svg>
  );
}

function AWS_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="currentColor">
      <path d="M13.297 3.483c-.34-.487-.99-.487-1.33 0L2.48 18.73c-.333.477.013.955.57.955h17.9c.557 0 .903-.478.57-.955L13.297 3.483zm-2.604 8.248h2.052c.234 0 .426.192.426.426v3.256c0 .234-.192.426-.426.426h-2.052c-.234 0-.426-.192-.426-.426v-3.256c0-.234.192-.426.426-.426zm2.868-3.41c0-.982-.795-1.777-1.776-1.777a1.776 1.776 0 100 3.553c.981 0 1.776-.795 1.776-1.776z"/>
    </svg>
  );
}

function PostgreSQL_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor">
      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.56 18.006h-2.736v-7.14h2.736v7.14zm4.08-9.9H12.6v9.9h1.92v-3.9h1.632c2.82 0 4.38-1.5 4.38-4.064 0-2.48-1.572-4.016-4.032-4.016zm0 6.176H14.52v-4.4h.024c1.236.012 1.956.78 1.956 2.192.012 1.56-1.02 2.208-1.92 2.208zM9.012 6.846A1.86 1.86 0 0 1 7.14 5.01a1.86 1.86 0 0 1 1.872-1.836 1.86 1.86 0 0 1 1.872 1.836 1.86 1.86 0 0 1-1.872 1.836z" />
    </svg>
  );
}

function Redis_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="currentColor">
      <path d="M12.384 1.442c-2.316 0-3.36 1.254-3.36 3.01v1.164h2.184V4.454c0-.66.492-1.188 1.176-1.188.708 0 1.188.54 1.188 1.188v13.728c0 .66-.492 1.188-1.176 1.188-.708 0-1.188-.54-1.188-1.188V9.818H9.024v9.36c0 1.764 1.044 3.012 3.36 3.012 2.316 0 3.36-1.254 3.36-3.012V4.454c0-1.758-1.044-3.012-3.36-3.012z"/>
    </svg>
  );
}

function Webhooks_Logo() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path d="M21 12c0 4.2-2.8 7.5-6.5 7.5S8 16.2 8 12c0-4.4 3.1-7.5 4.5-7.5" />
      <path d="M12.5 6A2.5 2.5 0 1 1 10 3.5" />
      <path d="M8 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
}
