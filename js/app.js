/**
 * ## Objectif
 * Construire un échiquier en JS :sunglasses:
 * NOM : SALAMATAO OUSMANE PM2024
 */

/*Declaration de nos variable */
let arrayLetter = ["", "H", "G", "F", "E", "D", "C", "B", "A"]
let chess = document.getElementById("chess")
let nbCible = 8;

/*Fonction pour crée une ligne horizontale du damier */
function createCase(nbcible, nbCase, caseEtat) {
    let li;
    let previousSibling;
    let case1 = "case1"
    let case2 = "case2"
    let firtCase = false
    switch (caseEtat) {
        case -1:
            case1 = "case2"
            case2 = "case1"
            console.log('Reverse Case color');
            break;
        case 0:
            case1 = "case1"
            case2 = "case2"
            console.log('Normal Case color');
            break;
    }


    for (let i = 1; i <= 1; i++) {

        while (nbCase >= 1) {

            if (firtCase == false) {
                li = document.createElement("li")
                li.className = case1
                li.innerText = `A${nbcible}`
                chess.appendChild(li)
                firtCase = true
            } else if (nbCase % 2 != 0) {
                /*On crée un élement li*/
                li = document.createElement("li")
                li.className = case2
                li.innerText = `${arrayLetter[nbCase]}${nbcible}`
                /*On rajoute notre li au parent chess*/
                chess.appendChild(li)

            } else if (nbCase % 2 == 0) {
                li = document.createElement("li")
                li.className = case1
                li.innerText = `${arrayLetter[nbCase]}${nbcible}`

                chess.appendChild(li)
            }

            nbCase--
        }
        nbCase = 7
        nbcible--

    }

}
createCase(8, 8, 0);
createCase(7, 8, -1);
createCase(6, 8, 0);
createCase(5, 8, -1);
createCase(4, 8, 0);
createCase(3, 8, -1);
createCase(2, 8, 0);
createCase(1, 8, -1);