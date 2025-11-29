"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function ChatBubble() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          >
            <MessageSquare className="h-7 w-7" />
            <span className="sr-only">Open Chat</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>AI Support Assistant</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
