import Link from "next/link";
import Head from "next/head";

const offers = [
  {
    id: 1,
    name: "Amazon",
    description: "Earn up to 5% cashback on millions of items.",
    url: "https://www.amazon.co.uk/?ref=loopback",
    cashback: "Up to 5%",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 2,
    name: "Nike",
    description: "Get 6% cashback on shoes, apparel, and accessories.",
    url: "https://www.nike.com/gb/?ref=loopback",
    cashback: "6%",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 3,
    name: "Argos",
    description: "Shop home essentials and get 2% cashback.",
    url: "https://www.argos.co.uk/?ref=loopback",
    cashback: "2%",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Argos_logo_2020.svg",
  },
];

export default function Offers() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-gray-800">
      <Head>
        <title>Loopback Offers — Cashback Retailers</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 tracking-wide">Loopback</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
            <a href="#offers" className="hover:text-indigo-600 transition">
              Offers
            </a>
            <Link href="/dashboard" className="hover:text-indigo-600 transition">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 text-center">Cashback Offers</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map(({ id, name, description, url, cashback, logo }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center items-center mb-4 h-16">
                <img src={logo} alt={`${name} logo`} className="max-h-12 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 text-center mb-2">{name}</h3>
              <p className="text-sm text-gray-600 text-center mb-4">{description}</p>
              <div className="text-center">
                <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">
                  {cashback}
                </span>
              </div>
              <button className="mt-6 w-full bg-indigo-600 text-white rounded-lg px-5 py-2 font-semibold hover:bg-indigo-700 transition">
                Shop Now
              </button>
            </a>
          ))}
        </div>
      </main>

      <footer className="mt-24 mb-12 text-center text-sm text-gray-500">
        &copy; 2025 Loopback. All rights reserved.
      </footer>
    </div>
  );
}