import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-headline text-primary">AffeX</span>
              <span className="text-2xl font-bold font-headline">AI</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Advanced AI document intelligence to structure your world of data.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">API Docs</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Connect</h4>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} AffeXAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
