"use client"

import { LinkCatalog } from "@/app/page"
import { Button } from "@/components/ui/button"
import { BookOpenCheck, FileText } from "lucide-react"

export function CatalogCTA() {
  return (
    <section className="py-6 px-4">
      <div className="container mx-auto max-w-lg">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <BookOpenCheck className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-foreground">
                Catálogo Pronta Entrega
              </h3>
              <p className="text-sm text-muted-foreground">
                Pronta entrega + envio rápido.
              </p>
              <p className="text-sm text-muted-foreground">
                Escolha e peça pelo WhatsApp.
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12 gap-2"
            asChild
          >
            <a 
              href={LinkCatalog()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FileText className="w-5 h-5" />
              Ver Catálogo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
