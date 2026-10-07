import Link from "next/link";
import { Manrope } from "next/font/google";
// import { stackServerApp } from "@/stack/server";
// import { redirect } from "next/navigation";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

/*
  Palette
  navy-950  #0A1A33  headings, primary buttons
  navy-800  #12294D  hover states, dark panel
  navy-600  #1F4175  accents, progress bars
  navy-100  #DCE5F2  borders
  navy-50   #F3F6FB  page background
*/

const stock = [
  { name: "USB-C cable, 2 m", sku: "CB-0214", qty: 480, max: 600, status: "In stock" },
  { name: "Wireless mouse", sku: "MS-1108", qty: 62, max: 300, status: "Low" },
  { name: "Laptop stand", sku: "ST-0377", qty: 215, max: 250, status: "In stock" },
  { name: "Webcam 1080p", sku: "WC-0951", qty: 9, max: 120, status: "Reorder" },
];

const features = [
  {
    title: "Track every product",
    body: "Add items with SKUs, categories and prices, then find any of them in seconds.",
  },
  {
    title: "Catch low stock early",
    body: "See which items are running low before they run out, and reorder on time.",
  },
  {
    title: "See the full picture",
    body: "Stock value, category totals and recent changes in one dashboard.",
  },
];

export default async function Home() {
  // const user = await stackServerApp.getUser();
  // if (user) {
  //   redirect("/dashboard");
  // }
  return (
    <div className={`${manrope.className} min-h-screen bg-[#F3F6FB] text-[#0A1A33]`}>
      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-extrabold tracking-tight">Inventory</span>
        <Link
          href="/sign-in"
          className="rounded-lg px-4 py-2 text-sm font-semibold text-[#12294D] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4175]"
        >
          Sign in
        </Link>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_1fr] lg:pt-16">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Know what you have, before you run out.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#3D5170]">
              Track products, watch stock levels and get a clear view of your
              inventory in one place.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/sign-in"
                className="rounded-lg bg-[#0A1A33] px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#12294D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4175] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F6FB]"
              >
                Sign in
              </Link>
              <Link
                href="#features"
                className="rounded-lg border border-[#B9C8DF] bg-white px-7 py-3 font-semibold text-[#0A1A33] transition-colors hover:border-[#1F4175] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4175] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3F6FB]"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Stock preview: the one memorable element */}
          <div
            className="overflow-hidden rounded-2xl border border-[#DCE5F2] bg-white shadow-[0_24px_60px_-20px_rgba(10,26,51,0.35)]"
            aria-hidden="true"
          >
            <div className="flex items-center justify-between bg-[#0A1A33] px-6 py-4 text-white">
              <span className="font-semibold">Warehouse stock</span>
              <span className="text-sm text-[#B9C8DF]">4 of 1,284 items</span>
            </div>
            <ul className="divide-y divide-[#DCE5F2]">
              {stock.map((item) => {
                const pct = Math.round((item.qty / item.max) * 100);
                const low = item.status !== "In stock";
                return (
                  <li key={item.sku} className="px-6 py-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-[#6B7F9E]">{item.sku}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold tabular-nums">{item.qty}</p>
                        <p
                          className={`text-sm font-semibold ${
                            low ? "text-[#0A1A33] underline decoration-[#1F4175] decoration-2 underline-offset-4" : "text-[#6B7F9E]"
                          }`}
                        >
                          {item.status}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 rounded-full bg-[#DCE5F2]">
                      <div
                        className={`h-1.5 rounded-full ${low ? "bg-[#0A1A33]" : "bg-[#5A7FB5]"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="max-w-xl text-3xl font-extrabold tracking-tight">
              Everything you need to keep stock under control
            </h2>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="border-t-2 border-[#0A1A33] pt-5">
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#3D5170]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="bg-[#0A1A33] text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
            <h2 className="max-w-md text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to see your inventory clearly?
            </h2>
            <Link
              href="/sign-in"
              className="rounded-lg bg-white px-7 py-3 font-semibold text-[#0A1A33] transition-colors hover:bg-[#DCE5F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1A33]"
            >
              Sign in
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}