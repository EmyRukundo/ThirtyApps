

const inventors =[
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    {first: 'Isasc', last: 'Newton', year: 1875, passed: 1727 },
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    {first: 'Johannes', last: 'Kepler', year: 1473, passed: 1543 },
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
]

const people =[ "Harry","Ross",
"Bruce","Cook",
"Carolyn","Morgan",
"Albert","Walker",
"Randy","Reed",
"Larry","Barnes",
"Lois","Wilson",
"Jesse","Campbell",
"Ernest","Rogers",
"Theresa","Patterson",
"Henry","Simmons",
"Michelle","Perry",
"Frank","Butler",
"Shirley","Brooks",
"Rachel","Edwards",
"Christopher","Perez",
"Thomas","Baker",
"Sara","Moore",
"Chris","Bailey",
"Roger","Johnson",
"Marilyn","Thompson",
"Anthony","Evans",
"Julie","Hall",
"Paula","Phillips",
"Annie","Hernandez",
"Dorothy","Murphy",
"Alice","Howard" 
]

// Array .prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((inventor =>inventor.year >= 1500 && inventor.year < 1600 ))
console.table(fifteen);

//Array.prototype.sort()
// 2. Give us an array of the inventory first and last names

const fullNames = inventors.map(inventor => `${inventor.first} + ${inventor.last}`);
console.log(fullNames);

//Array.prototype.sort()
// 3.  sort the inventors by birthdate, oldest to youngest

const ordered1 = inventors.sort(function(a, b) {
    if(a.year > b.year){
        return 1;
    } else {
        return -1;
    }
});
console.table(ordered1);

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);

//Array.prototype.reduce()
// 4.How many years did all the inventors live!?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0);
console.log(totalYears);

/// 5. Sort the invenstors by years lived

const oldest = inventors.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest)

// 6.create a list of boulevards in paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/category:Boulevars_in_paris

// const category = document.querySelector('mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                    .map(link => link.textContent)
//                    .filter(streetName => streetName.includes('de'));

// 7. sort exercise
// Sort the people alphabetically la
    const alpha = people.sort(function(lastOne, nextOne) {
          const [aLast, aFirst] = lastOne.split(", ");
          const [bLast, bFirst] = nextOne.split(" ,  ");
          return aLast > bLast ? 1: -1;
} );
console.log(alpha);
// 8. sreduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'truck'];

const transportation = data.reduce(function(obj, item) {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);