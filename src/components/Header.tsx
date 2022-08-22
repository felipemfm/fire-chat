import { User } from "../globals";
import "./Header.css";

interface props {
  user: User | null;
}

const Header: React.FC<props> = (props) => {
  return (
    <div className="Header">
      <h1>Title</h1>
      {props.user && (
        <h3>
          {props.user.name}#{props.user.token}
        </h3>
      )}
    </div>
  );
};

export default Header;