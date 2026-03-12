export default function Services () {
  return (
    <section id="services" className="py-20 bg-gray-100">

  <h2 className="text-3xl text-black font-bold text-center">
    Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">

    <div className="p-6 bg-black rounded shadow">
      <h3 className="text-xl font-semibold">
        Shopify Store Setup
      </h3>
      <p className="mt-3">
        Complete Shopify store setup with theme customization and app integration.
      </p>
    </div>

    <div className="p-6 bg-black rounded shadow">
      <h3 className="text-xl font-semibold">
        Theme Customization
      </h3>
      <p className="mt-3">
        Custom sections, UI improvements and advanced theme features.
      </p>
    </div>

    <div className="p-6 bg-black rounded shadow">
      <h3 className="text-xl font-semibold">
        Speed Optimization
      </h3>
      <p className="mt-3">
        Improve Shopify performance and loading speed.
      </p>
    </div>

  </div>

</section>
    
  )
}