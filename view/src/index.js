import "./styles.css";
import { cargarImagens } from "./utils/cargarImagenes.js";
import { modificarPosicionTodasLasFotos } from "./utils/desplazarImagen.js";

document.addEventListener('DOMContentLoaded', async () => {
    cargarImagens();
    await modificarPosicionTodasLasFotos()
})

