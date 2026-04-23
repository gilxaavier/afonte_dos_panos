"use client"

import { LinkCatalog, LinkSite, LinkWhatsApp } from "@/app/page"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Medal, MessageCircle, Package, ShieldCheck, User, Volleyball } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export function Hero() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-lg">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge 
            variant="outline" 
            className="bg-primary/10 border-primary/20 text-primary px-4 py-1.5 text-sm font-bold uppercase tracking-wide"
          >
            REFERENCIA EM CAMISETAS DE FUTEBOL
          </Badge>
        </div>

        {/* Headline */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground leading-tight mb-3 text-balance">
            Vista sua <span className="text-primary">Paixão</span> pelo Futebol
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            As melhores camisetas de times e seleções com qualidade premium. 
            Entrega rápida para todo o Brasil.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="justify-center gap-4 mb-8 flex flex-wrap flex-col">
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Package className="w-4 h-4 text-primary" />
              <span>Estoque Nacional</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Medal className="w-4 h-4 text-primary" />
              <span>Qualidade Garantida</span>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4 text-primary" />
              <span>+5 Mil Clientes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Compra segura</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            className="w-full bg-[#d6a22e] hover:bg-[#d6a22e] text-black font-bold text-base h-14 gap-3 shadow-lg shadow-[#d6a22e]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            <ExternalLink className="w-5 h-5" />
            Site em Manutenção...
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 font-semibold text-base h-12 gap-3"
            asChild
          >
            <a 
              href={LinkWhatsApp("Quero comprar, pode me ajudar?")}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Slogan */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="h-px w-8 bg-primary/30" />
          <p className="text-center text-xs text-muted-foreground">
            Desde 2020 vestindo torcedores apaixonados em todo o Brasil
          </p>
          <div className="h-px w-8 bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
