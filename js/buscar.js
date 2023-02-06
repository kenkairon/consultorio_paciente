function Consultorio() {
    this.pacientes = [];
}

Consultorio.prototype.buscarPaciente = function(nombre) {
    for (var i = 0; i < this.pacientes.length; i++) {
        if (this.pacientes[i].nombre === nombre) {
            return this.pacientes[i];
        }
    }
    return null;
};
Consultorio.prototype.mostrarTodosPacientes = function() {
    var pacientes = "";
    for (var i = 0; i < this.pacientes.length; i++) {
        pacientes += this.pacientes[i].nombre + ": " +
                    this.pacientes[i].edad + " años, " +
                    this.pacientes[i].rut + ", " +
                    this.pacientes[i].diagnostico + "\n";
    }
    return pacientes;
};
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}

Object.defineProperties(Paciente.prototype, {
    "nombre": {
        get: function() {
        return this._nombre;
    },
        set: function(nombre) {
        this._nombre = nombre;
    }
    },
    "edad": {
        get: function() {
        return this._edad;
    },
        set: function(edad) {
        this._edad = edad;
    }
    },
    "rut": {
        get: function() {
        return this._rut;
    },
        set: function(rut) {
        this._rut = rut;
    }
    },
    "diagnostico": {
        get: function() {
        return this._diagnostico;
        },
        set: function(diagnostico) {
        this._diagnostico = diagnostico;
    }
    }
});
    var consultorio = new Consultorio();
    var paciente1 = new Paciente("juan", 25, "12345678-9", "Resfriado");
    var paciente2 = new Paciente("marta", 32, "91234567-8", "Gripe");
    var paciente3 = new Paciente("carlos", 38, "81234567-8", "demencia");

  

    consultorio.pacientes.push(paciente1, paciente2,paciente3);
    const DOMtable = document.querySelector('#domTable');
function buscarPaciente() {
    var nombre = document.getElementById("nombre-paciente").value;
    var paciente = consultorio.buscarPaciente(nombre);
    if (paciente === null) {
        let NoExiste = "Paciente No Encontrado";
        document.getElementById('domTable').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <p><i class="bi bi-envelope-check"></i> ${NoExiste}</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    } else {
        const table = document.createElement("table");
        table.classList.add('table','table-hover');
        const trow = document.createElement('tr');
        const thcolName = document.createElement('th');
        thcolName.textContent= "Nombre";
        trow.appendChild(thcolName);
        const thcolEdad = document.createElement('th');
        thcolEdad.textContent= "Edad";
        trow.appendChild(thcolEdad);
        const thcolRut = document.createElement('th');
        thcolRut.textContent= "rut";
        trow.appendChild(thcolRut);
        const thcolDiagnostico = document.createElement('th');
        thcolDiagnostico.textContent= "Diagnostico";
        trow.appendChild(thcolDiagnostico);
        // const thcolEditar = document.createElement('th');
        // thcolEditar.textContent= "Editar";
        // trow.appendChild(thcolEditar);

        const trInfo = document.createElement('tr');
        const tdDatosNombre = document.createElement('td');
        tdDatosNombre.textContent = paciente.nombre;
        const tdDatosEdad = document.createElement('td');
        tdDatosEdad.textContent = paciente.edad;
        const tdDatosRut = document.createElement('td');
        tdDatosRut.textContent = paciente.rut;
        const tdDatosDiagnostico = document.createElement('td');
        tdDatosDiagnostico.textContent = paciente.diagnostico;
        // const tdBtnModificar = document.createElement('td');
        // const btnModificar = document.createElement('button');
        // btnModificar.classList.add('btn', 'btn-info');
        // btnModificar.textContent = 'Modificar';
        // btnModificar.setAttribute('id','modificarBtn')
        // tdBtnModificar.appendChild(btnModificar);
        

        trInfo.appendChild(tdDatosNombre);
        trInfo.appendChild(tdDatosEdad);
        trInfo.appendChild(tdDatosRut);
        trInfo.appendChild(tdDatosDiagnostico);
        // trInfo.appendChild(tdBtnModificar)
        table.appendChild(trow);
        table.appendChild(trInfo);
        DOMtable.appendChild(table);
    }
}
function mostrarPacientes() {
    var pacientes = consultorio.pacientes;
    var mensaje = "<h4>Pacientes registrados:</h4><br>";
    for (var i = 0; i < pacientes.length; i++) {
        mensaje += pacientes[i].nombre + ", " + pacientes[i].edad + " años, " + pacientes[i].rut + ", " + pacientes[i].diagnostico + "<br><br>";
    }
    document.getElementById('domTable').innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <p><i class="bi bi-envelope-check"></i><b>${mensaje}</b> </p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
}
