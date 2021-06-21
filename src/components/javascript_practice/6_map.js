const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
]

let instructor_names = []

instructors.forEach(instructor => {
    instructor_names.push(instructor.name)
})

console.log(instructor_names)

//a better way to write the function above would be to use the .map() method designed in ES5 to make things more sleek;

const instructorNames = instructors.map(instructor => instructor.name)
console.log(instructorNames)

const instructorInfo = instructors.map(instructor => instructor.name + ': ' + instructor.specialty)
console.log(instructorInfo);

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
]
console.log(kvArray)

let reformattedArray = kvArray.map(obj => {
    let rObj = {}
    rObj[obj.key] = obj.value
    console.log(rObj);
})