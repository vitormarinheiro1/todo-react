import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 border-b border-solid">
      <div className="flex justify-around items-center">
        <div className="font-bold text-2xl text-blue-500">TO DO</div>

        <nav>
          <ul>
            <li>
              <Link to="https://github.com/vitormarinheiro1/todo-react">
                <FaGithub className="hover:text-zinc-700" size={26} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
