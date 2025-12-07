import { defineAction } from "astro:actions";
import nodemailer from "nodemailer";
import { z } from "zod";

export const server = {
  sendEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(1),
      phone: z.string().min(1),
      problem: z.string().min(1),
    }),
    handler: async (formData) => {
      console.log("form data:", formData);
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
        from: "Новий кліент",
        to: "kostia505@gmail.com",
        subject: "Заявка на консультацію!",
        text: ` 
          Нова заявка:
          Імʼя: ${formData.name}
          Телефон: ${formData.phone}
          Проблема: ${formData.problem}
        `,
      });

      return { success: true };
    },
  }),
};
