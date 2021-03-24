let tourists = [];

tourists[0] = {
    name : 'Mark',
    age : 19,
    routes : ["Rome", "Tbilisi", "London", "Berlin"],
    money : [120, 200, 150, 140]
}

tourists[1] = {
    name : 'Bob',
    age : 21,
    routes : ["Miami", "Moscow", "Vienna", "Riga", "Kiev"],
    money: [90, 240, 100, 76, 123]
}

tourists[2] = {
    name : 'Sam',
    age : 22,
    routes : ["Tbilisi", "Budapest", "Warsaw", "Vilnius"],
    money : [118, 95, 210, 236]
}

tourists[3] = {
    name : 'Anna',
    age : 20,
    routes : ["New York", "Athens", "Sydney", "Tokyo"],
    money : [100, 240, 50, 190]
}

tourists[4] = {
    name : 'Alex',
    age : 23,
    routes : ["Paris", "Tbilisi", "Madrid", "Marseille", "Minsk"],
    money : [ 96, 134, 76, 210, 158]
}
// ------------------------------tbiliss shi myofni-----------------------SHeusrulebeli misia DONEEEEE!!!!


let q;
let w;
let tbilisi = 'Tbilisi';
let truNumber = 0
for (q = 0; q < tourists.length; q++){
    tourists[q].clever = null;
    for (w = 0; w < tourists[q].routes.length; w++){
        tourists[q].routes[w] === tbilisi ? truNumber++ : truNumber ;
        tourists[q].clever = truNumber >= 1 ? "Yeas" : "NO" ;
    }
    truNumber = 0
}

//
// let tbilisi = 'Tbilisi';
// let x = 0;
//
// while (x < tourists.length){
//     tourists[x].clever = tbilisi === tourists[x].routes[0] ? "ki" :  tbilisi === tourists[x].routes[1] ? "ki"
//         : tbilisi === tourists[x].routes[2] ? "ki" : tbilisi === tourists[x].routes[3] ? "ki" : "ara" ;
//      x++;
// }

// ----------------Budget  && Average Cost && Adult or not-----------
//
let y ;
let j;
for (j = 0;j < tourists.length; j++){
     tourists[j].budget = 0;
     tourists[j].averageCost = 0;
    tourists[j].adult = tourists[j].age > 21 ? true : false;
         for (y =0; y < tourists[j].money.length; y++ ){
         tourists[j].budget += tourists[j].money[y];
         tourists[j].averageCost = tourists[j].budget /  tourists[j].money.length;
}
};

// ------luxurious-----

let luxuriousPerson = null;

let highAmount = tourists[0].budget;

let m;
for (m =0 ; m < tourists.length; m++){
    if (  highAmount >= tourists[m].budget ){
        luxuriousPerson = tourists[0].name;
    }else{
        highAmount = tourists[m].budget;
        luxuriousPerson = tourists[m].name;
    }

}

console.log(`The highest Amount is : ${highAmount}`)
console.log(`The luxuriousPerson is ${luxuriousPerson}`)
console.log(tourists)





