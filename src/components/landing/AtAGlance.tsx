import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
    "360° Brand Visibility: Monitor all customer interactions on a single screen",
    "Emotional Brand Health: Track customer sentiment in real-time",
    "Proactive Insights: Detect issues before they escalate",
    "Smart Optimization: Get AI-powered content and communication recommendations",
];

export function AtAGlance() {
    return (
        <section id="at-a-glance" className="container py-20 md:py-28">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">AffeXAI at a Glance</h2>
                    <p className="text-lg text-muted-foreground mt-4">
                        AffeXAI is a Brand Communication Center that consolidates all your brand's digital communication channels and analyzes them with artificial intelligence. From support tickets to social media, email campaigns to web content, it monitors, analyzes every interaction and provides strategic recommendations about your brand's health.
                    </p>
                </div>
                <div>
                    <Card className="bg-card/50">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Key Benefits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
