import { useState } from "react";

const Conteudo = () => {
  const [item, setItem] = useState("");
  // estado atual e funcao que atualiza o estado
  // LISTA = []
  // ADICIONAR ITEM
  // STATE QUE VAI MUDAR O
  const [listas, setLista] = useState([]);

  function handleAddTask() {
    setLista([...listas, item]);
    setItem("");
  }

  return (
    <>
      <h1>Tasks</h1>
      <div className="flex flex-col items-center">
        <label htmlFor="value">Write a value to task</label>
        <input
          type="text"
          placeholder="Go a store..."
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          className="bg-blue-500 rounded-full py-2 px-4 text-white font-bold uppercase hover:bg-blue-400"
          onClick={handleAddTask}
        >
          Add task
        </button>
        <ul>
          {listas.map((lista, index) => (
            <li key={index}>- {lista}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Conteudo;
