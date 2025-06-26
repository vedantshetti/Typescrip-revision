type User = {
  name: string;
  age: number;
  email: string;
}

const printUserInfo = (user:User) =>{
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
}