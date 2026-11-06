import emailjs from "@emailjs/browser";
import { useState } from "react";
import Alert from "../components/Alert";
import CopyEmailButton from "../components/CopyEmailButton";
import { Particles } from "../components/Particles";
import { CALENDLY_URL } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_tvc3bot",
        "template_oqsanen",
        {
          from_name: formData.name,
          to_name: "Nasrullah",
          from_email: formData.email,
          to_email: "nasrullah4222@gmail.com",
          message: formData.message,
        },
        "ex4CdcYWqaX1j7j6_",
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section
      id="contact"
      className="relative flex items-center c-space contact-section-spacing"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="flex flex-col">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-orange">
              <span className="mr-3 inline-block h-px w-9 align-middle bg-orange" />
              Chat with me
            </p>
            <h2 className="max-w-xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Let&apos;s build
              <br />
              something useful
            </h2>
            <p className="mt-9 max-w-xl border-t border-white/15 pt-9 text-base leading-8 text-neutral-400">
              Share what you&apos;re working on and I&apos;ll get back to you
              within a day. Prefer chat? Reach me directly.
            </p>
          </div>
          <div className="mt-16">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              <span className="mr-4 text-orange">03</span>
              Direct channels
            </p>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["01", "✉", "Email", "mailto:nasrullah4222@gmail.com"],
                ["02", "⌕", "WhatsApp", "https://wa.me/+01540100483"],
                ["03", "◉", "Book a call", CALENDLY_URL],
              ].map(([number, icon, label, href]) =>
                label === "Email" ? (
                  <div key={number} className="contact-channel-row">
                    <span className="text-orange">{number}</span>
                    <CopyEmailButton
                      className="contact-email-button"
                      channelStyle
                    />
                  </div>
                ) : (
                  <a
                    key={number}
                    href={href}
                    target={label === "Book a call" ? "_blank" : undefined}
                    rel={label === "Book a call" ? "noreferrer" : undefined}
                    className="contact-channel-row text-xs uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-orange"
                  >
                    <span className="text-orange">{number}</span>
                    <span className="text-lg">{icon}</span>
                    <span>{label}</span>
                    <span className="ml-auto text-lg">↗</span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-[#11100e]/85 p-6 sm:p-8">
          <div className="mb-8 h-px bg-white/10">
            <span className="block h-px w-9 bg-orange" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="field-label text-neutral-400">
                  <span className="mr-3 text-orange">01</span>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input field-input-focus"
                  placeholder="John Doe"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="field-label text-neutral-400">
                  <span className="mr-3 text-orange">02</span>
                  Email or Discord tag
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input field-input-focus"
                  placeholder="john@example.com or user#0000"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="my-8 border-t border-white/10 pt-7">
              <label htmlFor="message" className="field-label text-neutral-400">
                <span className="mr-3 text-orange">03</span>
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="field-input field-input-focus resize-none"
                placeholder="Hey! I have a project idea..."
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-t border-white/10 pt-7">
              <button
                type="submit"
                className="rounded-full bg-orange px-8 py-4 text-sm font-bold text-[#1a100b] transition-transform hover:scale-105"
              >
                {!isLoading ? "➤  Send Message" : "Sending..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
