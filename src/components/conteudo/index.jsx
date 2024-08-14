import { useState } from "react";
import { toast, Toaster } from "sonner";

const Conteudo = () => {
  const [novoItem, setNovoItem] = useState("");
  const [lista, setLista] = useState([]);

  const add = () => {
    setLista([...lista, novoItem]);
    toast("Tarefa criada com sucesso!");
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <Toaster />
      <label
        htmlFor="newtask"
        className="font-bold text-xl text-blue-500 mt-4 mb-6"
      >
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
          className="font-bold uppercase text-white bg-blue-500 hover:bg-blue-600 rounded-full px-4 flex items-center justify-center disabled:cursor-not-allowed disabled:bg-blue-400"
          onClick={add}
          disabled={!novoItem}
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

export default Conteudo;
