import { FaBrandsGithub } from "solid-icons/fa";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://github.com/tapciify/tapciify.ru" class="secondary">
            <FaBrandsGithub />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Tapciify web</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/tapciify/api" class="secondary">
            Api
          </a>
        </li>
      </ul>
    </nav>
  );
}
