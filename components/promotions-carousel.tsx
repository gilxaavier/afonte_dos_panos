"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Clock, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { LinkWhatsApp } from "@/app/page"
import { FaWhatsapp } from "react-icons/fa"

const promotions = [
  {
    id: 1,
    title: "Copa do Mundo 2026",
    description: "A paixão pelo futebol no estilo certo… Peças atuais e lançamentos com preço especial.",
    originalPrice: "R$ 250,00",
    discountPrice: "R$ 179,90",
    discount: "28% OFF",
    whatsappMessage: "Olá, quero ver os modelos da Copa 2026",
    badge: "🔥 ALTA PROCURA",
    badgeColor: "bg-red-500",
    image: "/promo-copa.jpeg",
  },
  {
    id: 2,
    title: "Combo Família",
    description: "Leve mais pagando menos. Perfeito para vestir todo mundo com economia.",
    originalPrice: "R$ 1.439,20",
    discountPrice: "R$ 1.160,00",
    discount: "R$ 145,00 cada",
    whatsappMessage: "Olá, quero montar um combo família",
    badge: "💰 ECONOMIZE MAIS",
    badgeColor: "bg-green-500",
    image: "/promo-familia.jpeg",
  },
  {
    id: 3,
    title: "Kit Casal",
    description: "Combine no estilo com quem você ama e aproveite o preço especial",
    originalPrice: "R$ 340,00",
    discountPrice: "R$ 250,00",
    discount: "26% OFF",
    whatsappMessage: "Olá, quero montar um pedido de kit casal",
    badge: "❤️ MAIS PEDIDO",
    badgeColor: "bg-pink-500",
    image: "/promo-casal.jpeg",
    startsFrom: true,
  }
]

export function PromotionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % promotions.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleInteraction = () => {
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-foreground">Destaques</h3>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>Por tempo limitado</span>
          </div>
        </div>

        {/* Wrapper */}
        <div className="relative">

          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {promotions.map((promo) => (
                <div key={promo.id} className="w-full flex-shrink-0">
                  <Card className="bg-card border-border overflow-hidden">

                    {/* Imagem */}
                    <div className="relative h-40 bg-secondary overflow-hidden">
                      <img
                        src={promo.image}
                        alt={promo.title}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

                      {promo.id !== 1 && (
                        <Badge className={cn("absolute top-3 left-3 font-bold", promo.badgeColor)}>
                          {promo.badge}
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-5 pt-4">

                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {promo.title}
                      </h4>

                      <p className="text-sm text-muted-foreground mb-4">
                        {promo.description}
                      </p>

                      {/* Preço */}
                      <div className="flex flex-wrap items-baseline gap-2 md:gap-3 mb-4">
                        {promo.startsFrom && (
                          <span className="text-xs text-muted-foreground uppercase w-full md:w-auto">
                            a partir de
                          </span>
                        )}

                        <span className="text-2xl font-black text-primary">
                          {promo.discountPrice}
                        </span>

                        <span className="text-sm text-muted-foreground line-through">
                          {promo.originalPrice}
                        </span>

                        <Badge className="bg-primary/20 text-primary font-bold text-xs">
                          {promo.discount}
                        </Badge>
                      </div>

                      {/* CTA */}
                      {promo.id === 1 ? (
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-white font-bold gap-2 h-12"
                          asChild
                        >
                          <a
                            href="https://afontedospanos2.lojavirtualnuvem.com.br/promocao-de-inauguracao/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Quero essa promoção! ↗️
                          </a>
                        </Button>
                      ) : (
                        <Button
                          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold gap-2 h-12"
                          asChild
                        >
                          <a
                            href={LinkWhatsApp(promo.whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaWhatsapp className="w-5 h-5" />
                            Quero essa promoção!
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* BOTÕES (fora do transform) */}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              prevSlide()
              handleInteraction()
            }}
            className="z-50 absolute left-2 bottom-8 w-14 h-14 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer touch-none"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              nextSlide()
              handleInteraction()
            }}
            className="z-50 absolute right-2 bottom-8 w-14 h-14 rounded-full bg-black/70 text-white flex items-center justify-center cursor-pointer touch-none"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                handleInteraction()
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  )
}