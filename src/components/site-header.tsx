import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Mail, Download, Shield } from "lucide-react";
import { CONTACT } from "@/lib/menu-data";
import { HariomLogo } from "@/components/hariom-logo";
// import { downloadMasterMenuPdf, downloadPackagesPdf } from "@/lib/master-pdf-downloader";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },

  {
    label: "Catering Services",
    dropdown: [
      { to: "/services", label: "Grand Royal Wedding Catering" },
      { to: "/services", label: "Sangeet, Mehendi & Ring Ceremony" },
      { to: "/services", label: "Corporate Banquets & Executive Lunches" },
      { to: "/services", label: "Religious Puja, Katha & Housewarming" },
      { to: "/services", label: "Live Kitchen & Interactive Food Stallsg" },
      { to: "/services", label: "Private Parties, Birthdays & Anniversaries" },
    ],
  },

  { to: "/packages", label: "Fixed Menu Packages" },
  { to: "/menu-planner", label: "Custom Menu Planner" },
  { to: "/gallery", label: "Photo Gallery" },
  { to: "/contact", label: "Contact & Bookings" },
];

export function SiteHeader() {
const [open, setOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
  // const [downloadingCatalog, setDownloadingCatalog] = useState(false);
  // const [downloadingPackages, setDownloadingPackages] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const handleCatalogDownload = async () => {
  //   setDownloadingCatalog(true);
  //   await downloadMasterMenuPdf();
  //   setDownloadingCatalog(false);
  // };

  // const handlePackagesDownload = async () => {
  //   setDownloadingPackages(true);
  //   await downloadPackagesPdf();
  //   setDownloadingPackages(false);
  // };
  const handleCatalogDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Hariom-Master-Menu-Catalog.pdf";
    link.download = "Hariom-Master-Menu-Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePackagesDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdf/Hariom-Fixed-Packages.pdf";
    link.download = "Hariom-Fixed-Packages.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground text-xs border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          {/* Authentic Indian Pure Veg Badge Symbol */}
          <div className="inline-flex items-center gap-2 font-bold tracking-wide">
            <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-emerald-400 bg-white p-0.5 rounded-xs shrink-0 shadow-xs">
              <span className="w-2 h-2 bg-emerald-600 rounded-full" />
            </span>
            <span className="text-emerald-300 font-extrabold uppercase tracking-wider text-[11px]">
              100% Pure Vegetarian
            </span>
            <span className="hidden md:inline-block text-amber-300/80 text-[10px]">
              • Taste of Royal Catering
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-[11px]">
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>+91 {CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-300 transition font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
    <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group shrink-0 -ml-2">
        <HariomLogo className="h-10 md:h-12 w-auto max-w-[180px]" />
        </Link>

        {/* Navigation Links */}
   <nav className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-6">
  {links.map((l) => (
    <div key={l.label} className="relative group">

      {l.dropdown ? (
        <>
          <button
            type="button"
            className="flex items-center gap-1 text-xs lg:text-sm font-semibold text-foreground/85 hover:text-primary transition-colors py-1 whitespace-nowrap"
          >
            {l.label}
            <span className="text-xs">▾</span>
          </button>

          {/* Services Dropdown */}
          <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50">
            <div className="w-64 rounded-xl border border-border bg-background shadow-xl p-2">

              {l.dropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}

            </div>
          </div>
        </>
      ) : (
        <Link
          to={l.to}
          className="text-xs lg:text-sm font-semibold text-foreground/85 hover:text-primary transition-colors relative py-1 whitespace-nowrap"
          activeProps={{ className: "text-primary font-bold" }}
          activeOptions={{ exact: l.to === "/" }}
        >
          {l.label}
        </Link>
      )}

    </div>
  ))}
</nav>

        {/* Action Buttons: 1. Catalog PDF, 2. Package PDF (Green Button), 3. Call */}
        <div className="hidden lg:flex items-center gap-2 -mr-9">
          <button
            onClick={handleCatalogDownload}

            className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-bold shadow-xs hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            title="Download full Hariom Master Menu Catalog PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Catalog PDF</span>
          </button>

          <button
            onClick={handlePackagesDownload}

            className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-bold shadow-md hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
            title="Download Fixed Menu Packages PDF"
          >
            <Download className="w-3.5 h-3.5 text-emerald-200 animate-bounce" />
            <span>Package PDF</span>
          </button>

          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex items-center gap-1.5 bg-gradient-gold text-gold-foreground px-3.5 py-1.5 rounded-full text-[11px] lg:text-xs font-bold shadow-card hover:scale-105 transition-transform whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>

          {/* <Link
            to="/admin"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-[11px] lg:text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
            title="Open Admin Panel"
          >
            <Shield className="w-3.5 h-3.5 text-amber-300" />
            <span>Admin</span>
          </Link> */}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted/50 transition cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-xl animate-fade-in">
          <div className="flex flex-col p-5 gap-3">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-emerald-600 bg-white p-0.5 rounded-xs">
                <span className="w-2 h-2 bg-emerald-600 rounded-full" />
              </span>
              <span className="text-emerald-700 font-bold text-xs">
                100% Pure Vegetarian Catering
              </span>
            </div>

          {links.map((l) => (
  <div key={l.label} className="border-b border-border/30">

    {l.dropdown ? (
      <>
        {/* Catering Services Button */}
        <button
          type="button"
          onClick={() => setServicesOpen(!servicesOpen)}
          className="w-full flex items-center justify-between py-2.5 text-base font-semibold text-foreground/90 hover:text-primary transition"
        >
          <span>{l.label}</span>

          <span
            className={`text-sm transition-transform duration-200 ${
              servicesOpen ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>

        {/* Mobile Services Dropdown */}
        {servicesOpen && (
          <div className="pb-2 pl-3 flex flex-col gap-1">
            {l.dropdown.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
                className="py-2.5 px-3 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </>
    ) : (
      <Link
        to={l.to}
        onClick={() => {
  setOpen(false);
  setServicesOpen(false);
}}
        className="block py-2.5 text-base font-semibold text-foreground/90 hover:text-primary transition"
        activeProps={{ className: "text-primary font-bold" }}
      >
        {l.label}
      </Link>
    )}

  </div>
))}

            <Link
              to="/admin"
              onClick={() => {
  setOpen(false);
  setServicesOpen(false);
}}
              className="py-2.5 text-base font-semibold text-primary hover:text-primary/80 transition border-b border-border/30 flex items-center gap-2"
              activeProps={{ className: "text-primary font-bold" }}
            >
              <Shield className="w-4 h-4 text-amber-500" />
              Admin Panel
            </Link>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setOpen(false);
                  handleCatalogDownload();
                }}

                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-950 py-2.5 rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Catalog PDF
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  handlePackagesDownload();
                }}

                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 text-white py-2.5 rounded-xl text-xs font-bold shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-200" />
                Download Package PDF
              </button>

              <a
                href={`tel:${CONTACT.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-gold-foreground py-2.5 rounded-xl text-xs font-bold shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                Call +91 {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
