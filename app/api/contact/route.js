// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Programmer Filthi <form@resend.dirtybucket.shop>", // or your verified domain email
      to: "iamvulture04@gmail.com", // your personal inbox
      subject: `New Message from ${name}`,
      reply_to: email,
      text: message,
    });
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
