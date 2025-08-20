import React from "react";

function PokemonTable({ pokemonesList, editarPokemon, deletePoke }) {
  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Nivel</th>
          <th>Ataque Basico</th>
          <th>Ataque Cargado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {pokemonesList.map((val) => (
          <tr key={val.id}>
            <th>{val.id}</th>
            <td>{val.nombre}</td>
            <td>{val.tipo}</td>
            <td>{val.nivel}</td>
            <td>{val.ataque_basico}</td>
            <td>{val.ataque_cargado}</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  onClick={() => editarPokemon(val)}
                  className="btn btn-info"
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => deletePoke(val)}
                  className="btn btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default PokemonTable;
