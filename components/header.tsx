"use client"

import { Instagram, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { LinkInstagram, LinkWhatsApp } from "@/app/page";

export function Header() {
  const message = "Quero comprar, pode me ajudar?"

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-card border border-border shadow-lg">
              <Image
                src="/logo.jpeg"
                alt="A Fonte dos Panos"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-black text-sm text-primary tracking-wide">A FONTE DOS PANOS</h1>
              <p className="text-xs text-muted-foreground">Camisetas de Times e Seleções</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              asChild
            >
              <a 
                href={LinkInstagram()}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold gap-2"
              asChild
            >
              <a 
                href={LinkWhatsApp(message)}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
