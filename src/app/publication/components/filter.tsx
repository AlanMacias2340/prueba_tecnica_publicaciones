import IconeSearch from "../../../assets/search_icone.png";

type Props = {};

function Filter({}: Props) {
  return (
    <div className="flex justify-around items-center w-full">
      <div className="flex justify-center items-center gap-3 p-5 w-[60%]">
        {/**filtrar por titulo o contenido */}
        <input
          type="text"
          placeholder="Buscador"
          className="border-2 border-blue-950 rounded-md p-1 w-[100%]"
        />
        <img src={IconeSearch} alt="btn_search" className="min-h-10 min-w-10 max-w-11 max-h-11 cursor-pointer" />
      </div>
      <div className="w-[30%] flex justify-center items-center gap-5 p-5">
        {/**filtrar por orden alfabetico */}
        <label htmlFor="order">Ordenar por:</label>
        <select
          name="order"
          id="order"
          className="border-2 border-blue-950 rounded-md p-1"
        >
          <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
