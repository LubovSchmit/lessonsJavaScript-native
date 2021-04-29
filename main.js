const array = [777,23,12,43,32,65,82,21,0,99]

//по возрастанию
for (let i =0; i<array.length; i++) {
    if(array[i] > array[i+1]){
        let temp = array[i+1]
        array[i+1 ] = array[i]
        array[i] = temp
    }
}
console.log(array)
