//Arreglo de Objetos
var disciplinas = [];

function imprimir(){
    console.log(disciplinas);
    let tblInscripcion = document.getElementById('tblInscripcion');
    tblInscripcion.innerHTML = '';
    disciplinas.forEach((x) =>{
        let tr = document.createElement('tr');
        let tdNum = document.createElement('td');
        let tdDis = document.createElement('td');
        let tdNom = document.createElement('td');
        let tdCed = document.createElement('td');
        let tdEd = document.createElement('td');
        let tdVal = document.createElement('td');
        //Asignar Valores a las columnas
        tdNum.innerText = disciplinas.indexOf(x)+1;
        tdDis.innerText = x.disciplina; 
        tdNom.innerText = x.nombre;
        tdCed.innerText = x.cedula;
        tdEd.innerText = x.edad;
        tdVal.innerText = x.valor;
        //agrega las columnas a la fila
        tr.append(tdNum);
        tr.append(tdDis);
        tr.append(tdNom);
        tr.append(tdCed);
        tr.append(tdEd);
        tr.append(tdVal);
        tblInscripcion.append(tr);
    });
    
    sumarValor();
}

//Método agregar: 
function agregar(){
    //Lectura de valores en los Inputs
    let nom = document.getElementById('txtNombre').value; 
    let ced = document.getElementById('txtCedula').value; 
    let ed = document.getElementById('txtEdad').value; 
    let dis = document.getElementById('slDisciplina').value;
    let val = document.getElementById('txtValor').value;
    //Crear objeto con los valores
    let nuevaDisciplina = {
        "disciplina" : dis,
        "nombre" : nom,
        "cedula" : ced,
        "edad" : ed,
        "valor" : parseInt(val)
    }
    disciplinas.push(nuevaDisciplina);
    imprimir();
    borrar();
}

function borrar(){
    document.getElementById('txtNombre').value = "Ingrese Nombre"; 
    document.getElementById('txtCedula').value = "Ingrese No_ Cedula"; 
    document.getElementById('txtEdad').value = "Minimo 5 años"; 
    document.getElementById('slDisciplina').value = 0;
    document.getElementById('txtValor').value = 0;
}


function sumarValor() {
    let totalValor = 0;
    disciplinas.forEach((x) =>{
        totalValor = totalValor + x.valor;
    });
    let tdTotalValor = document.getElementById('tdTotalValor');
    tdTotalValor.innerText = totalValor;
}
