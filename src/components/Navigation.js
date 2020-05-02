import React, { useEffect, useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";

const Navigation = () => {

  const [nav, setNav] = useState(false);
  const [collapse, setCollapse ] = useState(false); 

  const toggleNav = () => { setNav(!nav); setCollapse(!collapse);}

  return (
    <div>
      <Navbar type="light" theme="white" expand="md">
        <Col>
          <NavbarBrand href="/">
            <img src={require('../images/endonova.png')} alt='endonova' class="img-fluid" style={{width:150}}/>
          </NavbarBrand>
        </Col>
        <div align='right' className='n'>
        <NavbarToggler onClick={toggleNav}/>
        <Collapse open={collapse} navbar >
          <Nav align='right' navbar>
            <NavItem>
              <NavLink active href="/about">
                ¿Quiénes Somos?
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
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation