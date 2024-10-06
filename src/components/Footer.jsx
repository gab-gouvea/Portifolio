import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <>
      <div className="h-48 bg-green-700 flex justify-around items-center">
        <div className="flex gap-6">
          <NavLink to="https://www.instagram.com/gab.gmo/" target="_blank">
            <i class="fa-brands fa-instagram fa-2xl"></i>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/gabriel-gouvea-marques-de-oliveira-50b205200/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </NavLink>
          <NavLink to="https://github.com/gab-gouvea" target="_blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </NavLink>
        </div>
        <div className="flex flex-col">
          <span>tel: (11)97700-7150</span>
          <span>email: oliveirag396@gmail.com</span>
        </div>
      </div>
    </>
  );
}
