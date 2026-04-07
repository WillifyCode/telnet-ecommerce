import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  Star,
  Search,
  Menu,
  Laptop,
  Moon,
  Sun,
  User,
  Heart,
  ChevronLeft,
  ChevronRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/Components/UI/card";
import { Button } from "@/Components/UI/button";
import { Input } from "@/Components/UI/input";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";

const heroSlides = [
  {
    title: "Premium Laptops For Professionals",
    desc: "High performance laptops for coding, gaming and productivity",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600",
  },
  {
    title: "Gaming Laptops Collection",
    desc: "Ultra powerful GPUs and high refresh rate displays",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1600",
  },
  {
    title: "Business & Student Laptops",
    desc: "Lightweight, powerful and long battery life",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <div className="relative h-[520px] overflow-hidden rounded-3xl">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[current].image}
            alt="hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl font-semibold max-w-xl"
              >
                {heroSlides[current].title}
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-6 text-gray-200 max-w-lg"
              >
                {heroSlides[current].desc}
              </motion.p>

              <motion.div className="flex gap-4 mt-8">
                <Link to="/shop">
                  <Button className="rounded-full px-8 py-6 border border-white hover:bg-white hover:text-black transition-colors">
                    Shop Now
                  </Button>
                </Link>

                <Link to="/about">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-white border-white hover:bg-white hover:text-black transition-colors"
                  >
                    Explore
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-3 rounded-full text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur p-3 rounded-full text-white"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LaptopLandingPage() {
  const laptops = [
    {
      name: "MacBook Pro M3",
      price: "$1,999",
      originalPrice: "$2,199",
      discount: 10,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
    },
    {
      name: "Dell XPS 15",
      price: "$1,499",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200",
    },
    {
      name: "HP Spectre x360",
      price: "$1,299",
      originalPrice: "$1,499",
      discount: 15,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200",
    },
    {
      name: "Lenovo Legion 5",
      price: "$1,199",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200",
    },
    {
      name: "ASUS ROG Strix",
      price: "$1,399",
      originalPrice: "$1,599",
      discount: 12,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200",
    },
    {
      name: "Acer Predator",
      price: "$1,599",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200",
    },
    {
      name: "Microsoft Surface Pro",
      price: "$1,099",
      originalPrice: "$1,299",
      discount: 15,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1587614295999-6c1f4c3f6628?q=80&w=1200",
    },
    {
      name: "Razer Blade 15",
      price: "$2,499",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200",
    },
    {
      name: "Samsung Galaxy Book",
      price: "$899",
      originalPrice: "$999",
      discount: 10,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1587614295999-6c1f4c3f6628?q=80&w=1200",
    },
    {
      name: "LG Gram 17",
      price: "$1,699",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    },
    {
      name: "MSI Creator Z16",
      price: "$2,199",
      originalPrice: "$2,499",
      discount: 12,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200",
    },
    {
      name: "Huawei MateBook X Pro",
      price: "$1,799",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white">

      {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <HeroCarousel />
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6">
          <Feature icon={<Truck />} title="Free Shipping" />
          <Feature icon={<ShieldCheck />} title="Warranty" />
          <Feature icon={<RefreshCw />} title="Easy Returns" />
          <Feature icon={<CreditCard />} title="Secure Payment" />
        </section>

        {/* Products */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Featured</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {laptops.map((laptop, index) => (
              <Card key={index} className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <CardContent className="p-0">
                  <Link to={`/product/${index}`}>
                    <img
                      src={laptop.image}
                      className="h-48 w-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </Link>

                  <div className="p-5">
                    <Link to={`/product/${index}`}>
                      <h3 className="font-semibold text-lg text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {laptop.name}
                      </h3>
                    </Link>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill={i < laptop.rating ? "#fbbf24" : "none"}
                            className={`${
                              i < laptop.rating
                                ? "text-amber-400"
                                : "text-slate-300 dark:text-gray-600"
                            } transition-colors duration-200`}
                          />
                        ))}
                      </div>
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        {laptop.rating}.0
                      </span>
                    </div>

                    <div className="flex justify-between mt-5">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-900 dark:text-white">
                            {laptop.price}
                          </span>

                        </div>
                        {laptop.originalPrice && (
                          <span className="text-sm text-slate-400 line-through decoration-1">
                            {laptop.originalPrice}
                          </span>
                        )}
                      </div>

                      <Link to="/cart">
                        <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 rounded-2xl shadow-md font-medium px-4">
                          Add to cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] text-center border border-slate-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Stay Updated</h2>
            <p className="text-slate-600 dark:text-gray-300 mt-2">
              Get latest laptop deals and offers
            </p>

            <div className="flex gap-4 mt-6 max-w-md mx-auto">
              <Input placeholder="Email address" className="rounded-2xl border-slate-200" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 font-medium transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-gray-950 border-t border-slate-200 dark:border-gray-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">

            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-2xl font-bold">
                <Laptop /> Telnet
              </div>

              <p className="text-slate-500 mt-4 max-w-md">
                Telnet delivers premium laptops for developers, gamers and professionals. Discover high‑performance devices with fast shipping and trusted warranty.
              </p>

              <div className="flex gap-4 mt-6">
                <Link to="/wishlist">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow hover:text-red-500 transition-colors cursor-pointer">
                    <Heart size={18} />
                  </div>
                </Link>

                <Link to="/cart">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow hover:text-blue-500 transition-colors cursor-pointer">
                    <ShoppingCart size={18} />
                  </div>
                </Link>

                <Link to="/contact">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow hover:text-blue-500 transition-colors cursor-pointer">
                    <User size={18} />
                  </div>
                </Link>
              </div>
            </div>

            <FooterCol
              title="Shop"
              items={[
                { name: "Gaming Laptops", link: "/shop" },
                { name: "Business Laptops", link: "/shop" },
                { name: "Student Laptops", link: "/shop" },
                { name: "Accessories", link: "/shop" }
              ]}
            />

            <FooterCol
              title="Support"
              items={[
                { name: "Help Center", link: "/contact" },
                { name: "Track Order", link: "/shop" },
                { name: "Returns", link: "/shop" },
                { name: "Warranty", link: "/shop" }
              ]}
            />

            <FooterCol
              title="Company"
              items={[
                { name: "About Us", link: "/about" },
                { name: "Careers", link: "/about" },
                { name: "Blog", link: "/blog" },
                { name: "Contact", link: "/contact" }
              ]}
            />
          </div>

          <div className="border-t border-slate-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-600 dark:text-gray-400 text-sm">© 2026 Telnet. All rights reserved</p>

              <div className="flex gap-6 text-sm text-slate-600 dark:text-gray-400">
                <span className="cursor-pointer hover:text-black dark:hover:text-white">Privacy Policy</span>
                <span className="cursor-pointer hover:text-black dark:hover:text-white">Terms of Service</span>
                <span className="cursor-pointer hover:text-black dark:hover:text-white">Cookies</span>
              </div>

              <div className="flex gap-3">
                <div className="px-3 py-1 rounded-lg bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                  <img src={logo1} alt="Paystack" className="h-4 w-auto" />
                  Paystack
                </div>
                <div className="px-3 py-1 rounded-lg bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white flex items-center gap-2 border border-gray-300 dark:border-gray-700">
                  <img src={logo2} alt="Flutterwave" className="h-4 w-auto" />
                  Flutterwave
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
}

function Feature({ icon, title }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl flex items-center gap-4 border border-slate-200/60 dark:border-gray-700 shadow-sm">
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-800 dark:text-white">{title}</h3>
    </div>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">{title}</h4>
      <div className="space-y-2 text-slate-600 dark:text-gray-400">
        {items.map((item, i) => (
          <div key={i}>
            <Link to={item.link} className="hover:text-blue-500 transition-colors">
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
