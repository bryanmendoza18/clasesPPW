//aplicando json
//los colores se aplican en sentido horario, empezando por las villas de la derecha y terminando en el centro
// esta funcion carga los colores del json
//se debe usar primero la funcion cargar, para hacer el array de colores que se usara luego en el boton archivo json
var colores=[]

//esta funcion hace que los colores de las villas se cambien segun el estado de las villas en el json
async function nueva(){
  const response= await fetch('./ciudadela.json')
  const jsonData= await response.text()
  const jsonData1 = JSON.parse(jsonData)
    for(var urbanizacion in jsonData1.urbanizaciones){
      if(jsonData1.urbanizaciones[urbanizacion].estado=='green')
        jsonData1.urbanizaciones[urbanizacion].estado='rgb(51, 255, 0)'
        colores.push(jsonData1.urbanizaciones[urbanizacion].estado)}
    var container = document.getElementsByClassName('derecha')
    for(var y=0;y<container.length;y++) {
        container[y].style.background = colores[y];     
    }colores.splice(0,4)
    var container = document.getElementsByClassName('abajo')
    for(var y=0;y<container.length;y++) {
        container[y].style.background = colores[y];
    }colores.splice(0,5)
    var container = document.getElementsByClassName('izquierda')
    for(var y=0;y<container.length;y++) {
        container[y].style.background = colores[y];
    }colores.splice(0,4)
    var container = document.getElementsByClassName('arriba')
    for(var y=0;y<container.length;y++) {
        container[y].style.background = colores[y];
    }colores.splice(0,6)
    var container = document.getElementsByClassName('centro')
    for(var y=0;y<container.length;y++) {
        container[y].style.background = colores[y];
    }colores.splice(0,4)
    console.log(colores)
}

//funciones con colores por defecto, ya sea residentes sin deudas, con deudas o villas sin habitar
function sinDeudas() {
    var element = document.getElementsByClassName("amarillo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
    var element1 = document.getElementsByClassName("verde");
    for(var indice in element1) {
        if(!isNaN(indice)) {
          element1[indice].style.background = 'rgb(51, 255, 0)';
        }
    }
    var element = document.getElementsByClassName("rojo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
    var element = document.getElementsByClassName("gris");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
}

function conDeudas() {
    var element = document.getElementsByClassName("amarillo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'yellow';
        }
    }
    var element1 = document.getElementsByClassName("verde");
    for(var indice in element1) {
        if(!isNaN(indice)) {
          element1[indice].style.background = 'white';
        }
    }
    var element = document.getElementsByClassName("rojo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'red';
        }
    }
    var element = document.getElementsByClassName("gris");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
}

function noHabitado() {
    var element = document.getElementsByClassName("amarillo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
    var element1 = document.getElementsByClassName("verde");
    for(var indice in element1) {
        if(!isNaN(indice)) {
          element1[indice].style.background = 'white';
        }
    }
    var element = document.getElementsByClassName("rojo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'white';
        }
    }
    var element = document.getElementsByClassName("gris");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'gray';
        }
    }
}

function normal() {
    var element = document.getElementsByClassName("amarillo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'yellow';
        }
    }
    var element1 = document.getElementsByClassName("verde");
    for(var indice in element1) {
        if(!isNaN(indice)) {
          element1[indice].style.background = 'rgb(51, 255, 0)';
        }
    }
    var element = document.getElementsByClassName("rojo");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'red';
        }
    }
    var element = document.getElementsByClassName("gris");
    for(var indice in element) {
        if(!isNaN(indice)) {
          element[indice].style.background = 'gray';
        }
    }
}

//ALICUOTA

//funcion para crear objeto de persona
function Person(vivienda, cedula, name, cedula_r, nombre_r, tel, correo, fecha_ini) {
  this.vivienda = vivienda;
  this.cedula = cedula;
  this.name = name;
  this.cedula_r = cedula_r;
  this.nombre_r = nombre_r;
  this.tel = tel;
  this.correo = correo;
  this.fecha_ini = fecha_ini;
}

function usuario(cedula, name, apellido, rol, estado){
  this.cedula = cedula;
  this.name = name;
  this.apellido = apellido;
  this.rol = rol;
  this.estado = estado;
}

//Ventana de pago de alicuota
var persona = [
  {anio: '2022', mes: '1', fecha_pag: '2-2-2022', valor:'110', estado:'Pendiente',verificar:'✅',evidencia:'⬆'},
  {anio: '2022', mes: '1', fecha_pag: '29-2-2022', valor:'110', estado:'Pendiente',verificar:'✅',evidencia:'⬆'},
  {anio: '2022', mes: '2', fecha_pag: '12-2-2022', valor:'100', estado:'Pagado',verificar:'✅',evidencia:'⬇'},
  {anio: '2022', mes: '3', fecha_pag: '15-2-2022', valor:'100',estado:'Pagado',verificar:'✅',evidencia:'⬇'},
  {anio: '2022', mes: '4', fecha_pag: '16-3-2022', valor:'90',estado:'Pagado',verificar:'✅',evidencia:'⬇ '},
]
function agregar(){
  var listaPersona = document.getElementById('tabla');
  let tablaContent = ``
  for (const item of persona) {
     tablaContent += `
      <tr>
        <td>${item.anio}</td>
        <td>${item.mes}</td>
        <td>${item.fecha_pag}</td>
        <td>${item.valor}</td>
        <td>${item.estado}</td>
        <td><button onclick="location.href='/html/datos-verificacion.html'">✅</button></td>
        <td><button onclick="location.href='/html/datos-transaccion.html'">⬆</button></td>
        
      </td>
    `
  }
  listaPersona.innerHTML += tablaContent
  }