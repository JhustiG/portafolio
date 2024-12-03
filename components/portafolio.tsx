import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Paperclip } from "lucide-react";

const Portafolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portafolio">
            <Title title="Portafolio" subtitle="Trabajos recientes 💼" />

            {/* Grid con 4 columnas en pantallas medianas y mayores */}
            <div className="grid md:grid-cols-4 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{data.title}</h3>

                        {/* Aquí usamos el iframe para mostrar el PDF */}
                        <div className="mb-5">
                            <iframe
                                src={data.image}  // Ruta del archivo PDF
                                width="100%" height="200px"  // Ajusté la altura para una mejor visualización
                                className="rounded-2xl" />
                        </div>

                        <div className="mt-5 flex gap-5">
                            <Link
                                className={buttonVariants({ variant: "outline" })}
                                href={data.Ingresa}  // Cambié data-ingresar por data.Ingresa
                                target="_blank"
                            >
                                <Paperclip className="mr-2" />Ingresar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portafolio;
