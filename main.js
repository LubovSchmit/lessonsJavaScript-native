const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

//по возрастанию bubblesort
for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i + 1]
            array[i + 1] = array[i]
            array[i] = temp
        }
    }
}
console.log(array)

//или
for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {

            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}
console.log(array)


//sort -
//не возвращает новый массив, он на месте сортирует элемепнты массива
//и возвращает отсортированный измененный массив
//сортировка регистрозависима, сортировка по таблице символов юникода
const names = ["Bob", "Alex", "Donald", "Ramzan", "2021", "кот", "bob"]
names.sort()
console.log(names)

const numbers = [100, 1, 1000, 333, 22226]
numbers.sort()
console.log(numbers) //sort все равно интерпретирует все числа как строки

names.sort().reverse()//отсортирует с конца
console.log(numbers.sort())


//сортировка чисел:   sort -> compareFunc -> a
// a<=0  - не переставляем
// a > 0 - переставляем
// то есть, если возвращается отриц число, то не меняем местами два сравниваемых числа,
// а если положительное - то меняет местами


//длинный 1 вариант
function comp(a, b) {
    if (a <= b) {
        return -1 /*//то есть любое ОТРИЦАТЕЛЬНОЕ ЧИСЛО*/

    } else {
        return 1
    }
}
//короткая функция, 2 вариант

const shortComp = (a,b) => a-b
//a и b это текущий и следующий элемент в массиве


console.log(numbers.sort((a,b)=>b-a))

//сортировка ОБЪЕКТОВ В МАССИВЕ
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];
//хотим получить список начиная с самого отличника
console.log(students.sort((a,b)=>b.scores - a.scores))
//0: {name: "John", age: 19, isMarried: false, scores: 121}
// 1: {name: "Nick", age: 20, isMarried: false, scores: 120}
// 2: {name: "Bob", age: 22, isMarried: true, scores: 95}
// 3: {name: "Alex", age: 23, isMarried: true, scores: 89}
// 4: {name: "Helge", age: 21, isMarried: true, scores: 89}
// length: 5

//хотим отсортировать по возрасту от самого младшего
console.log(students.sort((a,b)=>b.age - a.age))
//0: {name: "Alex", age: 23, isMarried: true, scores: 89}
// 1: {name: "Bob", age: 22, isMarried: true, scores: 95}
// 2: {name: "Helge", age: 21, isMarried: true, scores: 89}
// 3: {name: "Nick", age: 20, isMarried: false, scores: 120}
// 4: {name: "John", age: 19, isMarried: false, scores: 121}
// length: 5



//chaining методов массива
/*console.log(students
    .sort((a,b)=>a.age-b.age)
    .reverse()
    .pop()
)*/

//отсортировка по алфавиту (по значению строковых свойств элементов НЕ РЕГИСТРОЗАВИСИМАЯ и наоборот начиная с конца алфавита)
console.log(students.sort((a,b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1).reverse())
