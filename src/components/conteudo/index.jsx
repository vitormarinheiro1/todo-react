import { useState } from "react";

const Conteudo2 = () => {
  const [novoItem, setNovoItem] = useState("");
  const [lista, setLista] = useState([]);

  const add = () => {
    setLista([...lista, novoItem]);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <label htmlFor="newtask" className="font-bold text-xl text-blue-500 mt-4 mb-6">
        Nova task
      </label>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Criar site..."
          onChange={(e) => setNovoItem(e.target.value)}
          className="border border-solid rounded-full p-1"
        />
        <button
          className="font-bold uppercase text-white bg-blue-500 hover:bg-blue-400 rounded-full px-4 flex items-center justify-center"
          onClick={add}
        >
          Adicionar
        </button>
      </div>
      <ul>
        {lista.map((listas, index) => (
          <li key={index}>{listas}</li>
        ))}
      </ul>
    </div>
  );
};

export default Conteudo2;
