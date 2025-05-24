const  cube=[];
for(i=1;i<=100;i++){
    cube.push(i*i*i)    
}
console.log(cube);




for (i = 1; i <= 100; i++) {
  if (i % 3 ===0 && i % 5 ===0) {
    console.log(i, "Divisible by 3 and 5");
  } else if (i % 5==0) {
    console.log(i, "Divisible by 5");
  } else if (i % 3==0) {
    console.log(i, "Divisible by 3");
  } else {
    console.log(i, "This is not Divsible by 3 and 5");
  }
}