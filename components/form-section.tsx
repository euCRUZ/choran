"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useRef } from "react"

export function FormSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    segment: "",
  })

  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section
      id="form"
      ref={targetRef}
      className="relative bg-background py-20 md:py-32"
    >
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            Soluções de marketing para os mais diversos negócios de diversos
            tamanhos
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-2 border-primary/10 shadow-lg">
              <CardHeader className="space-y-1 bg-primary/5 text-center">
                <CardTitle className="text-2xl">
                  Preencha o formulário
                </CardTitle>
                <CardDescription>
                  Receba informações personalizadas para o seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormState({ ...formState, segment: value })
                      }
                    >
                      <SelectTrigger className="border-primary/20 focus-visible:ring-primary">
                        <SelectValue placeholder="Selecione o segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="service">
                          Prestação de Serviços
                        </SelectItem>
                        <SelectItem value="saas">SaaS / Software</SelectItem>
                        <SelectItem value="retail">Varejo</SelectItem>
                        <SelectItem value="other">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-2"
                  >
                    <Button
                      type="submit"
                      className="relative w-full overflow-hidden bg-primary py-6 text-lg font-bold"
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/10"
                        animate={{
                          x: ["100%", "-100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          ease: "linear",
                          repeatDelay: 1,
                        }}
                      />
                      RECEBER INFORMAÇÕES
                    </Button>
                  </motion.div>

                  <p className="pt-2 text-center text-xs text-gray-500">
                    Ao enviar, você concorda com nossa política de privacidade.
                    Seus dados estão seguros conosco.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
