// Elimina la importación de Resend y la plantilla de correo si no la vas a usar
// import { Resend } from 'resend'; 
import { EmailTemplate } from "@/components/email-template"; // Si no la vas a usar, también puedes eliminarla

// Exporta la función POST para manejar la solicitud
export async function POST(req: Request) {
  try {
    // Obtén los datos del formulario
    const dataForm = await req.json();

    // Aquí ya no necesitas enviar correos, simplemente devuelves una respuesta
    return Response.json({ message: "Formulario recibido correctamente" });
  } catch (error) {
    // Maneja cualquier error y devuelve una respuesta de error
    return Response.json({ error });
  }
}
