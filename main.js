// 1 

let selectDiv = document.querySelector('#object').children;

let myElements = Array.from(selectDiv);

console.log(myElements);

// 2
let details = {
    nom : "Jamila",
    age : 24
}

let tabObjet = Object.keys(details);
console.log(tabObjet);

//3 

tabObjet.forEach(el => {
    console.log(el);
});

//4
// let tab2 = Object.values(details);
// console.log(tab2);

tabObjet.forEach(el => {
    console.log(details[el] );
});

// 5

tabObjet.forEach((el, i) => {
    console.log(details[el], i);
});

//6
tabObjet.forEach((el,i) => {
        myElements[i].innerText = details[el]
    });

