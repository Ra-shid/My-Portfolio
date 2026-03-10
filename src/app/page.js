export default function Home() {
  return (
    <main>

      {/* Hero Section */}

      <section className="min-h-screen flex flex-col justify-center items-center text-center">

        <h1 className="text-5xl font-bold">
          Shopify Developer
        </h1>

        <p className="mt-6 text-xl max-w-xl">
          I help ecommerce brands build, customize and optimize Shopify stores for better performance and conversions.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-black text-white px-6 py-3 rounded">
            View My Work
          </button>

          <button className="border px-6 py-3 rounded">
            Contact Me
          </button>
        </div>

      </section>

    </main>
  );
}