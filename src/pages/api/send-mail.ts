export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kostia505@gmail.com",
      pass: "tzpd texi zvmf rzvj",
    },
  });

  await transporter.sendMail({
    from: `<your-email@gmail.com>`,
    to: "parhomak30@gmail.com",
    subject: "Заявка на консультацію!",
    text: `Імʼя: ${data.name}\nТелефон: ${data.phone}\n`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
