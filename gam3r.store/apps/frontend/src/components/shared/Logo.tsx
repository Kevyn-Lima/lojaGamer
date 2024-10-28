import Image from "next/image";
import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png"  width={60} height={60} alt="Logo do Site"></Image>
            <Image src="/logo-texto.png" height={0} width={230} alt="Logo Texto do Site"></Image>
        </Link>
    )
}