// loopback/pages/dashboard.tsx (Clean GetChip-style Dashboard UI)

import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-gray-800">
      <Head>
        <title>Loopback Dashboard</title>
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
            <Link href="/offers" className="hover:text-indigo-600 transition">
              Offers
            </Link>
            <Link href="/dashboard" className="hover:text-indigo-600 transition">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 text-center">My Dashboard</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-sm uppercase text-gray-500 mb-2">Total Cashback Earned</h3>
            <p className="text-3xl font-bold text-indigo-700">£28.45</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-sm uppercase text-gray-500 mb-2">Loan Repayments Made</h3>
            <p className="text-3xl font-bold text-green-600">£20.00</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-sm uppercase text-gray-500 mb-2">Referral Boost</h3>
            <p className="text-3xl font-bold text-purple-600">+£8.45</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Invite Friends & Family</h3>
          <p className="text-gray-600 mb-6">They earn cashback, and you get a 10% repayment boost.</p>
          <div className="bg-gray-100 rounded-lg px-4 py-3 text-gray-700 font-mono text-sm mb-4">
            loopitback.com/ref/nick123
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Copy Referral Link
          </button>
        </div>
      </main>

      <footer className="mt-24 mb-12 text-center text-sm text-gray-500">
        &copy; 2025 Loopback. All rights reserved.
      </footer>
    </div>
  );
}