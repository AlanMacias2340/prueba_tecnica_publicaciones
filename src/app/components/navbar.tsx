import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

type Props = {};

function NavBar({}: Props) {
  const navigate = useNavigate();

  return (
    <div className="flex bg-blue-200 justify-between items-center">
      <div className="flex justify-center items-center p-5 gap-2.5">
        <img
          src={Logo}
          alt="logo"
          className="h-20 w-20 bg-no-repeat bg-center bg-cover"
        />
        <h1 className="text-gray-50 font-black text-3xl">SoftPublic</h1>
      </div>
      <div className="flex justify-center items-center p-5 gap-2.5">
        <ul className="flex justify-center items-center gap-5 text-blue-950 font-medium">
          <li className="hover:text-blue-50 cursor-pointer">Inicio</li>
          <li
            className="hover:text-blue-50 cursor-pointer"
            onClick={() => navigate(`/publication`)}
          >
            Publicaciones
          </li>
          <li className="hover:text-blue-50 cursor-pointer">Sobre nosotros</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
