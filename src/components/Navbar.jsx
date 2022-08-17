import React from "react";
import { useDispatch } from "react-redux";
import { setSectionInfo } from "../redux/cv/cv.actions";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li onClick={() => dispatch(setSectionInfo('education'))}>FORMACIÓN</li>
          <li onClick={() => dispatch(setSectionInfo('experience'))}>EXPERIENCIA</li>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
