export default function Projects() {

  const projects = [
    {
      name: "Fashion Store",
      description: "Custom Shopify theme development and UI improvements."
    },
    {
      name: "Jewelry Store",
      description: "Variant pricing customization and product page optimization."
    },
    {
      name: "Print On Demand Store",
      description: "Full Shopify store setup with conversion focused design."
    }
  ]

  return (

    <section id="projects" className="py-20 bg-white">

      <h2 className="text-3xl text-black font-bold text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div key={index} className="p-6 border rounded bg-black">

            <h3 className="text-xl font-semibold">
              {project.name}
            </h3>

            <p className="mt-3">
              {project.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  )
}