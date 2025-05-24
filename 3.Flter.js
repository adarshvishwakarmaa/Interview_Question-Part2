//Create a new array with only items that pass a test.


const Maps = [1,2,3,4,5,6,7,3]
const Filter = Maps.filter((arr)=>{
   return arr<=6
})
console.log(Filter);


const arry1 = [1,2,3,4]
const arry2 = [2,4,7,8]

const Fil = arry1.filter(val =>arry2.includes(val))
console.log(Fil);