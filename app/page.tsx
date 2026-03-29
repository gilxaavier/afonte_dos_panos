"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PromotionsCarousel } from "@/components/promotions-carousel"
import { Benefits } from "@/components/benefits"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { CatalogCTA } from "@/components/catalog-cta"

export function LinkWhatsApp(message: string) {
  const phone = "5511951388268"
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  return url
}

export function LinkInstagram() {
  return "https://www.instagram.com/afonte_dos_panos?igsh=cjh4Y3c5a2F1eXIz&utm_source=qr" 
}

export function LinkCatalog() {
  return "https://drive.google.com/drive/folders/11N0YSxgnXPSvjPVWqGiS9NqrC7xdKTJr"
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <PromotionsCarousel />
        <CatalogCTA />
        <Benefits />
        <FAQ />
        <Testimonials />
        <Footer />
      </div>
    </main>
  )
}
