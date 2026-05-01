"use client"

import { Instagram, MessageCircle, ExternalLink, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkCatalog, LinkInstagram, LinkSite, LinkWhatsApp } from "@/app/page"
import { FaWhatsapp } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-lg">
        {/* Final CTA */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Pronto para vestir sua <span className="text-primary">paixão</span>?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Faça seu pedido agora e receba em casa com todo cuidado
          </p>
          <Button
            size="lg"
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base h-14 gap-3 shadow-lg shadow-[#25D366]/20"
            asChild
          >
            <a 
              href={LinkWhatsApp("Quero comprar, pode me ajudar?")} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-5 h-5" />
              Fazer Pedido no WhatsApp
            </a>
          </Button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a 
            href={LinkInstagram()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @afonte_dos_panos
          </a>
          <a 
            href={LinkSite()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Site Oficial
          </a>
        </div>

        {/* Info */}
        <div className="text-center space-y-2 mb-6">
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            Entregamos para todo o Brasil
          </p>
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Mail className="w-3 h-3" />
            afontedospano@gmail.com.br
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © 2026 A Fonte dos Panos — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
