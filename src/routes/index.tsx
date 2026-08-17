import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, Utensils, Users, Award, ChefHat, Star } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site-layout";
import { LogoIntro } from "@/components/logo-intro";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import { TypewriterText } from "@/components/typewriter";
import { PACKAGES, CONTACT } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hariom Caterers — Premium Pure Veg Catering in Gujarat" },
      {
        name: "description",
        content:
          "Award winning pure veg catering for weddings & grand events. Classic, Grand & Majestic packages. Plan your custom menu online.",
      },
      { property: "og:title", content: "Hariom Caterers — Premium Pure Veg Catering" },
      {
        property: "og:description",
        content: "Design your dream menu online with Hariom Caterers.",
      },
    ],
  }),
  component: HomePage,
});

const HERO_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-plates-of-food-on-a-buffet-at-a-wedding-4831-large.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=80";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80";

const STATS = [
  { icon: Users, label: "Happy Guests", value: "5,00,000+" },
  { icon: Award, label: "Events Catered", value: "1,200+" },
  { icon: ChefHat, label: "Master Chefs", value: "400+" },
  { icon: Star, label: "Years of Legacy", value: "50+" },
];

const HIGHLIGHTS = [
  {
    title: "Live Counters",
    desc: "Italian, Mexican, Oriental, Lebanese, Moroccan & more.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mocktail Bars",
    desc: "Refreshing mocktails, shots & welcome drinks.",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Traditional Thali",
    desc: "Authentic Gujarati flavors, made with love.",
    img: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dessert Stations",
    desc: "Indian sweets, western desserts & ice cream bars.",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
  },
];

function HomePage() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <>
      {!introDone && <LogoIntro onDone={() => setIntroDone(true)} />}
      <SiteLayout>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src={HERO_POSTER}
              alt="Hariom Catering Grand Buffet"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover opacity-35 scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primary-foreground"
            >
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold" /> Premium Pure Veg Caterers
              </div>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-bold">
                A feast worthy of your{" "}
                <TypewriterText
                  words={[
                    "grandest moments.",
                    "royal celebrations.",
                    "dream receptions.",
                    "unforgettable events.",
                  ]}
                />
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
                For over two decades, Hariom Caterers has crafted royal vegetarian experiences —
                from intimate weddings to grand receptions of thousands.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/menu-planner"
                  className="group inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform cursor-pointer"
                >
                  Plan Your Menu{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/20 transition cursor-pointer"
                >
                  View Packages
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-8 text-sm text-primary-foreground/70 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100% Pure
                  Vegetarian
                </div>
                <div>✓ Hygienic Kitchens</div>
                <div>✓ 400+ Master Chefs</div>
              </div>
            </motion.div>

            {/* Right Side: Royal Food Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative block mt-10 lg:mt-0 w-full"
            >
              {/* Main Featured Food Card */}
              <div className="relative mx-auto max-w-lg rounded-3xl p-3 bg-gradient-to-br from-amber-500/30 via-red-600/20 to-amber-500/10 border border-gold/40 backdrop-blur-md shadow-2xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80"
                    alt="Royal Indian Catering Delicacies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs font-bold text-gold uppercase tracking-wider">
                        Royal Gujarati &amp; Marwari Thali
                      </div>
                      <div className="text-sm font-semibold text-slate-100 mt-0.5">
                        Fresh Kaju Katli, Paneer Tikka &amp; Dal Baati
                      </div>
                    </div>
                    <span className="bg-emerald-600/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full border border-emerald-400 shadow-md">
                      100% PURE VEG
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: Top Left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-5 bg-slate-900/95 border border-gold/50 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-md">
                    <Utensils className="w-5 h-5 text-gold-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-gold uppercase">
                      400+ Pure Veg Items
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">
                      Customized Live Food Counters
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Bottom Right */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-5 -right-5 bg-slate-900/95 border border-gold/50 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0 shadow-md">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-amber-300 flex items-center gap-1">
                      <span>5.0</span>
                      <span className="text-gold">★ ★ ★ ★ ★</span>
                    </div>
                    <div className="text-[11px] text-slate-300 font-medium">
                      Top Rated Caterer in Gujarat
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mini Delicacies Showcase Strip underneath */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-slate-900/80 border border-gold/30 p-2.5 rounded-2xl flex items-center gap-2.5 backdrop-blur-md">
                  <img
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=150&q=80"
                    alt="Dessert Station"
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="text-[11px] font-bold text-white leading-tight">
                      Royal Desserts
                    </div>
                    <div className="text-[9px] text-amber-400 font-medium">
                      Sweets &amp; Ice Creams
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-gold/30 p-2.5 rounded-2xl flex items-center gap-2.5 backdrop-blur-md">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=150&q=80"
                    alt="Live Chaat Counter"
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="text-[11px] font-bold text-white leading-tight">Live Chaat</div>
                    <div className="text-[9px] text-amber-400 font-medium">
                      Panipuri &amp; Tikki
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-gold/30 p-2.5 rounded-2xl flex items-center gap-2.5 backdrop-blur-md">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80"
                    alt="Main Course"
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="text-[11px] font-bold text-white leading-tight">
                      Main Course
                    </div>
                    <div className="text-[9px] text-amber-400 font-medium">
                      Paneer &amp; Dal Baati
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gradient-warm py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-4 shadow-card">
                  <s.icon className="w-6 h-6 text-gold-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={ABOUT_IMG}
              alt="Chef plating"
              className="rounded-3xl shadow-elegant w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elegant max-w-xs hidden md:block">
              <div className="text-4xl font-display text-gold">50+</div>
              <div className="text-sm mt-1 text-primary-foreground/80">
                Years of authentic Indian catering excellence
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary/70">
              <span className="h-px w-8 bg-gold" /> Our Story
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl text-primary font-display font-bold">
              Where tradition meets taste.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Founded by <span className="text-primary font-semibold">{CONTACT.name}</span>, Hariom
              Caterers has become synonymous with authentic vegetarian catering across Gujarat.
              Every dish is a promise of purity, taste, and tradition passed down through
              generations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From humble family gatherings to grand weddings of 5,000+ guests, our team of master
              chefs and hospitality professionals bring warmth, precision, and passion to every
              plate.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer"
            >
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>

        {/* PACKAGES */}
        <section className="py-24 bg-gradient-warm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary/70">
                <span className="h-px w-8 bg-gold" /> Signature Packages{" "}
                <span className="h-px w-8 bg-gold" />
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl text-primary font-display font-bold">
                Curated for every celebration
              </h2>
              <p className="mt-4 text-muted-foreground">
                Four exquisitely designed packages. Endless customization within each.
              </p>
            </div>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative bg-card rounded-3xl p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-2 flex flex-col justify-between ${
                    p.id === "regal" ? "ring-2 ring-gold shadow-lg" : ""
                  }`}
                >
                  {p.id === "regal" && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-gold-foreground px-4 py-1 rounded-full text-xs font-bold shadow-md">
                      MOST POPULAR
                    </div>
                  )}
                  <div>
                    <Utensils className="w-8 h-8 text-primary" style={{ color: p.color }} />
                    <h3 className="mt-4 text-2xl font-display font-bold text-primary">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.tagline}</p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-display font-bold text-primary">
                        ₹{p.price}
                      </span>
                      <span className="text-muted-foreground text-xs">/ plate*</span>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground border-t border-border pt-3">
                      {p.options[0].categories.slice(0, 7).map((c) => (
                        <li
                          key={c.name}
                          className="flex justify-between border-b border-border/50 pb-1"
                        >
                          <span className="truncate">{c.name}</span>
                          <span className="text-primary font-bold ml-1">{c.count}</span>
                        </li>
                      ))}
                      <li className="text-[11px] text-primary font-semibold italic pt-1">
                        + more items
                      </li>
                    </ul>
                  </div>
                  <Link
                    to="/packages"
                    hash={p.id}
                    className="mt-6 block text-center bg-primary text-primary-foreground py-2.5 rounded-full text-xs font-bold hover:bg-primary/90 transition shadow-sm cursor-pointer"
                  >
                    View Details
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-primary font-display font-bold">
              What makes us special
            </h2>
            <p className="mt-4 text-muted-foreground">The experiences we bring to every event</p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, idx) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all"
              >
                <img
                  src={h.img}
                  alt={h.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                <div className="absolute bottom-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-display font-bold">{h.title}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SLIDER */}
        <TestimonialsSlider />

        {/* CTA */}
        <section className="py-24 px-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground shadow-elegant relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <Sparkles className="w-8 h-8 text-gold mx-auto" />
              <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold">
                Ready to plan your dream event?
              </h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
                Use our menu planner to design a personalized menu, download a PDF, share via
                WhatsApp or email.
              </p>
              <Link
                to="/menu-planner"
                className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer"
              >
                Start Planning <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </SiteLayout>
    </>
  );
}
