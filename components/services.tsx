"use client"; // Marca este archivo como un Client Component

import { useState, useEffect } from "react";
import Title from "./shared/title";
import Image from "next/image"; // Importar el componente Image
import { buttonVariants } from "./ui/button";
import { Paperclip } from "lucide-react";
import Link from "next/link"; // Importar el componente Link

interface StoredFile {
    name: string;
    preview: string | null; // Previsualización del archivo (Base64 para imágenes)
    type: string; // Tipo de archivo (para identificar PDFs e imágenes)
    data: string; // Contenido completo del archivo (Base64 o URL)
}

const Services = () => {
    const [storedFiles, setStoredFiles] = useState<StoredFile[]>([]);

    // Cargar los archivos almacenados desde localStorage al montar el componente
    useEffect(() => {
        const storedFilesString = localStorage.getItem("storedFiles");
        if (storedFilesString) {
            setStoredFiles(JSON.parse(storedFilesString));
        }
    }, []);

    // Guardar los archivos en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("storedFiles", JSON.stringify(storedFiles));
    }, [storedFiles]);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);

            files.forEach((file) => {
                const reader = new FileReader();

                // Leer el archivo como base64
                reader.onloadend = () => {
                    const fileData = reader.result as string; // Contenido del archivo en Base64

                    const newFile: StoredFile = {
                        name: file.name,
                        preview: file.type.startsWith("image/") ? fileData : null, // Solo las imágenes tienen previsualización
                        type: file.type,
                        data: fileData, // Guardamos el contenido completo en base64
                    };

                    // Actualizamos el estado con el nuevo archivo
                    setStoredFiles((prev) => [...prev, newFile]);
                };

                reader.readAsDataURL(file); // Convertir el archivo a Base64
            });
        }
    };

    return (
        <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="services">
            <Title title="Archivos" subtitle="Subir archivos" />

            <div className="mt-5 flex justify-between items-center">
                {/* Campo de selección de archivo */}
                <input
                    type="file"
                    onChange={handleFileSelect} // Cuando los archivos son seleccionados
                    className="hidden"
                    id="file-upload"
                    multiple // Permitir la selección múltiple de archivos
                />
                {/* Botón visible para agregar un archivo */}
                <label
                    htmlFor="file-upload"
                    className={buttonVariants({ variant: "outline" })}
                >
                    <Paperclip className="mr-2" />
                    Agregar archivo
                </label>
            </div>

            {/* Mostrar los archivos seleccionados */}
            {storedFiles.length > 0 && (
                <div className="mt-4">
                    {/* Usamos una grid que se adapta a la cantidad de archivos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                        {storedFiles.map((file, index) => (
                            <div key={index} className="border rounded-xl p-2">
                                {/* Título del archivo */}
                                <p className="text-sm font-semibold text-gray-800">{file.name}</p>

                                {/* Mostrar la vista previa de la imagen */}
                                {file.preview && (
                                    <div className="mt-2">
                                        <Image
                                            src={file.preview}
                                            alt="Vista previa"
                                            width={150}
                                            height={150}
                                            className="rounded-2xl w-full"
                                        />
                                    </div>
                                )}

                                {/* Mostrar el visor de PDF si es un archivo PDF */}
                                {file.type === "application/pdf" && (
                                    <div className="mt-2">
                                        <iframe
                                            src={file.data} // Usamos el contenido Base64 como fuente
                                            width="100%"
                                            height="150px"
                                            className="border border-gray-300 rounded-xl"
                                            title={`Vista previa de ${file.name}`}
                                        />
                                    </div>
                                )}

                                {/* Botón para descargar o abrir el archivo */}
                                <div className="mt-5 flex gap-5">
                                    <Link
                                        className={buttonVariants({ variant: "outline" })}
                                        href={file.data} // Enlace al contenido Base64 del archivo
                                        target="_blank"
                                        download={file.name} // Descargar con el nombre original
                                    >
                                        <Paperclip className="mr-2" />
                                        Descargar
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;
