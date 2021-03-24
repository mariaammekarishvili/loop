let students = [];
let subj = ['js', 'react', 'py', 'java'];
students[0] =
    {
        firstName : 'Jan',
        lastName : 'Reno',
        age : 26,
        scores : [62, 57, 88, 90],
        GPA : []
    }


students[1] =
    {
        firstName : 'Klod',
        lastName : 'Mone',
        age : 19,
        scores : [77, 52, 92, 67],
        GPA : []
    }


students[2] =
    {
        firstName : 'Van',
        lastName : 'Goge',
        age : 21,
        scores :  [51, 98, 65, 70],
        GPA : []
    }


students[3] =
    {
        firstName : 'Dam',
        lastName : 'Squear',
        age : 36,
        scores : [ 82, 53, 80, 65],
        GPA : []
    };

// ----- gpa & Sum & Avarage Sum & GPA sum & frontend score

let n ;
let m ;
let credits =[4,7,6,3];
let allAverageSum =0;
for (n = 0; n < students.length; n++){
        students[n].GPAsum = 0;
        students[n].Sum = 0;
        students[n].averageSum = 0;
        students[n].frontEnd = 0;
    for (m = 0; m < 4; m++){
        if(students[n].scores[m]> 91){
            students[n].GPA.push   (credits[m] * 4)
        }else if(students[n].scores[m] > 81){
            students[n].GPA.push ( 3 * credits[m])
        }else if(students[n].scores[m] > 71) {
            students[n].GPA.push (2  * credits[m])
        }else if(students[n].scores[m] > 61) {
            students[n].GPA.push (1 * credits[m])
        }else {
            students[n].GPA.push (0.5 * credits[m])
        }
        students[n].Sum += students[n].scores[m]
        students[n].averageSum = students[n].Sum / students[n].scores.length
        students[n].GPAsum += students[n].GPA[m]
    }

    allAverageSum += students[n].Sum /16;
    students[n].adult = students[n].age > 21 ? "yes" : "NO";
    students[n].frontEnd = students[n].scores[0] + students[n].scores[1];

}
// ------ High GPA
let k = 0;
let highGpa = students[0].GPAsum;
let bestStudent = students[0].firstName;
let frontGeniusScore =0 ;
let frontGenius;


while ( k < students.length){
    if( highGpa >= students[k].GPAsum) {

    }else {
        highGpa = students[k].GPAsum;
        bestStudent = students[k].firstName;
    }
    k ++
}

// ----- frontend and adult

let d ;
let h = 0 ;

while (h < students.length){
    frontGeniusScore = students[h].age > 21 ? students[h].frontEnd : null;
    frontGenius =  students[h].age > 21 ? students[h].firstName : null;
    h++;
}
for (d = 0 ; d < students.length; d++){

    if (students[d].adult === 'yes' && frontGeniusScore < students[d].frontEnd) {
        frontGeniusScore =  students[d].frontEnd;
        frontGenius = students[d].firstName;
    }

}


console.log(`The best student is ${bestStudent},GPA : ${highGpa}`)
console.log(allAverageSum)
console.log(students)
