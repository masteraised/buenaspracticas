//Inicializamos variables
let userAge = 25;
let hasCar = true;

//Funcion de comprobacion
function canDrive() {
    try {
        if (userAge >= 18 && hasCar)
        { { return true; } 
        } else { return false; }
    }
    catch {
        console.log("dato invalido")
    }
}

//Imprimimos en pantalla resultado
console.log(canDrive()); 
