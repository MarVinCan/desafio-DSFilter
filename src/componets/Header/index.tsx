import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";
import { Link } from "react-router-dom";

export default function Header() {
  const { contextProductCount } = useContext(ContextProductCount);
  return (
    <header>
      <div className="dsf-container dsf-items-header">
        <Link to={"/"}>
          <h1>DSFilter</h1>
        </Link>
        <div className="dsf-number-products-header">
          <h2>{contextProductCount} producto(s)</h2>
        </div>
      </div>
    </header>
  );
}
