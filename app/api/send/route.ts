// Importa solo la plantilla de correo (si la necesitas)
import { EmailTemplate } from "@/components/email-template";

// Comenta o elimina la inicialización de Resend
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();

    // Aquí comentamos o eliminamos el código que interactúa con Resend
    /*
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["rafatarre@gmail.com"],
        subject: "Tarredev landing",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "Tarredev",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
    */

    // Devuelve una respuesta sin intentar enviar el correo
    return Response.json({ message: "Formulario recibido correctamente" });
  } catch (error) {
    return Response.json({ error });
  }
}
