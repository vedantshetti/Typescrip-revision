let color : 'red' | 'green' | 'blue' = 'red';
color = 'green'; // valid
// color = 'yellow'; // invalid, Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'
console.log(color);