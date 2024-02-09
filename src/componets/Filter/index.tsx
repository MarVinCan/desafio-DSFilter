import "./styles.css";

export default function Filter() {
  return (
    <div className="dsf-container dsf-card-filter">
      <form className="dsf-form-items">
        <input className="dsf-item-form" type="text" placeholder="Preço mínimo" />
        <input className="dsf-item-form" type="text" placeholder="Preço máximo" />
        <button className="dsf-item-form" type="submit">Filtrar</button>
      </form>
    </div>
  );
}
