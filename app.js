const letraA= "ai";
const letraE= "enter";
const letraI= "imes";
const letraO= "ober";
const letraU= "ufat";
const mediaQuery= matchMedia("(min-width: 320px)");


const agregarElementos = mql =>{
    if(mql.matches){
    let etiquetaImg= document.querySelector("#mensajeEncriptado > img")
    
    let etiquetaP = document.querySelector("#mensajeEncriptado > p")
    etiquetaImg.style.display = '';
    etiquetaP.style.display = 'block';
    }else{
    let etiquetaImg= document.querySelector("#mensajeEncriptado > img")
    let etiquetaP = document.querySelector("#mensajeEncriptado > p")
    etiquetaImg.style.display = 'block';
    etiquetaP.style.display = 'block';
    }
}


let formulario = document.getElementById("formulario");
let textoCapturado= document.getElementById("texto");
let btnEncriptar= document.getElementById("botonEncriptar")
let btnDesencriptar= document.getElementById("botonDesencriptar")
let btnCopiar = document.getElementById("botonCopiar")
let textoAEncriptar = "";
let textoADesencriptar = "";



const encriptarTexto = () =>{
   textoEncriptado = textoAEncriptar.replaceAll("e",letraE)
                                    .replaceAll("i",letraI)
                                    .replaceAll("a",letraA)
                                    .replaceAll("o",letraO)
                                    .replaceAll("u",letraU)
    let resultado = document.getElementById("resultado-mensaje").textContent =textoEncriptado
    formulario.reset()
    return resultado
}

const desencriptarTexto = () =>{
    textoDesencriptado = textoADesencriptar.replaceAll(letraE, "e")
                                    .replaceAll(letraI, "i")
                                    .replaceAll(letraA, "a")
                                     .replaceAll(letraO, "o")
                                     .replaceAll(letraU, "u")
    let resultado = document.getElementById("resultado-mensaje").textContent =textoDesencriptado
    formulario.reset()
    return resultado
} 

const eliminarElementos = () =>{
    let etiquetaImg= document.querySelector("#mensajeEncriptado > img")
    let etiquetaP = document.querySelector("#mensajeEncriptado > p")
    etiquetaImg.style.display = 'none';
    etiquetaP.style.display = 'none';
}


const copiarTextoEncriptado = () => {
    let copiaEncriptado = encriptarTexto()

    if(copiaEncriptado.length != 0){
        navigator.clipboard.writeText(copiaEncriptado)
        document.getElementById("resultado-mensaje").textContent = ""
        return
    }else{
        return
    }
}

const copiarTextoDensencriptado = () => {
    let copiaDensencriptado = desencriptarTexto()

    if(copiaDensencriptado.length !=0){
        navigator.clipboard.writeText(copiaDensencriptado)
        document.getElementById("resultado-mensaje").textContent = ""
        return
    }else{
        return
    }
}

btnEncriptar.addEventListener('click',(e) =>{
    textoAEncriptar= textoCapturado.value.toLowerCase()
    encriptarTexto()
    eliminarElementos()
    e.preventDefault()
    btnCopiar.style.display = 'block';
})

btnDesencriptar.addEventListener('click',(e) =>{
     textoADesencriptar= textoCapturado.value.toLowerCase()
     desencriptarTexto()
     eliminarElementos()
     e.preventDefault()
     btnCopiar.style.display = 'block';
 })


btnCopiar.addEventListener('click', () =>{

    copiarTextoEncriptado();
    copiarTextoDensencriptado();
    agregarElementos(mediaQuery);
    btnCopiar.style.display = 'none';
})






