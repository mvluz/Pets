function ageByDogBirth(value){

    let dogAge = year() - value;
    let element =  document.getElementById("dog-age") 
    element.value= dogAge;
}
// https://www.petz.com.br/blog/pets/idade-de-cachorro/
function dogAgeHuman() {
    let age = parseFloat(document.getElementById("dog-age").value);
    let porte = parseInt(document.getElementById("porte").value);
    let result, restAge, greaterThanTwo;

    if (age <= 0 || isNaN(age) || age === "") {
        alert("Idade inválida. Informe um número positivo");
        let element = document.getElementById("dog-age");
        element.style.color='red';
        document.getElementById("dog-age").focus();
        return;
    }

    if (porte == 1) {

        greaterThanTwo = age > 2 ? true : false;
        if (greaterThanTwo) {
            restAge = parseFloat(age - 2);
            restAge = restAge * 4.5;
            result = restAge + 25;
        } else {
            result = age * 12.5;
        }

    }
    else {
        if (porte == 2) {

            greaterThanTwo = age > 2 ? true : false;
            if (greaterThanTwo) {
                restAge = parseFloat(age - 2);
                restAge = restAge * 5.7;
                result = restAge + 21 ;
            } else {
                result = age * 10.5;
            }

        }
        else {
            if (porte == 3) {

                greaterThanTwo = age > 2 ? true : false;
                if (greaterThanTwo) {
                    restAge = parseFloat(age - 2);
                    restAge = restAge * 8;
                    result = restAge + 18;
                } else {
                    result = age * 9;
                }

            }
            else {
                alert("Selecione um tamanho");
                let element = document.getElementById("porte");
                element.style.color='red';
                return;
            }
        }
    }

    document.getElementById("resultado").value = String(result).replace(".",",") + " Anos humanos.";
    
}