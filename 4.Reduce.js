//Combine all items into one value (sum, product, etc).
const Maps = [1,2,3,4,5,6,7,3]
const Reduce = Maps.reduce((req,rem)=>{
   return req+rem
})
console.log(Reduce);



const arr1 = [12,34,65,35,25,45]
const reduce = arr1.reduce((num1,num2)=>num1 * num2)
console.log(reduce);