import { NavLink } from "react-router-dom";

export default function Button({nome, href}) {
  return (
    <>
      <NavLink 
      to={href}
      >{nome}</NavLink>
    </>
  );
}
