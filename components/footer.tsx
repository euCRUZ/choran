import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CHORAN</h3>
            <p className="text-gray-400">
              Soluções de marketing para empresas que querem crescer de forma
              previsível e escalável.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-gray-400">
                  Av. XXXXX, 000, São Paulo - SP, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-gray-400">(XX) XXXX-XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-gray-400">contato@exemplo.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Choran Marketing. Todos os
              direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-primary"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-primary"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
