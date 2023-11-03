import "./Layout.scss"

import { NavLink } from "react-router-dom";


const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="header-left">
            <NavLink to="">Home</NavLink>
          </div>
          <div className="header-right">
            <NavLink to="users/skills">Skills</NavLink>
            <NavLink to="users/education">Education</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header