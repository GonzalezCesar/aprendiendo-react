import { Link } from "../Link.jsx";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Esta es una pagina de ejemplo apra crear un React desde cero</p>
      <Link to='/about'>Ir a Sobre Nosotros</Link>
    </>
  );
}
