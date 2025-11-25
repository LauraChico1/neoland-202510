newFunction()
function newFunction() {
    var alumnos = []

    alumnos[0] = { nombre: 'Juan', edad: 34 }
    alumnos[1] = { nombre: 'Laura', edad: 30 }
    alumnos[2] = { nombre: 'Albert', edad: 36 }
    alumnos[3] = { nombre: 'Jodlin', edad: 45 }
    alumnos[4] = { nombre: 'Paula', edad: 32 }
    alumnos[5] = { nombre: 'Manuel', edad: 48 }
    alumnos[6] = { nombre: 'Jorge', edad: 32 }

    var suma = 0

    for (var i = 0; i < alumnos.length; i++) {
        console.log('Nombre: ' + alumnos[i].nombre + 'Edad: (' + alumnos[i].edad + ')')
        suma += alumnos[i].edad
    }

    console.log('Suma total:', suma)
}
                                            
