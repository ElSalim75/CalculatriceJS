//On récupère les ressources
operator = document.querySelector('#operators-list');
calculator = document.querySelector("#calculator");

//On ajoute l'évenement au formulaire en annulant l'élement par défaut
calculator.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = operator.value;

    //On récupère les valeurs entrées dans les champs
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;

    //On vérifie si les champs on bien été remplis
    //Si ce n'est pas le cas, on lance une alerte
    if (number1 == "" || number2 == ""){
        alert("Veuillez remplir les deux champs");
        return false;
    } else {
        //On convertie les valeurs en integer
        number1 = parseInt(number1);
        number2 = parseInt(number2);
    }

    let result = document.querySelector('#result');

    //On lance la bonne fonction selon le selecteur choisi
    if (value == "+") {
        console.log(addition(number1, number2));
        result.value = addition(number1,number2);
    } else if (value == "-") {
        result.value = substraction(number1,number2);
    } else if (value == "*") {
        result.value = multiplication(number1, number2);
    } else {
        result.value = division(number1, number2);
    }
});


// Liste des fonctions de calcul
function addition(number1, number2) {
    return number1 + number2;
}

function substraction(number1, number2) {
    return number1 - number2;
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}