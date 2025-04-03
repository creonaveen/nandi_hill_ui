import React, { useState, useRef, useEffect } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Mic, MicOff, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

const InlineSearch: React.FC = () => {
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

    // Add keyboard shortcut for focusing search
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

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

  const suggestedPrompts = [
    "Create a product listing page",
    "Add a shopping cart feature",
    "Build a payment gateway integration",
    "Design a seller dashboard"
  ];

  return (
    <div className="w-full max-w-3xl mx-auto pt-20 pb-4 px-4">
      <Command className="rounded-xl border shadow-md bg-white/80 backdrop-blur-md">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
          <CommandInput
            ref={inputRef}
            placeholder="Ask SellHub how to build your online store... (Press ⌘K to focus)"
            value={query}
            onValueChange={setQuery}
            className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 flex-1"
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
                <MicOff className="h-5 w-5 text-red-500" />
              ) : (
                <Mic className="h-5 w-5 text-seller-purple" />
              )}
            </Button>
          )}
        </div>
        {!query && (
          <CommandList className="px-4 py-4">
            <CommandGroup heading="Try asking about">
              {suggestedPrompts.map((prompt, index) => (
                <CommandItem 
                  key={index}
                  onSelect={() => setQuery(prompt)}
                  className="flex items-center justify-between px-2 py-3 cursor-pointer rounded-lg hover:bg-secondary"
                >
                  <span>{prompt}</span>
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
        <CommandList className={query ? "py-2 px-2" : "hidden"}>
          <CommandEmpty>No results found for "{query}"</CommandEmpty>
          {/* Search results would be displayed here */}
        </CommandList>
      </Command>
      {isListening && (
        <div className="mt-2 text-center text-seller-purple text-sm font-medium animate-pulse">
          Listening... Speak now
        </div>
      )}
    </div>
  );
};

export default InlineSearch;
