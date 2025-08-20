import React from "react";

function PokemonForm({
  nombre,
  setNombre,
  tipo,
  setTipo,
  nivel,
  setNivel,
  ataqueBasico,
  setAtaqueBasico,
  ataqueCargado,
  setAtaqueCargado,
  editar,
  add,
  update,
  limpiarCampos
}) {
  return (
    <div className="card text-center">
      <div className="card-header">GESTION DE POKEMONES</div>
      <div className="card-body">
        <div className="input-group mb-3">
          <span className="input-group-text">Nombre</span>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            className="form-control"
            value={nombre}
            placeholder="Ingrese un nombre Pokemon"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Tipo:</span>
          <input
            type="text"
            onChange={(e) => setTipo(e.target.value)}
            className="form-control"
            value={tipo}
            placeholder="Ingrese su tipo"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Nivel:</span>
          <input
            type="number"
            onChange={(e) => setNivel(e.target.value)}
            className="form-control"
            value={nivel}
            placeholder="Ingrese el nivel"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ataque Basico:</span>
          <input
            type="text"
            onChange={(e) => setAtaqueBasico(e.target.value)}
            className="form-control"
            value={ataqueBasico}
            placeholder="Ingrese el ataque básico"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ataque cargado:</span>
          <input
            type="text"
            onChange={(e) => setAtaqueCargado(e.target.value)}
            className="form-control"
            value={ataqueCargado}
            placeholder="Ingrese el ataque cargado"
          />
        </div>
      </div>
      <div className="card-footer text-body-secondary">
        {editar ? (
          <>
            <button className="btn btn-warning m-2" onClick={update}>
              Actualizar Pokemon
            </button>
            <button className="btn btn-info m-2" onClick={limpiarCampos}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="btn btn-success" onClick={add}>
            Registrar Pokemon
          </button>
        )}
      </div>
    </div>
  );
}

export default PokemonForm;
