import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../../public/static/images/logo.webp"

export default function Logo(){

    return <Link href='/' passHref>
        <Image src={LogoImg} alt="logo" width={40} height={40}/>
    </Link>
}