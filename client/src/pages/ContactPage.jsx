import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";

function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Add EmailJS env vars to enable sending.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Message failed to send. Please try again.");
    }
  };

  return (
    <div className="space-y-6 py-5 sm:space-y-8 sm:py-6">
      <Reveal className="panel soft-card soft-card-lg float-in p-5 sm:p-8">
        <p className="tag">Contact</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
          Lets connect and collaborate
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Friendly communication and clear creative alignment for your content goals.
        </p>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="panel soft-card p-4 sm:p-7">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Send a Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-5 grid gap-3">
            <label className="text-sm font-semibold">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="glass-input"
            />
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="glass-input"
            />
            <label className="text-sm font-semibold">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message..."
              className="glass-input"
            />
            <button type="submit" className="btn-main mt-2 w-max text-xs sm:text-sm">
              Send Message
            </button>
            {status ? <p className="text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
          </form>
        </Reveal>

        <Reveal className="space-y-5">
          <div className="panel soft-card lift-hover group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Sample collaboration image"
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64"
            />
          </div>
          <div className="panel soft-card space-y-3 p-4 sm:p-5">
            <h3 className="font-display text-xl font-bold sm:text-2xl">Social and Contact</h3>
            <p className="flex items-center gap-2 text-sm">
              <FiInstagram /> Instagram: add your real profile URL
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FiMail /> Email: add your real contact email
            </p>
            <p className="flex items-center gap-2 text-sm">
              <FiPhone /> Phone: add your real number
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ContactPage;
