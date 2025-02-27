import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <Image
            src="/BIG.png"
            alt="Mammothzy Logo"
            width={250}
            height={96}
            className="mx-auto"
          />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Marketplace for searching, filtering and instantly booking team activities
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-sm text-gray-600">Copyright © 2024</p>
      </div>
    </footer>
  )
}

