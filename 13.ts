function printuser() : {name: string, age: number} {
    return {
        name: "John Doe",
        age: 30
    };
}

const user = printuser();
console.log(user.name);
console.log(user.age);
console.log(user); 