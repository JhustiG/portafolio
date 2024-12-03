import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

// Usa la variable de entorno para acceder a la clave de API en producción
const resend = new Resend(process.env.RESEND_API_KEY_PROD);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
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
  } catch (error) {
    return Response.json({ error });
  }
}
