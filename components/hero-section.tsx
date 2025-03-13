"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "./particles-background"
import { useRef } from "react"
import { Zap } from "lucide-react"

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary/90 to-primary pt-24 md:pt-28"
    >
      <ParticlesBackground />

      <motion.div
        style={{ opacity, scale, y }}
        className="container relative z-10 mx-auto px-4 text-center text-white md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 max-w-[180px] md:mb-6"
        >
          <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
            <span className="text-2xl font-bold tracking-tight">CHORAN</span>
          </div>
        </motion.div>

        <div className="relative mx-auto mb-4 max-w-5xl md:mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -left-4 -top-4 hidden rounded-full bg-white/10 p-3 backdrop-blur-sm md:block"
          >
            <Zap className="h-6 w-6 text-yellow-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -right-4 -bottom-4 hidden rounded-full bg-white/10 p-3 backdrop-blur-sm md:block"
          >
            <Zap className="h-6 w-6 text-yellow-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="block"
            >
              Fature R$100 a R$500 mil
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block"
            >
              em{" "}
              <span className="relative">
                <span className="relative z-10">6 meses</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-2 left-0 z-0 h-4 w-full bg-primary-foreground/20"
                />
              </span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="block"
            >
              com marketing que <span className="italic">funciona</span>
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mx-auto mb-6 max-w-3xl md:mb-8"
        >
          <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full border-2 border-white/30"></div>
          <div className="absolute -right-4 -bottom-4 h-8 w-8 rounded-full border-2 border-white/30"></div>
          <p className="text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
            Sistema de vendas{" "}
            <span className="relative inline-block font-bold text-white">
              previsível e escalável
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-300"
              />
            </span>{" "}
            para sua empresa nunca parar de vender!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mb-8 max-w-2xl"
        >
          <p className="text-lg text-white/90">
            Seja escalando o seu negócio ou criando um negócio digital do
            absoluto zero. Se o marketing da sua empresa não gera lucro real,
            você não tem um negócio. Tem um{" "}
            <span className="font-bold text-white">PROBLEMA</span>. Nós{" "}
            <span className="font-bold text-white">RESOLVEMOS</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mx-auto mb-24"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-white px-10 py-6 text-lg font-bold text-primary hover:bg-white/90"
              >
                <Link href="#form">
                  <motion.span
                    className="absolute inset-0 bg-white/20"
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
                  QUERO VENDER MAIS
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
