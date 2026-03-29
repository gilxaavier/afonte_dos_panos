"use client"

import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LinkWhatsApp } from "@/app/page"

const faqs = [
  {
    question: "Vocês entregam para todo o Brasil?",
    answer: "Sim! Entregamos para todas as regiões do Brasil. O prazo varia de 5 a 15 dias úteis dependendo da sua localização.",
  },
  {
    question: "As camisetas são originais?",
    answer: "Trabalhamos com camisetas de alta qualidade, com tecido premium e estampas duráveis.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Entre 5 a 15 dias úteis após confirmação do pagamento.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Pix, cartão (até 12x), débito e boleto.",
  },
  {
    question: "Posso trocar se não servir?",
    answer: "Sim! Troca em até 7 dias após o recebimento.",
  },
  {
    question: "Vocês vendem no atacado?",
    answer: "Sim! A partir de 12 peças já tem preço especial.",
  },
  {
    question: "Como funciona o pedido pelo WhatsApp?",
    answer: "Você escolhe os produtos, paga e enviamos com rastreio.",
  },
]

export function FAQ() {
  return (
    <section className="py-8 px-4 relative z-10 pointer-events-auto">
      <div className="container mx-auto max-w-lg">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">
            Dúvidas Frequentes
          </h3>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="space-y-2 relative z-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-4 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-sm font-medium py-4 pointer-events-auto">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Ainda tem dúvidas?
          </p>
          <a
            href={LinkWhatsApp("Olá, tenho uma dúvida sobre os produtos")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Fale conosco no WhatsApp →
          </a>
        </div>

      </div>
    </section>
  )
}