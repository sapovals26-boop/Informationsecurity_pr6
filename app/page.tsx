"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

export default function HomePage() {
  const dishes = [
    { name: "Пицца Маргарита", desc: "Томаты, сыр, базилик", price: 1800, img: "/1.webp" },
    { name: "Суши Сет", desc: "Лосось, тунец, рис", price: 2500, img: "/2.jpg" },
    { name: "Бургер Классический", desc: "Говядина, салат, соус", price: 1500, img: "/3.jpg" },
    { name: "Салат Цезарь", desc: "Курица, сыр, соус Цезарь", price: 1200, img: "/4.png" },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-600 to-amber-500 text-white w-full py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Добро пожаловать в Foodie!</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
          Вкусная еда с доставкой на дом. Выбирайте, заказывайте и наслаждайтесь!
        </p>
        <div className="flex justify-center gap-4">
          <a className="bg-white text-amber-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold" href="#menu">
            Посмотреть меню
          </a>
          <a className="bg-amber-700 px-6 py-3 rounded-lg hover:bg-amber-600 transition font-semibold" href="#about">
            О нас
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 w-full max-w-7xl px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-600">Популярные блюда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="relative h-64 w-full">
                <Image src={dish.img} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-amber-600 font-semibold mb-1">{dish.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{dish.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-500 font-bold text-lg">{dish.price}₸</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Популярно</span>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <button className="flex-1 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-semibold">
                  Заказать
                </button>
                <button className="p-2 border rounded hover:bg-gray-100 transition">
                  <Bookmark className="w-5 h-5 text-amber-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
