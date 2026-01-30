import { Mail, Github, MessageCircle, Linkedin } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@username",
    href: "https://t.me/username"
  },
  {
    icon: Mail,
    label: "Email",
    value: "dev@example.com",
    href: "mailto:dev@example.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/username",
    href: "https://github.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com"
  }
];

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Свяжитесь со мной удобным способом — я отвечу на все вопросы.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <contact.icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
