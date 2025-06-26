type User = {
    name: string;
    age: number;
    email?: string;
}

const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age: ${user.age}${user.email ? `, Email: ${user.email}` : ''}`;
}

// console.log(printUserInfo({ name: 'John', age: 30 })); 