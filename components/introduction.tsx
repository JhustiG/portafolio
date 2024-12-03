import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen text-center" id="home">
                <h3 className="text-xl mb-3">Hello I´m</h3>
                <h1 className="text-4xl font-bold mb-3">Norvis Garcia Ocampo 🧑🏽</h1>
                <h2 className="text-2xl text-gray-400">Ingeniero Civil</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contacta conmigo
                        </Link>
                        {/* 
                    <Link className={buttonVariants({ variant: 'secondary' })} 
                          href="/cv-tarre.pdf" target="_blank">
                        <Paperclip className="mr-2" /> Descargar CV
                    </Link> 
                    */}
                    </div>
                </div>
                {/* Imagen centrada */}
                {/* <div className="flex items-center justify-center mt-10">
                <Image src="/profile.png" alt="Profile pic" width={150} height={150} />
            </div> */}
                <div className="flex items-center justify-center mt-10">
                    <Image
                        src="/profile.png"
                        alt="Profile pic"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-transparent p-2 shadow-lg"
                    />
                </div>
            </div>
        </Container>

    );
}

export default Introduction;
