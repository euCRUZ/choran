"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  DollarSign,
  LineChart,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export function SolutionSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const solutions = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Crescimento Previsível",
      text: "Escalamos empresas para múltiplos 5 dígitos/mês com previsibilidade.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Redução de Custos",
      text: "Reduzimos o custo de aquisição em até 40% enquanto aumentamos as conversões.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Aumento de Receita",
      text: "Multiplicamos a recorrência e o ticket médio sem aumentar seu investimento em tráfego.",
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "Otimização Completa",
      text: "Eliminamos gargalos invisíveis que bloqueiam seu crescimento.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Estratégia Eficiente",
      text: "Se você está investindo e não está vendo retorno, não é um problema do digital. É um problema de estratégia.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="solutions"
      ref={targetRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-20 md:py-32"
    >
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 2,
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 1,
            }}
          />
          <motion.path
            d="M20,20 L80,20 L80,80 L20,80 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 3,
            }}
          />
        </svg>
      </div>

      <motion.div
        style={{ opacity, y }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            SOLUÇÕES EXCLUSIVAS
          </span>
          <h2 className="mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            O que a Choran entrega
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformamos sua estratégia de marketing em uma máquina de vendas
            previsível e escalável
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className={`group relative flex overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 ${
                index === solutions.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
              <div className="mr-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {solution.icon}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-base text-gray-600">{solution.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-primary px-10 py-6 text-lg font-bold"
            >
              <Link href="#form">
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
                AGENDAR UMA CONVERSA
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
