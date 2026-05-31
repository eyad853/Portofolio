import { motion } from "framer-motion";
import { contact , openLink } from "../data";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp , FaLinkedin  , FaGithub } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const contactItems = [
  {
    label: "Email",
    value: contact.email.label,
    onclick: ()=>{
      window.open(  "https://mail.google.com/mail/u/0/#inbox?compose=new",  "_blank")
    },
    icon: MdEmail,
    color: "#9333ea",
    desc: "Drop me a line anytime",
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp.label,
    onclick: ()=>{
      openLink(contact.whatsapp.app , contact.whatsapp.web)
    },
    icon: FaWhatsapp,
    color: "#25D366",
    desc: "Let's chat directly",
  },
  {
    label: "GitHub",
    value: contact.github.label,
    onclick:()=>{
      openLink(contact.github.app , contact.github.web)
    },
    icon: FaGithub,
    color: "#ffffff",
    desc: "Check out my code",
  },
  {
    label: "LinkedIn",
    value: contact.linkedin.label,
    onclick: ()=>{
      openLink(contact.linkedin.app , contact.linkedin.web)
    },
    icon: FaLinkedin,
    color: "#0077B5",
    desc: "Connect professionally",
  },
];

const Contact = () => (
  <section id="contact" className="relative py-28 px-6">
    {/* Decorative glow */}
    <div
      className="absolute inset-x-0 top-0 h-px"
      style={{ background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5), transparent)" }}
    />

    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <span className="text-purple-400 text-sm font-mono tracking-widest uppercase block mb-3">
          — Let's work together
        </span>
        <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-4">
          Get in{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #9333ea, #e11d48)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Touch
          </span>
        </h2>
        <p className="text-purple-200/50 max-w-lg mx-auto font-body text-lg">
          Have a project in mind? I'd love to hear about it. Let's build something
          incredible together.
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            onClick={item.onclick}
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.1 + i * 0.08)}
            whileHover={{
              scale: 1.05,
              y: -6,
              boxShadow: `0 0 30px ${item.color}25`,
            }}
            whileTap={{ scale: 0.96 }}
            className="card-glass gradient-border rounded-2xl p-6 text-center block cursor-pointer transition-all"
          >
            <div className="text-4xl mb-4 flex justify-center"><item.icon /></div>
            <div
              className="text-xs font-mono uppercase tracking-wider mb-2"
              style={{ color: item.color }}
            >
              {item.label}
            </div>
            <div className="text-white font-semibold font-body text-sm mb-1">{item.value}</div>
            <div className="text-purple-300/50 text-xs font-body">{item.desc}</div>
          </motion.a>
        ))}
      </div>

      {/* Large CTA */}
      <motion.div
        {...fadeUp(0.4)}
        className="rounded-2xl p-10 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(147,51,234,0.15), rgba(225,29,72,0.1), rgba(245,158,11,0.08))",
          border: "1px solid rgba(147,51,234,0.25)",
        }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.15), transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="font-display font-bold text-3xl text-white mb-3">
            Ready to start a project?
          </h3>
          <p className="text-purple-200/60 font-body mb-8 max-w-md mx-auto">
            I'm currently available for freelance work and open to fulltime opportunities.
            Let's create something amazing.
          </p>
          <motion.a
            onClick={()=>{window.open("https://mail.google.com/mail/u/0/#inbox?compose=new",  "_blank")}}
            className="inline-block cursor-pointer px-10 py-4 rounded-xl font-display font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg, #7c3aed, #e11d48)" }}
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(147,51,234,0.5)" }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="flex gap-3 items-center">
              Start a Conversation <MdEmail />
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>

    {/* Footer */}
    <motion.div
      {...fadeUp(0.5)}
      className="text-center mt-16 text-purple-400/40 text-sm font-mono"
    >
    </motion.div>
  </section>
);

export default Contact;
