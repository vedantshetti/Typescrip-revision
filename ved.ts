type Person = {
  name: string;
  age?: number;
  address?: {
    street: string;
    city: string;
    country: string;
  };
};

const ved: Person = {
  name: "John Doe",
};

console.log(ved.name);
