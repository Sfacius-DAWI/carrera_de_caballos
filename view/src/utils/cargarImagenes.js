import caballo1 from '../../../img/caballo_1.png';
import caballo2 from '../../../img/caballo_2.png';
import caballo3 from '../../../img/caballo_3.png';

export const cargarImagens = () => {
    crearElementoImagen(caballo1, 'imagen1');
    crearElementoImagen(caballo2, 'imagen2');
    crearElementoImagen(caballo3, 'imagen3');
}

const crearElementoImagen = (imagen, id) => {
    const imgElement = document.createElement('img');
    const divPadre = document.getElementById('caballos_tablero');
    if (!divPadre) {
      console.error("aqui no esta crack'");
      return;
    }
    imgElement.setAttribute('src', imagen);
    imgElement.setAttribute('id', id)
    imgElement.setAttribute('class', 'imagenes_css')
    imgElement.style.width = '100px'
    imgElement.style.position = 'relative';
    divPadre.append(imgElement);
}