/*
Function Constructor:
Puedes usar el constructor de funciones para crear una nueva función a partir de una cadena que contiene código JavaScript. Aunque se puede utilizar de manera similar a eval(), generalmente se considera más seguro, ya que el alcance de la nueva función es local y no tiene acceso a las variables globales.



mantener el cursor en el input
- escribir en input cuando se pulse un boton
- cuando se escriba en el input recoger el valor
*/ 


// Obtener todos los botones
const nums = document.querySelectorAll('.button')
let oper = ""
let result = ""
const displayBox = document.getElementById("display")


// Escuchar cada botón cuando se le da clic
nums.forEach((num) => {
    num.addEventListener('click', function() {
        // Obtener el id del botón que se ha hecho clic
        const numId = this.id
        let numValue =document.getElementById(numId).innerHTML
        console.log('Se hizo clic en el botón con el id: ', numId, " y ", numValue)
        //Si ya se ha hecho una operación comprueba si se pulsa +, -, *, / o = y continua el display, en caso contrario se resetea 
        if (result !== "" && numId != "clear") {
            if (numValue === "+" || numValue === "-" || numValue === "*" || numValue === "/"  || numValue === "+" ) {
                console.log("result: ", result)
                displayText(numValue)
                result = ""
            } else {
                result = ""
                console.log("result: ", result)
                number = ""
                displayText(number)
                displayText(numValue)
            }
        } else {
            switch (numId) {
                case "equals":
                    oper = document.getElementById("display").value
                    console.log("Operación: ", oper)
                    console.log("El resultado es: "+ math.evaluate(oper))
                    result = math.evaluate(oper);
                    number = ""
                    displayText(number)
                    console.log("hecho")
                    displayText(result)
                    break;
                    case "clear":
                        result = ""
                        displayText("")
                        break;
                default:
                    displayText(numValue)
                    break;
            }
        }
        
    });
});

//Mostrar por pantalla
function displayText (number) {
    console.log("boton: ", number)
    console.log("display: ", displayBox.value)
    if (number === "") {
        displayBox.value = number
        console.log("display after: ", displayBox.value)
    } else {
        displayBox.value += number
        console.log("display after: ", displayBox.value)
    }
}

