import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Utensils,
  Award,
  Users,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Download,
  Calendar,
  Flame,
  Heart,
  Briefcase,
  PartyPopper,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { CONTACT, COMPANY_INFO } from "@/lib/menu-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES_LIST = [
  {
    id: "wedding",
    title: "Grand Royal Wedding Catering",
    gujaratiTitle: "રોયલ લગ્ન પ્રસંગ કેટરિંગ",
    subtitle: "Magical multi-course royal feasts designed for weddings with 200 to 5,000+ guests.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    badge: "Most Popular",
    icon: Heart,
    features: [
      "Royal Welcome Drinks & Mocktail Bar",
      "Multi-Cuisine Live Counter Setup",
      "Exclusive Brass & Imported Bone-China Crockery",
      "Uniformed Hospitality Managers & Waiters",
      "Custom Dessert Galore & Nitrogen Counters",
    ],
    topDishes: [
      "Paneer Pasanda",
      "Dal Makhani",
      "Basundi with Puri",
      "Kesariya Jalebi",
      "Live Chaat Stalls",
    ],
  },
  {
    id: "sangeet",
    title: "Sangeet, Mehendi & Ring Ceremony",
    gujaratiTitle: "સંગીત, મહેંદી અને રીંગ સેરેમની",
    subtitle: "Vibrant, high-energy live food stalls, fusion street food & interactive stations.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    badge: "Trending",
    icon: PartyPopper,
    features: [
      "Live Street Food & Fusion Chaat Counter",
      "Italian Pasta & Woodfired Pizza Station",
      "Mexican Tacos & Mongolian Wok Counters",
      "Churros, Waffle & Churma Dessert Bars",
      "Fast-Service Cocktail Finger Foods",
    ],
    topDishes: [
      "Pav Bhaji Live",
      "Chinese Wok Noodles",
      "Italian Creamy Pasta",
      "Sizzling Brownie",
      "Fruit Shots",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Banquets & Executive Lunches",
    gujaratiTitle: "કોર્પોરેટ ઇવેન્ટ્સ અને મીટિંગ કેટરિંગ",
    subtitle:
      "Professional, hygienic, and punctual catering for annual meets, galas & conferences.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    badge: "Executive Class",
    icon: Briefcase,
    features: [
      "Strict Punctual On-Time Setup Guarantee",
      "Balanced Executive Thalis & Buffet Setup",
      "Artisanal Coffee & Fresh Juice Counters",
      "Sanitized & Eco-Friendly Tableware Options",
      "Flexible In-Office or Banquet Hall Delivery",
    ],
    topDishes: [
      "Healthy Salad Bar",
      "Executive Paneer Curry",
      "Jeera Rice & Dal Fry",
      "Fresh Fruit Platter",
      "Gulab Jamun",
    ],
  },
  {
    id: "puja",
    title: "Religious Puja, Katha & Housewarming",
    gujaratiTitle: "પૂજા, કથા અને વાસ્તુ પૂજન પ્રસંગ",
    subtitle: "Authentic 100% Satvik food with special Jain & No-Onion-No-Garlic cooking options.",
    image:
      "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=80",
    badge: "100% Pure Satvik",
    icon: Sparkles,
    features: [
      "Strictly Dedicated Jain & Satvik Kitchen Vessels",
      "Pure Desi Ghee Traditional Sweets",
      "Authentic Gujarati & Rajasthani Feast",
      "Hygienic Traditional Seating or Buffet Options",
      "Fresh Warm Preparations Served With Devotion",
    ],
    topDishes: ["Gujarati Undhiyu", "Basundi Puri", "Khaman Dhokla", "Kadhi Khichdi", "Mohanthal"],
  },
  {
    id: "live-kitchen",
    title: "Live Kitchen & Interactive Food Stalls",
    gujaratiTitle: "લાઈવ કિચન અને સ્પેશિયલ સ્ટોલ્સ",
    subtitle: "Sizzle and aroma right in front of your guests cooked fresh by our master chefs.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    badge: "Interactive Dining",
    icon: Flame,
    features: [
      "Live Tandoor & Naan Masters",
      "South Indian Dosa & Uttapam Counter",
      "Live Rajasthani Dal Baati Churma Stalls",
      "Fresh Jalebi & Rabdi Live Frying",
      "Customizable Spice Levels for Every Guest",
    ],
    topDishes: [
      "Butter Garlic Naan",
      "Paper Dosa",
      "Dal Baati Churma",
      "Hot Jalebi Rabdi",
      "Tandoori Paneer Tikka",
    ],
  },
  {
    id: "private-party",
    title: "Private Parties, Birthdays & Anniversaries",
    gujaratiTitle: "બર્થડે, એનિવર્સરી અને ફેમિલી પાર્ટી",
    subtitle: "Tailored intimate celebrations from 50 to 300 pax with customized fun menus.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    badge: "Customizable",
    icon: Users,
    features: [
      "Kids-Friendly Burger & Fries Counter",
      "Chocolate Fountain & Marshmallow Dip",
      "Custom Birthday Mocktail Bar",
      "Cozy Buffet Setup for Home or Venues",
      "Budget-Friendly Quality Options",
    ],
    topDishes: ["Cheese Pizza", "French Fries", "Spring Rolls", "Ice Cream Sundae", "Manchow Soup"],
  },
];

const VALUE_ADDONS = [
  {
    title: "Royal Tableware & Crockery",
    desc: "Premium bone china, brass thalis, or eco-friendly bamboo dinnerware with cutlery.",
    icon: Utensils,
  },
  {
    title: "Uniformed Trained Staff",
    desc: "Courteous, neatly dressed waiters and floor managers ensuring seamless service.",
    icon: Users,
  },
  {
    title: "Live Theme Decoration",
    desc: "Elegantly lit buffet setups and branded food stalls matching your venue theme.",
    icon: Sparkles,
  },
  {
    title: "Strict Hygiene & FSSAI Standards",
    desc: "100% sanitized preparation, gloves, hairnets, and high safety standards.",
    icon: ShieldCheck,
  },
];

function ServicesPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    setDownloading(true);
    await downloadMasterMenuPdf();
    setDownloading(false);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Hariom Caterers! I am interested in booking catering services for my upcoming event. Please share details and availability.`,
    );
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <SiteLayout>
      {/* Hero Banner Section */}
      <section className="relative py-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
<img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVILRWlmPigLEpuq_sHzcPxFadW6CeTdvnrFqE_o_lFw&s=10"
            alt="Hariom Catering Services Hero Background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground pt-12 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold">
            <span className="h-px w-8 bg-gold" /> Hariom Services{" "}
            <span className="h-px w-8 bg-gold" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-bold text-white leading-tight">
            Comprehensive Pure Veg Catering Solutions
          </h1>

          <p className="text-base sm:text-lg text-primary-foreground/85 max-w-2xl mx-auto font-light leading-relaxed">
            With over 20+ years of culinary excellence, Proprietor Khimjibhai Purohit and his master
            culinary team deliver authentic taste, live kitchen counters, and royal Indian
            hospitality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/menu-planner"
              className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-8 py-4 rounded-full font-semibold shadow-elegant hover:scale-105 transition-transform cursor-pointer"
            >
              <Utensils className="w-4 h-4" /> Customize Event Menu
            </Link>
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/20 transition cursor-pointer"
            >
              <Download className="w-4 h-4 text-gold" />
              {downloading ? "Generating PDF..." : "Download Master Menu PDF"}
            </button>
          </div>
        </div>
      </section>

      <div className="py-16 space-y-16">
        {/* Main Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-4xl font-display font-black text-primary">
              Our Catering Specializations
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              From intimate gatherings of 50 guests to mega wedding celebrations of 5,000+ pax — we
              execute every detail with perfection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service, i) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Banner with Badge */}
                    <div className="relative h-52 overflow-hidden bg-muted">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-[11px] font-black uppercase shadow-md">
                        {service.badge}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold mb-1">
                          <IconComponent className="w-4 h-4" />
                          <span>{service.gujaratiTitle}</span>
                        </div>
                        <h3 className="text-xl font-display font-bold leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.subtitle}
                      </p>

                      {/* Service Highlights */}
                      <div className="space-y-2 pt-2 border-t border-border">
                        <div className="text-[11px] font-bold uppercase text-primary tracking-wider">
                          Service Features:
                        </div>
                        <ul className="space-y-1.5 text-xs text-foreground/90">
                          {service.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Popular Dishes */}
                      <div className="pt-2 border-t border-border">
                        <div className="text-[11px] font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider mb-2">
                          Popular Dish Highlights:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.topDishes.map((dish, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-semibold bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md"
                            >
                              {dish}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-6 pt-0 mt-4">
                    <Link
                      to="/menu-planner"
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary hover:text-white text-primary py-2.5 rounded-xl text-xs font-bold transition cursor-pointer"
                    >
                      <span>Customize Menu For This Event</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Value Add-ons & Service Standards */}
        <section className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Complete Event Setup
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-black text-primary">
                What Is Included In Our Catering Service
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                We go beyond just preparing delicious food — we manage end-to-end dining
                presentation and hospitality on your big day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUE_ADDONS.map((addon, idx) => {
                const AddonIcon = addon.icon;
                return (
                  <div
                    key={idx}
                    className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-3 hover:border-amber-500/50 transition"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
                      <AddonIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">{addon.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{addon.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step by Step Booking Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-primary">
              4 Simple Steps To Book Hariom Catering
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border relative space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-base text-primary">Select Package / Menu</h3>
              <p className="text-xs text-muted-foreground">
                Choose from fixed packages or build a custom menu online using our Menu Planner
                tool.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border relative space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-base text-primary">Get Official PDF Proposal</h3>
              <p className="text-xs text-muted-foreground">
                Generate a high-resolution 4-Page PDF quote instantly and share it on WhatsApp.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border relative space-y-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-base text-primary">Tasting & Finalization</h3>
              <p className="text-xs text-muted-foreground">
                Connect with Proprietor Khimjibhai Purohit for food tasting and venue layout
                planning.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border relative space-y-3">
              <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-black flex items-center justify-center text-sm">
                4
              </div>
              <h3 className="font-bold text-base text-primary">Flawless Grand Feast</h3>
              <p className="text-xs text-muted-foreground">
                Relax and enjoy your event as our master chefs and team serve delicious royal meals
                to your guests.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Box Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-amber-500/40">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase">
                <PhoneCall className="w-3.5 h-3.5" /> Direct Proprietor Booking
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-black leading-tight text-amber-200">
                Ready to Discuss Catering For Your Upcoming Function?
              </h2>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Call Proprietor Khimjibhai Purohit directly or reach us on WhatsApp for instant
                quote estimations and date reservations.
              </p>

              <div className="pt-2 text-xs font-bold text-amber-300 flex flex-wrap gap-4 justify-center md:justify-start">
                <span>✓ 100% Pure Veg</span>
                <span>✓ Custom Spice Levels</span>
                <span>✓ Ahmedabad & Gujarat Wide</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-black text-sm transition shadow-lg hover:scale-105 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5" />
                Call Khimjibhai: +91 {CONTACT.phone}
              </a>

              <button
                onClick={shareWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black text-sm transition shadow-lg hover:scale-105 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
