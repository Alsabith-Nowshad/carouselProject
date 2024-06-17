let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")

let array = [img1,img2,img3]

let count = 1;

console.log(array.length);



next.addEventListener("click",function(){
array[count-1].style.display = "none"
array[count].style.display = "block"
count++
console.log(count);
// if(count == array.length){
//     next.style.display = "none"
// }else if(
//     count <array.length
// ){
//     next.style.display = "block"
// }else{
//      next.style.display = "none"
// }
})



prev.addEventListener("click",function(){
    array[count-1].style.display = "none"
    array[count-2].style.display = "block"
    count--
    // if(count  array.length){
    //     next.style.display = "none"
    // }else{
    //     next.style.display = "block"
    // }
})

