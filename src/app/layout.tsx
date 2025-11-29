import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ChatBubble } from '@/components/landing/ChatBubble';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'AffeXAI: AI Document Intelligence',
  description:
    'Transform Technical Documents into Structured Intelligence with AffeXAI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased bg-background')}>
        {children}
        <Toaster />
        <ChatBubble />
      </body>
    </html>
  );
}
