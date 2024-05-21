import React, { useEffect, useState } from "react";
import classes from "./../style/Header.module.scss";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);
  function menuToggleHandler() {
    setMenuOpen((p) => !p);
  }

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>Portfolio</h2>

        <nav
          className={`${classes.header_content_navbar} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/About">
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link to="/Project">
                <b>Project</b>
              </Link>
            </li>

            <li>
              <Link to="/Contact">
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header_content_toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={() => menuToggleHandler()} />
          ) : (
            <BiMenuAltRight onClick={() => menuToggleHandler()} />
          )}
        </div>
      </div>
    </header>
  );
};

export default header;
