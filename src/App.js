import { useState, useEffect } from "react";
import PokemonForm from "./Components/PokemonForm";
import PokemonTable from "./Components/PokemonTable";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [nivel, setNivel] = useState("");
  const [ataqueBasico, setAtaqueBasico] = useState("");
  const [ataqueCargado, setAtaqueCargado] = useState("");
  const [id, setId] = useState(0);
  const [editar, setEditar] = useState(false);
  const [pokemonesList, setPokemones] = useState([]);

  const apiUrl = "http://localhost:3001";

  const limpiarCampos = () => {
    setNombre("");
    setTipo("");
    setNivel("");
    setAtaqueBasico("");
    setAtaqueCargado("");
    setEditar(false);
    setId(0);
  };

  const getPokemones = () => {
    fetch(apiUrl + "/pokemones")
      .then((res) => res.json())
      .then((data) => setPokemones(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPokemones();
  }, []);

  const add = () => {
    fetch(apiUrl + "/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, tipo, nivel, ataqueBasico, ataqueCargado }),
    })
      .then((res) => res.text())
      .then(() => {
        getPokemones();
        limpiarCampos();
        Swal.fire("Registro exitoso", `Pokemon ${nombre} registrado con exito`, "success");
      })
      .catch(() => alert("Error al registrar el Pokémon"));
  };

  const update = () => {
    fetch(apiUrl + "/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nombre, tipo, nivel, ataqueBasico, ataqueCargado }),
    })
      .then((res) => res.text())
      .then(() => {
        getPokemones();
        limpiarCampos();
        Swal.fire("Actualización exitosa", `Pokemon ${nombre} actualizado con exito`, "success");
      })
      .catch(() => alert("Error al actualizar el Pokémon"));
  };

  const deletePoke = (val) => {
    Swal.fire({
      title: "¿Confirmar eliminado?",
      html: `<i>¿Realmente desea eliminar a <strong>${val.nombre}</strong>?</i>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${apiUrl}/delete/${val.id}`, { method: "DELETE" })
          .then((res) => res.text())
          .then(() => {
            getPokemones();
            limpiarCampos();
            Swal.fire("Eliminado!", `${val.nombre} fue eliminado`, "success");
          })
          .catch(() => alert("Error al eliminar el Pokémon"));
      }
    });
  };

  const editarPokemon = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setTipo(val.tipo);
    setNivel(val.nivel);
    setAtaqueBasico(val.ataque_basico);
    setAtaqueCargado(val.ataque_cargado);
    setId(val.id);
  };

  return (
    <div className="container mt-3">
      <PokemonForm
        nombre={nombre}
        setNombre={setNombre}
        tipo={tipo}
        setTipo={setTipo}
        nivel={nivel}
        setNivel={setNivel}
        ataqueBasico={ataqueBasico}
        setAtaqueBasico={setAtaqueBasico}
        ataqueCargado={ataqueCargado}
        setAtaqueCargado={setAtaqueCargado}
        editar={editar}
        add={add}
        update={update}
        limpiarCampos={limpiarCampos}
      />
      <PokemonTable
        pokemonesList={pokemonesList}
        editarPokemon={editarPokemon}
        deletePoke={deletePoke}
      />
    </div>
  );
}

export default App;
