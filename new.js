// console.log("hello world");

// // let a;
// console.log(Number(a));
// let obj={
//     name:"Sura",
//     age:20,
//     accont_num:1273,
//     gender:"male"
// };
// console.log(Object.keys(obj));

//  let obj1=Object.create(obj);
//  obj1.city="varansi";
// for(let key in obj1) {
//     console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptors(obj1,"name"));
// Object.defineProperty(obj,"name", {
//       value:"mohit",
//     writable:false,
//     enumearable:true,
//     configurable:true,
// })

// let arr=[10,29,39,484];
// call back function

// function greet(fun) {
//     console.log("Calling greet");
//     meet();
// }
// function meet() {
//     console.log("Calling meet");
// }

// greet(meet);
// greet(()=> {
//     console.log("HI in arrow function");
// })

// function fetchdata() {
//     console.log("I am fetching data");

// }
//  fetchdata();
// setInterval(fetchdata,5000);

// let arr=[10,29,39,484];
// arr.forEach(function(num) {
//     console.log(num);
// })
// arr.forEach((num,index) => {
//     console.log(num,index);
// })


// arr.forEach((num,index,arr) => {
    
//     arr[index]=num*2;
//     console.log(num,index);
// })

// function greet(num) {
//     console.log(num);
// }
// arr.forEach(greet);

// filter

// let arr=[10,29,39,484];

// let result=arr.filter(function (num) {
     
//     return num%2==0;
// })

// console.log(result);

const stu=[
    {name:"suraj",age:20},
    {name:"mohit",age:19},
    {name:"rohit",age:18}
]

// stu.filter()

const res=stu.filter(function(obj) {  //also use destructing concept

    if(obj.age>18) {
        return obj.age;
    }
})

console.log(res);

let arr=[10,90,87];
const ans=arr.map(function (num) {

    return num*num;
})

console.log(ans);

const ar = [1, 2, 3, 4, 5, 6];

const a = ar
  .filter((num) => {
    return num % 2 == 0;
  })
  .map((num) => {
    return num * num;
  });

console.log(a);

// const r=arr.reduce(callback function,inilization);

const r=arr.reduce((acc,curr) =>{
    
    acc=acc+curr;
    return acc;
},0);

let a1=["orange","apple","mangoes","orange","banana"];
const final=a1.reduce(function(acc,curr) {
       
    if(acc.hasOwnProperty(curr)) {
        acc[curr]++;
    }
    else {
        acc[curr]=1;
    }

    return acc;
},{})

console.log(final);

const set1=new Set([10,20,90,398]);

console.log(set1)
set1.add(10);
let user=10;
console.log(set1.has(user));  //use sprread operator to conver into array

const map1=new Map();
map1.set(3,90);
map1.set(5,90);

map1.set(1,90);

for(let [key,value] of map1) {
    console.log(key,value);     // also foreach lopp in set and map
}


let obj={
    name:"rohit",
    age:18,
    greet:function() {
        console.log("hello greet");
        console.log(this.name);
    }
}

obj.greet();














































