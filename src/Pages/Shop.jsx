import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/Components/UI/card";
import { Button } from "@/Components/UI/button";

const Shop = () => {
  const laptops = [
    {
      name: "Apple MacBook Air 13-inch (M5, 2026)",
      price: "$949",
      originalPrice: "$1,099",
      discount: 14,
      rating: 5,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1200",
    },
    {
      name: "Lenovo ThinkPad E14 Gen 6",
      price: "$849",
      originalPrice: "$999",
      discount: 15,
      rating: 5,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200",
    },
    {
      name: "Dell XPS 14 (9440) OLED",
      price: "$1,499",
      originalPrice: "$1,699",
      discount: 12,
      rating: 5,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200",
    },
    {
      name: "HP OmniBook X AI PC",
      price: "$1,149",
      originalPrice: "$1,299",
      discount: 11,
      rating: 4,
      image: "https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=1200",
    },
    {
      name: "ASUS Zenbook S 13 OLED",
      price: "$1,099",
      originalPrice: "$1,199",
      discount: 8,
      rating: 5,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200",
    },
    {
      name: "Microsoft Surface Laptop (7th Ed)",
      price: "$1,049",
      originalPrice: "$1,399",
      discount: 25,
      rating: 4,
      image: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1200",
    },
    {
      name: "Samsung Galaxy Book5 360",
      price: "$1,449",
      originalPrice: "$1,599",
      discount: 9,
      rating: 5,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
    },
    {
      name: "Acer Swift Go 14 AI",
      price: "$872",
      originalPrice: "$999",
      discount: 13,
      rating: 4,
      image: "https://images.unsplash.com/photo-1516387933999-ed33b5f1dd5f?q=80&w=1200",
    },
    {
      name: "ASUS TUF Gaming A14 (2026)",
      price: "$1,399",
      originalPrice: "$1,549",
      discount: 10,
      rating: 5,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200",
    },
    {
      name: "LG Gram 17 (2026 Edition)",
      price: "$1,199",
      originalPrice: "$1,499",
      discount: 20,
      rating: 4,
      image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1200",
    },
    {
      name: "Lenovo Yoga Slim 7x",
      price: "$1,299",
      originalPrice: "$1,449",
      discount: 10,
      rating: 4,
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200",
    },
    {
      name: "Razer Blade 15 Advanced",
      price: "$2,499",
      originalPrice: "$2,799",
      discount: 11,
      rating: 5,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200",
    },
    {
      name: "HP Pavilion x360 14",
      price: "$599",
      originalPrice: "$799",
      discount: 25,
      rating: 4,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
    },
    {
      name: "Framework Laptop 13 (DIY Edition)",
      price: "$1,049",
      originalPrice: "$1,149",
      discount: 9,
      rating: 5,
      image: "https://images.unsplash.com/photo-1587614295999-6c1f4c3f6628?q=80&w=1200",
    },
    {
      name: "Lenovo IdeaPad Slim 3x",
      price: "$549",
      originalPrice: "$749",
      discount: 27,
      rating: 4,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200",
    },
    {
      name: "Alienware m16 R2 Gaming",
      price: "$1,449",
      originalPrice: "$1,749",
      discount: 17,
      rating: 5,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200",
    },
    {
      name: "Apple MacBook Neo 13-inch",
      price: "$599",
      originalPrice: "$699",
      discount: 14,
      rating: 5,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200",
    },
    {
      name: "Dell Pro 16 Copilot+ PC",
      price: "$1,319",
      originalPrice: "$1,419",
      discount: 7,
      rating: 4,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200",
    },
    {
      name: "MSI Prestige 16 AI Studio",
      price: "$1,850",
      originalPrice: "$2,100",
      discount: 12,
      rating: 4,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200",
    },
    {
      name: "HP EliteBook 840 G11",
      price: "$1,100",
      originalPrice: "$1,300",
      discount: 15,
      rating: 4,
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Products</h1>
        <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 max-w-2xl">
          Discover our featured laptops and accessories.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {laptops.map((laptop, index) => (
            <Card
              key={index}
              className="group rounded-3xl overflow-hidden border-slate-200/60 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <Link to={`/product/${index}`}>
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="h-48 w-full object-cover hover:opacity-90 transition-opacity"
                  />
                </Link>

                <div className="p-5">
                  <Link to={`/product/${index}`}>
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1">
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
      </div>
    </div>
  );
};

export default Shop;