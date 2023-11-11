function pickproparray(array, prop) {
    return array.map(element => element[prop]).filter(value => value !== undefined);
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];
const res = pickproparray(students, 'name');
console.log(res)


function createcounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count)
    }
}

const counter1 = createcounter();
counter1();
counter1();

const counter2 = createcounter()
counter2();
counter2();



function spinwords(str) {
    return str.split(' ')
        .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
}

const result1 = spinwords( "Привет от Legacy" )
console.log(result1)

const result2 = spinwords("This is a test" )
console.log(result2)