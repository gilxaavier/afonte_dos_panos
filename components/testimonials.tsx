"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "João Paulo",
    location: "São Paulo, SP",
    avatar: "JP",
    rating: 5,
    text: "Comprei 5 camisetas para revender e vendi tudo em uma semana! Qualidade excelente, meus clientes amaram. Já fiz mais 3 pedidos.",
  },
  {
    name: "Amanda Silva",
    location: "Rio de Janeiro, RJ",
    avatar: "AS",
    rating: 5,
    text: "Atendimento incrível! Tirou todas as minhas dúvidas no WhatsApp e a camiseta chegou antes do prazo. Super recomendo!",
  },
  {
    name: "Lucas Mendes",
    location: "Curitiba, PR",
    avatar: "LM",
    rating: 5,
    text: "Melhor custo-benefício que já encontrei. Tecido de qualidade, costuras perfeitas. Compro sempre aqui pra toda a família.",
  },
  {
    name: "Carla Santos",
    location: "Salvador, BA",
    avatar: "CS",
    rating: 5,
    text: "Mesmo morando no Nordeste, recebi em 8 dias. Camiseta do meu time ficou linda! Já virei cliente fixa.",
  },
]

export function Testimonials() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-lg">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-1">
            O que nossos clientes dizem
          </h3>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">4.9/5 baseado em +200 avaliações</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <Avatar className="w-10 h-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <p className="font-semibold text-sm text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <Quote className="absolute -left-1 -top-1 w-4 h-4 text-primary/20" />
                      <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-6 flex items-center justify-center gap-6 text-center">
          <div>
            <p className="text-2xl font-black text-primary">+5 mil</p>
            <p className="text-xs text-muted-foreground">Clientes satisfeitos</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="text-2xl font-black text-primary">98%</p>
            <p className="text-xs text-muted-foreground">Avaliações positivas</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <p className="text-2xl font-black text-primary">5+</p>
            <p className="text-xs text-muted-foreground">Anos de mercado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
