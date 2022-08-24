
//Homework

let sentence = "Salam olsun hadasdmiya"

function indexOfStrings(str) {
    let sizeOfIndex = []
    let words = sentence.split(" ")
    for (let i = 0; i < words.length; i++) {
        
        sizeOfIndex.push(words[i].length)
    }
    return sizeOfIndex

}

console.log(indexOfStrings(sentence));








// let student1 = {
//     name: "Ali",
//     surname: "Valiyev",
//     age: 25,
//     phoneNumbers: [1231231, 131213],
//     groups: [{
//         name: "P130",
//         room: "Sirius",
//         teachers: [{
//             name: "Cavid",
//             age: 26
//         },
//         {
//             name: "Rovshen",
//             age: 22
//         }
//         ]
//     },
//     {
//         name: "P126",
//         room: "Black",
//         teachers: ["Ferhad", "Rovsen"]
//     }
//     ]

// }

// for (const item of student1.groups) {

//     for (const teacher of item.teachers) {
//         if (teacher.name == "Cavid") {
//             console.log(teacher.name + " " + teacher.age);
//         }
//     }

// }

// for (const item of student1.groups) {
//     if (item.room == "Sirius") {
//         console.log("Yes");
//         console.log(item.name);
//         break;
//     }



//     else{
//         console.log("No");
//     }
// }




// console.log(student1.groups[0].room);

// console.log(student1.phoneNumbers);

// let isExist = student1.phoneNumbers.includes(12231);

// if (isExist) {
//     console.log("Duzdur");
// }

// else {
//     console.log("Nott");
// }

// let group = {
//     name: "P130",
//     capacity: 4,
//     students: [],
//     addStudent: function (stu) {

//         if (group.students.length != group.capacity) {


//             group.students.push(stu)
//             return;
//         }
//         console.log("no free place");
      
//     }
    
// }
// console.log(group.students);

// group.addStudent("Salam")
// group.addStudent("Sagol")
// group.addStudent("Orxa")
// group.addStudent("Orxan")
// group.addStudent("Orx")


// let sentence = "Salam olmasin hamiya"

// function calculate(str) {

//   let words =[]  
//   let array = sentence.split(" ")
//   for (let i = 0; i < array.length; i++) {
//     words.push(array[i].length)
    
//   }
//   return words
  
// }


// console.log(calculate());
