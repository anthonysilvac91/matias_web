import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { menuItems } from "../Utils/menuItems";
import logo from "../Assets/logo_blanco.png"

const Nav = () => {
  return (
    <Navbar fluid className="dark:bg-black padding-general">
      
      <NavbarBrand href="#">
         <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NOMBRE WEB</span> */}
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse >
         {menuItems.map(({ text, route }) => (
    <NavbarLink key={route} as={Link} to={route}>
      {text}
    </NavbarLink>
  ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
