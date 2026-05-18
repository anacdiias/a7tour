"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Heart,
  MapPin,
  MessageCircle,
  Plane,
  Sparkles,
  Video,
  Wifi,
} from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

const featureList = [
  "Roteiros inesperados",
  "Cenas que te colocam no filme",
  "Um outro Rio para viver",
];

const experiences = [
  {
    title: "Ilhas Tijucas",
    description: "Águas cristalinas, praias desertas e o melhor visual do litoral carioca em um só passeio.",
    asset: "/assets/tijucas.jpg",
  },
  {
    title: "Ilha da Gigoia",
    description: "Almoço de pé na areia, vibe paradisíaca e um outro Rio para descobrir a partir da água.",
    asset: "/assets/gigoia.jpg",
  },
  {
    title: "Jet Ski Premium",
    description: "Adrenalina, velocidade e saltos sobre as ondas com trilha de drone que registra cada momento.",
    asset: "/assets/jetski-tour.jpg",
  },
  {
    title: "Snorkel",
    description: "Explore piscinas naturais entre peixes coloridos. Equipamento incluso e suporte total.",
    asset: "/assets/snorkel.jpg",
  },
];

const videoShowcase = [
  {
    title: "Passeio Vista",
    description: "Uma visão aérea do Rio, navegando entre ilhas, praias e cartões-postais.",
    src: "/assets/passeio-vista.mp4",
    poster: "/assets/tijucas.jpg",
  },
  {
    title: "Drone Vista",
    description: "O olhar do drone sobre o seu dia, capturando movimento, cores e emoção.",
    src: "/assets/drone-vista.mp4",
    poster: "/assets/gigoia.jpg",
  },
];

const celebrationTypes = [
  {
    label: "Pedido de casamento",
    title: "Um cenário feito para o sim.",
    description: "Do primeiro olhar ao brinde final, cada detalhe é pensado para ser uma lembrança inesquecível.",
    icon: Heart,
  },
  {
    label: "Aniversário",
    title: "Celebre no mar com quem importa.",
    description: "Datas especiais ganham trilha sonora, decoração e um clima leve para amigos e família.",
    icon: Sparkles,
  },
  {
    label: "Encontro de amigos",
    title: "Uma festa pronta para acontecer.",
    description: "Cuidamos da experiência completa para que você só precise chegar, brindar e viver.",
    icon: MessageCircle,
  },
];

const journeySteps = [
  {
    title: "Design do seu dia",
    description: "Consultoria rápida para entender como você quer viver o Rio e transformar isso em um roteiro único.",
    icon: Plane,
  },
  {
    title: "A Experiência",
    description: "Embarque VIP, briefing leve e um dia pensado para diversão, descoberta e conexão com a cidade.",
    icon: Wifi,
  },
  {
    title: "A Captação",
    description: "Drones e câmeras acompanham cada curva, salto e sorriso para criar seu filme exclusivo.",
    icon: Camera,
  },
  {
    title: "Sua Estreia",
    description: "Você recebe o material editado com cor e trilha sonora, pronto para reviver e compartilhar.",
    icon: Sparkles,
  },
];

function FeatureChip({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-[#C1A68D]/30 bg-white/70 px-4 py-2 text-sm font-medium text-[#001a33] shadow-sm shadow-[#001a33]/5 backdrop-blur-sm">
      {label}
    </div>
  );
}

function ExperienceCard({ title, description, asset, className = "" }: { title: string; description: string; asset: string; className?: string }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className={`group relative overflow-hidden rounded-[2rem] text-white shadow-[0_30px_80px_rgba(0,26,51,0.12)] ${className}`}
    >
      <img
        src={asset}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-8">
        <div className="rounded-[1.75rem] bg-black/55 p-6 backdrop-blur-sm">
          <span className="text-xs uppercase tracking-[0.35em] text-[#F5F5EE]">Experiência</span>
          <h3 className="mt-4 text-3xl font-[350] leading-tight tracking-tight text-white">{title}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/85">{description}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#F5F5EE] transition duration-300 group-hover:text-white"
          >
            Descobrir experiência
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CelebrationCard({ label, title, description, Icon }: { label: string; title: string; description: string; Icon: typeof Heart }) {
  return (
    <motion.div variants={sectionFade} className="group rounded-[2rem] border border-[#001a33]/10 bg-white/95 p-8 shadow-[0_30px_80px_rgba(0,26,51,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(0,26,51,0.12)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#001a33]/5 text-[#001a33]">
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-xs uppercase tracking-[0.35em] text-[#C1A68D]">{label}</span>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#001a33]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#001a33]/75">{description}</p>
    </motion.div>
  );
}

function JourneyStep({ title, description, Icon, index }: { title: string; description: string; Icon: typeof Plane; index: number }) {
  return (
    <motion.div variants={sectionFade} className="relative pl-14">
      <span className="pointer-events-none absolute left-0 top-1 text-4xl font-[300] tracking-tight text-[#001a33]/15">
        0{index + 1}
      </span>
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#001a33]/5 text-[#001a33]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-[#001a33]">{title}</h4>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[#001a33]/75">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="scroll-smooth bg-[#F5F5F0] font-sans text-[#001a33] antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-[#F5F5F0]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="text-lg font-semibold tracking-[0.35em] uppercase text-[#001a33]">A7tour</div>
          <a
            href="#contact"
            className="hidden rounded-full border border-[#001a33]/15 bg-white/75 px-5 py-3 text-sm font-medium transition hover:border-[#001a33]/30 hover:bg-white md:inline-flex"
          >
            Contato
          </a>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section className="relative min-h-screen overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/assets/hero-video.mp4"
            poster="/assets/A7Tour.svg"
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001a33]/45 via-[#001a33]/25 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(245,245,240,0.95),transparent)]" />
          <div className="relative mx-auto flex min-h-[100vh] max-w-7xl items-center justify-center px-6 py-24 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 max-w-3xl text-center"
            >
              <p className="mb-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/85 backdrop-blur-sm">
                Uma experiência carioca que parece um filme
              </p>
              <h1 className="mt-8 text-5xl font-[300] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                O Rio de Janeiro como sua própria cena de cinema.
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Jet Ski, lanchas e helicópteros. Viva um dia diferente, conhecendo um Rio que só quem está junto com a gente percebe.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#001a33] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 ease-out transform-gpu hover:scale-105 hover:bg-[#003050]"
                >
                  Começar minha jornada
                </a>
                <a
                  href="https://wa.me/5521999999999?text=Quero%20uma%20experi%C3%AAncia%20A7Tour"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 ease-out transform-gpu hover:scale-105 hover:bg-white/15"
                >
                  Falar via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-8 text-center"
          >
            <motion.h2 variants={sectionFade} className="text-3xl font-[300] tracking-[-0.04em] sm:text-4xl">
              Nós não fazemos passeios. Nós roteirizamos memórias.
            </motion.h2>
            <motion.p variants={sectionFade} className="mx-auto max-w-3xl text-base leading-8 text-[#001a33]/80 sm:text-lg">
              Esqueça o turismo tradicional. Preparamos roteiros autênticos pelas águas e céus do Rio, onde você vive o roteiro, descobre um outro lado da cidade e recebe cada momento como se estivesse em cena.
            </motion.p>
            <motion.div variants={sectionFade} className="flex flex-wrap justify-center gap-4 pt-4">
              {featureList.map((feature) => (
                <FeatureChip key={feature} label={feature} />
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
            >
              <motion.div variants={sectionFade} className="grid gap-6">
                <ExperienceCard {...experiences[0]} className="min-h-[620px]" />
                <ExperienceCard {...experiences[1]} className="min-h-[420px]" />
              </motion.div>
              <div className="grid gap-6">
                <ExperienceCard {...experiences[2]} className="min-h-[420px]" />
                <ExperienceCard {...experiences[3]} className="min-h-[420px]" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionFade}
              className="space-y-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#C1A68D]">Vídeos da experiência</p>
              <h2 className="text-4xl font-[300] tracking-tight sm:text-5xl">
                Veja como o Rio ganha vida no nosso olhar.
              </h2>
              <p className="max-w-2xl text-base leading-9 text-[#001a33]/80">
                Dois cortes de vídeo que mostram o passeio de cima e o olhar do drone sobre o seu dia.
              </p>
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-2">
              {videoShowcase.map((video) => (
                <motion.div
                  key={video.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={sectionFade}
                  className="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(0,26,51,0.08)]"
                >
                  <div className="aspect-video overflow-hidden bg-black">
                    <video
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      src={video.src}
                      poster={video.poster}
                      autoPlay
                      controls
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="relative p-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#F5F5EE]">{video.title}</p>
                    <p className="mt-3 max-w-sm text-xl font-semibold leading-tight text-white">{video.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionFade}
              className="space-y-10"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#C1A68D]">Momentos de celebração</p>
              <h2 className="text-4xl font-[300] tracking-tight sm:text-5xl">
                Quer comemorar algo especial? A gente cuida de tudo.
              </h2>
              <p className="max-w-xl text-base leading-9 text-[#001a33]/80">
                Casamento, aniversário ou encontro com amigos: nossa equipe transforma a celebração em um dia memorável, com todo o suporte e captação profissional.
              </p>
            </motion.div>
            <div className="grid gap-6">
              {celebrationTypes.map((item) => (
                <CelebrationCard
                  key={item.label}
                  label={item.label}
                  title={item.title}
                  description={item.description}
                  Icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F5F5F0] py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionFade}
                className="space-y-6"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-[#C1A68D]">A Jornada A7Tour</p>
                <h2 className="text-4xl font-[300] tracking-tight sm:text-5xl">
                  Um processo pensado para quem busca algo fora da curva.
                </h2>
              </motion.div>
              <div className="relative pl-6">
                <div className="absolute left-3 top-6 bottom-0 w-px bg-[#001a33]/10" />
                <div className="space-y-10">
                  {journeySteps.map((step, index) => (
                    <JourneyStep
                      key={step.title}
                      index={index}
                      title={step.title}
                      description={step.description}
                      Icon={step.icon}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] border border-[#001a33]/10 bg-[#001a33]/5 p-10 shadow-[0_40px_120px_rgba(0,26,51,0.08)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#C1A68D]">Trust & Impacto</p>
                <h2 className="text-4xl font-[300] tracking-[-0.04em] sm:text-5xl">
                  A vida é muito curta para viver o comum.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-[#001a33]/80">
                  Transformamos cada hora no Rio em uma sequência vibrante, com roteiro autoral, captação profissional e momentos que você vai lembrar como dias de festa.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <a
                  href="https://wa.me/5521999999999?text=Quero%20planejar%20uma%20experi%C3%AAncia%20A7Tour"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#001a33] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#003050]"
                >
                  Enviar mensagem no WhatsApp
                </a>
                <div className="rounded-3xl bg-white/90 p-6 text-sm leading-7 text-[#001a33]/85 shadow-[0_20px_60px_rgba(0,26,51,0.06)]">
                  <p className="font-semibold">Agende com confidencialidade.</p>
                  <p>Nosso atendimento privado garante atenção exclusiva antes, durante e depois da sua experiência.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <a
        href="https://wa.me/5521999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_40px_rgba(37,211,102,0.28)] transition duration-300 hover:scale-105"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-full w-full items-center justify-center rounded-full bg-[#25D366]"
        >
          <MessageCircle className="h-7 w-7" />
        </motion.div>
      </a>

      <footer className="border-t border-[#001a33]/10 bg-[#F5F5F0] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-[#001a33]/80 md:flex-row md:items-center md:justify-between md:px-10">
          <span className="font-semibold uppercase tracking-[0.35em] text-[#001a33]">A7tour</span>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="transition hover:text-[#001a33]">
              Contato
            </a>
            <a href="#" className="transition hover:text-[#001a33]">
              Política de privacidade
            </a>
            <a href="#" className="transition hover:text-[#001a33]">
              Termos
            </a>
          </div>
          <div className="flex items-center gap-4 text-[#001a33]/70">
            <span className="inline-flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Instagram
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Rio de Janeiro
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
