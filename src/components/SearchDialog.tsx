
import React, { useState, useEffect, useRef } from "react";
import { Command, CommandInput, CommandList, CommandEmpty } from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mic, MicOff, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isRecognitionSupported, setIsRecognitionSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    setIsRecognitionSupported(
      'webkitSpeechRecognition' in window || 
      'SpeechRecognition' in window
    );

    // Focus input when dialog opens
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }

    // Cleanup any active recognition on dialog close
    if (!open && isListening) {
      stopListening();
    }
  }, [open, isListening]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error initializing speech recognition:', error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 max-w-2xl">
        <Command className="rounded-lg border-none">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              ref={inputRef}
              placeholder="Search SellHub..."
              value={query}
              onValueChange={setQuery}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            />
            {isRecognitionSupported && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={toggleListening}
                aria-label={isListening ? "Stop voice search" : "Start voice search"}
              >
                {isListening ? (
                  <MicOff className="h-4 w-4 text-red-500" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {/* Search results would be displayed here */}
          </CommandList>
          <div className="px-3 py-2 text-xs text-muted-foreground">
            <div className="flex gap-2 justify-between">
              <span>Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">ESC</kbd> to close</span>
              {isRecognitionSupported && (
                <span>Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">⌘K</kbd> to search</span>
              )}
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
