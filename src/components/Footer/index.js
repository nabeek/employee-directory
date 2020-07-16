import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer m-t5">
      <div class="content has-text-centered">
        <a href="https://github.com/nabeek/employee-directory" target="_blank">
          <small>
            <FaGithub /> GitHub Repo
          </small>
        </a>
        <p>
          <small>
            <a href="https://github.com/nabeek" target="_blank">
              nabeek made this
            </a>
            , copyright &copy; {new Date().getFullYear()}
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
