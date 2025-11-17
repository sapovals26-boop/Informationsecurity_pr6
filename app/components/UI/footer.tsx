"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-50 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-700">
          <div className="flex flex-col items-center">
            <p className="font-bold mb-4 text-amber-600 text-base">Foodie — Доставка еды</p>
            <p className="text-gray-600 leading-relaxed text-center">
              Foodie — вкусная еда с быстрой доставкой прямо к вам домой. Наслаждайтесь любимыми блюдами без лишних хлопот.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold mb-3 text-amber-600 text-base">Меню</p>
            <ul className="space-y-1.5 text-center">
              <li><Link href="#" className="hover:text-amber-700 transition">Популярные блюда</Link></li>
              <li><Link href="#" className="hover:text-amber-700 transition">Акции и скидки</Link></li>
              <li><Link href="#" className="hover:text-amber-700 transition">Как заказать</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-bold mb-4 text-amber-600 text-base">Контакты</p>
            <ul className="space-y-2 text-center">
              <li><Link href="#" className="hover:text-amber-700 transition">Доставка и оплата</Link></li>
              <li><Link href="#" className="hover:text-amber-700 transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-amber-700 transition">Обратная связь</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-10 pt-6 text-center text-gray-500 text-xs">
          © 2025, <span className="text-amber-600 font-semibold">Foodie</span> — Политика конфиденциальности | Условия использования
        </div>
      </div>
    </footer>
  );
}
