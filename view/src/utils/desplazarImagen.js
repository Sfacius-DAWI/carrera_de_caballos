export const modificarPosicionTodasLasFotos = () => {
    return new Promise(resolve => {
        const caballos = Array.from(document.getElementsByTagName('img'));

        const contenedor = document.getElementById('caballos_tablero');
        const anchoContenedor = contenedor.offsetWidth;
        const delay = 16; 
        caballos.forEach(element => {
            
            let posicionActual = 0;
            const animate = async () => {
            for (; posicionActual < anchoContenedor - 200;) {
                posicionActual += generarNumeroRandomParaCaballo();
                element.style.left = posicionActual + 'px';
                await new Promise(res => setTimeout(res, delay));
                console.log(element);
            }
            resolve();
            };

            animate();
        });

    });

}

const generarNumeroRandomParaCaballo = () => {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
    };

