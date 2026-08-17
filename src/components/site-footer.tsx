import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/menu-data";
import { HariomLogo } from "@/components/hariom-logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl p-4 w-fit shadow-md">
            <HariomLogo className="h-12 w-auto" />
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 border-2 border-emerald-400 bg-white p-0.5 rounded-xs">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
            </span>
            <span>100% Pure Vegetarian Catering Service</span>
          </div>

          <p className="text-primary-foreground/80 max-w-md text-sm leading-relaxed">
            Pure vegetarian catering crafted with authentic Indian traditions and royal hospitality.
            From grand weddings to corporate galas and intimate family events — we deliver
            unforgettable taste.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Explore Menu</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80 font-medium">
            <li>
              <Link to="/" className="hover:text-gold transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold transition">
                Catering Services
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-gold transition">
                Fixed Menu Packages
              </Link>
            </li>
            <li>
              <Link to="/menu-planner" className="hover:text-gold transition">
                Custom Menu Builder
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold transition">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold transition">
                Contact & Bookings
              </Link>
            </li>
            {/* <li>
              <Link to="/admin" className="hover:text-gold transition">
                Admin Panel
              </Link>
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-gold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80 font-medium">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-gold transition block font-bold"
                >
                  +91 {CONTACT.phone}
                </a>
                <a
                  href={`tel:${CONTACT.altPhone}`}
                  className="hover:text-gold transition block text-xs opacity-80"
                >
                  +91 {CONTACT.altPhone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition text-xs">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="text-xs">
                Proprietor: Khimjibhai Purohit
                <br />
                Ahmedabad, Gujarat, India
              </span>
            </li>
          </ul>

          <div className="mt-5 pt-3 border-t border-primary-foreground/10 text-xs text-primary-foreground/70 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>FSSAI Quality & Hygiene Guaranteed</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 py-5 text-xs text-primary-foreground/60 text-center flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Hariom Caterers — {CONTACT.name}. All rights reserved.
          </span>
          <span className="text-amber-300 font-semibold">100% Pure Veg Catering Specialists</span>
        </div>
      </div>
    </footer>
  );
}
