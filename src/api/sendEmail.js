import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { email, message } = req.body;

  // Konfiguracja transportera (np. Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Twój e-mail (zdefiniowany w zmiennych środowiskowych)
      pass: process.env.EMAIL_PASS, // Hasło aplikacji
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // E-mail odbiorcy
    subject: "Nowa wiadomość z formularza kontaktowego",
    text: `Wiadomość od: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "E-mail został wysłany!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Nie udało się wysłać e-maila." });
  }
}
