type User = {
  name: string;
  age: number;
  email: string;
}

const printUserInfo = (user:User) =>{
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}

console.log(printUserInfo({ name: 'John', age: 30, email: 'ved'}));