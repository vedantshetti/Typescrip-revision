let password : string | number = 20;

type UserInfo = {
    name: string;
    age: number;
}

type Accountdetails = {
    email: string;
    password: string;
}

let user: UserInfo & Accountdetails = {
    email: 'vedant@gmail.com',
    password: 'vedant123',
}


const items: (string | number)[] = ['apple', 1, 'banana', 2, 'cherry', 3];

 
