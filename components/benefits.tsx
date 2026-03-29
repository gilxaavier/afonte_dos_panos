"use client"

import { Truck, ShieldCheck, Headphones, CreditCard, Package, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Truck,
    title: "Entrega em Todo Brasil",
    description: "Enviamos para qualquer lugar do país com rastreamento",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Premium",
    description: "Tecido de alta qualidade e acabamento perfeito",
  },
  {
    icon: Headphones,
    title: "Suporte Rápido",
    description: "Atendimento via WhatsApp em minutos",
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Pix, cartão ou boleto com parcelamento",
  },
  {
    icon: Package,
    title: "Embalagem Segura",
    description: "Produtos embalados com cuidado para chegarem perfeitos",
  },
  {
    icon: Award,
    title: "Satisfação Garantida",
    description: "Troca fácil caso não fique satisfeito",
  },
]

export function Benefits() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-lg">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Por que escolher a <span className="text-primary">Fonte dos Panos</span>?
          </h3>
          <p className="text-sm text-muted-foreground">
            Qualidade de verdade, modelos atuais e preço que compensa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/30 transition-colors"
            >
              <CardContent className="p-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-center text-sm text-foreground">
            <span className="font-bold text-primary">+20 mil pedidos</span> entregues com 
            <span className="font-bold text-primary"> 98% de avaliações positivas</span>
          </p>
        </div>
      </div>
    </section>
  )
}
