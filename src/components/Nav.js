import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

const Header = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink active href="/about">
          ¿Qui?
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/servicios">Servicios</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/blog">Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contacto">
          Contacto
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Header;