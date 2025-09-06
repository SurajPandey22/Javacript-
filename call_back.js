function fetch(callback) {
    setTimeout(() => {
        console.log("fetching user details___");

        const obj = {
            name: "rohit",
            age: 20,
            city: "vara"
        };

        callback(obj); 
    }, 2000);
}

function greet(b) {
    console.log("Name:", b.name);
}
function meet(b) {
    console.log("Age:", b.age);
}


fetch(greet); 
fetch(meet);  
