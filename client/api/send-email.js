import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER || "venilanaik2005@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER || "venilanaik2005@gmail.com";

function sanitize(value = "") {
  return String(value).replace(/\r?\n/g, " ").trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!GMAIL_APP_PASSWORD) {
    return res.status(500).json({ error: "Email service is not configured." });
  }

  const { name, email, message } = req.body || {};
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeMessage = sanitize(message);

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${GMAIL_USER}>`,
      to: CONTACT_RECEIVER,
      replyTo: safeEmail,
      subject: `Portfolio inquiry from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Failed to send email." });
  }
}
