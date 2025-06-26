type User = {
    name: string;
    age: number;
    
}

type info = {
    email?: string;
    phone?: string;
}

type userAndInfo = User & info;

const alice : userAndInfo = {  
    name: 'Alice',
    age: 25,
    email: 'vedant',
    phone: '1234567890'
}

console.log(alice);