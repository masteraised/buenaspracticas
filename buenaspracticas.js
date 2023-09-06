// Inicializamos edad del user
let userAge = 25;

//Funcion para comprobar los requisitos
function checkUserRequisites(){
    let tieneAuto = true;
    if (userAge >= 18){
        if(tieneAuto===true){
            return true;
        }else {
            return false;
        }
    }else{
        return false;
    }
}
//Mostramos solucion en pantalla
console.log(checkUserRequisites());
