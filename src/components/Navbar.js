export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow">

      <h1 className="text-xl font-bold">
        Rashid.dev
      </h1>

      <ul className="flex gap-6">

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  )
}