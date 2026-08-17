import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site-layout";
import { useAdminData } from "@/lib/admin-store";
import { getMergedPackages, PACKAGES, type Package, type PackageOption } from "@/lib/menu-data";

interface ExtendedPackage extends Partial<Package> {
  id: string;
  name: string;
  price: number;
  tagline: string;
  image?: string;
  options?: PackageOption[];
  categories?: { name: string; count: number; note?: string; menuItems?: string[] }[];
  minPax?: number;
}

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Menu Packages — Hariom Caterers" },
      {
        name: "description",
        content:
          "Classic ₹850, Regal ₹1050, Grand ₹1200 & Majestic ₹1600 pure veg catering packages with detailed menu options.",
      },
      { property: "og:title", content: "Menu Packages — Hariom Caterers" },
      {
        property: "og:description",
        content: "Four exquisite packages for weddings & grand events.",
      },
    ],
  }),
  component: PackagesPage,
});

const IMAGES: Record<string, string> = {
  classic:
    "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=1200&q=80",
  regal:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  grand:
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
  majestic:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
};

function getPackageOptions(pkg: ExtendedPackage): PackageOption[] {
  if (pkg.options && Array.isArray(pkg.options)) return pkg.options;
  return [{ label: "Custom Menu", minPax: pkg.minPax ?? 100, categories: pkg.categories ?? [] }];
}

function PackagesPage() {
  useAdminData();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const displayPackages = (mounted ? getMergedPackages() : PACKAGES) as ExtendedPackage[];

  return (
    <SiteLayout>
      <section className="relative py-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
<img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVILRWlmPigLEpuq_sHzcPxFadW6CeTdvnrFqE_o_lFw&s=10"
            alt="Packages Hero Background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold">
              <span className="h-px w-8 bg-gold" /> Menu Packages{" "}
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-display font-bold">
              Four signatures.
              <br />
              <span className="text-gradient-white">Endless possibilities.</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl mx-auto font-light">
              Explore each package in detail. When you're ready, pick one in our Menu Planner and
              choose your favorite dishes from every category.
            </p>
          </motion.div>
        </div>
      </section>

      {displayPackages.map((pkg, idx) => (
        <section
          key={pkg.id}
          id={pkg.id}
          className={`py-20 px-4 overflow-hidden ${idx % 2 === 1 ? "bg-gradient-warm" : ""}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-28"
              >
                <img
                  src={
                    pkg.image ||
                    IMAGES[pkg.id as keyof typeof IMAGES] ||
                    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={pkg.name}
                  className="rounded-3xl shadow-elegant w-full h-[400px] object-cover"
                />
                <div className="mt-8 bg-card p-8 rounded-3xl shadow-card border border-border/50">
                  <div className="text-xs tracking-widest uppercase text-primary/60">Package</div>
                  <h2 className="text-5xl font-display font-bold text-primary mt-2">{pkg.name}</h2>
                  <p className="text-muted-foreground mt-2">{pkg.tagline}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-6xl font-display font-bold text-primary">
                      ₹{pkg.price}
                    </span>
                    <span className="text-muted-foreground">/ plate*</span>
                  </div>
                  <Link
                    to="/package-planner"
                    search={{ pkg: pkg.id }}
                    className="mt-6 inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer shadow-sm"
                  >
                    Plan This Package <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid gap-6"
              >
                {getPackageOptions(pkg).map((opt) => (
                <div
  key={opt.label}
  className="bg-gradient-to-br from-[#fffaf0] via-[#fdf5df] to-[#f3e4b5] rounded-3xl p-8 shadow-card border border-[#d4af37]/40 relative overflow-hidden"
>
                    <div className="flex items-baseline justify-between border-b border-border pb-4">
                      <h3 className="text-4xl md:text-6xl font-display font-bold text-primary bg-gradient-to-r from-primary/10 via-gold/20 to-primary/10 px-6 py-4 rounded-2xl shadow-sm border border-gold/30">
  {opt.label}
</h3>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-primary px-3 py-1 rounded-full">
                        Min {opt.minPax} pax
                      </span>
                    </div>
<ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {opt.categories.map((c) => (
                        <li
                          key={c.name}
                          className="flex flex-col gap-1.5 text-sm border-b border-border/40 pb-2"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span className="flex items-start gap-2 text-foreground">
                              <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                              <span>
                                {c.name}
                                {c.note && (
                                  <em className="block text-xs text-muted-foreground mt-0.5 not-italic">
                                    {c.note}
                                  </em>
                                )}
                              </span>
                            </span>
                            <span className="font-bold text-primary">{c.count}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">
                      + 200 ml water bottle included
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
