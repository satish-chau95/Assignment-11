import Image from "next/image";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/">
        <Image
          src="/BIG.png" // Ensure the path is correct
          alt="Mammothzy Logo"
          width={195.26}
          height={75}
          className="ml-20 "
        />
      </Link>
      <Link href="/" className="flex items-center gap-2 text-black px-20 py-8">
        <UserCircle className="w-7 h-7" />
        Profile
      </Link>
    </header>
  );
}