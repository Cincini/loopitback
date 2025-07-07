import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd handle signup, e.g. API call
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-sans text-gray-800">
      <Head>
        <title>Loopback — Pay Back Loans with Cashback</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 tracking-wide">Loopback</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#how" className="hover:text-indigo-600 transition">
              How it works
            </a>
            <a href="#join" className="hover:text-indigo-600 transition">
              Join
            </a>
            <Link href="/offers" className="hover:text-indigo-600 transition">
              Offers
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Turn Cashback <span className="text-indigo-600">into Student Loan Payback</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Link your everyday spending to your student loan and repay it faster. Friends and family
            can help too.
          </p>
          <a
            href="#join"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Get Early Access
          </a>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          aria-label="How Loopback works"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 10-8 0v4a4 4 0 008 0V7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v7m-3-3h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">
              Connect your student loan and create your Loopback account.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 13a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 13v7m-3-3h6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Shop Normally</h3>
            <p className="text-gray-600">Click tracked links to earn cashback from top brands.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 14l6-6M15 14l-6-6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20v-8"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Repay Automatically</h3>
            <p className="text-gray-600">
              Cashback is paid directly toward your student loan — no extra steps needed.
            </p>
          </div>
        </section>

        {/* Join Waitlist */}
        <section
          id="join"
          className="bg-white max-w-xl mx-auto rounded-2xl shadow-lg p-10 text-center"
          aria-label="Join Loopback waitlist"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">Join the Waitlist</h2>
          <p className="text-gray-600 mb-8">
            Be the first to try Loopback and start crushing your student loan with cashback.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-indigo-700 transition"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold mt-4">Thanks! You're on the list. 🎉</p>
          )}
        </section>
      </main>

      <footer className="mt-24 mb-12 text-center text-sm text-gray-500">
        &copy; 2025 Loopback. All rights reserved.
      </footer>
    </div>
  );
}