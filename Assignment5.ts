// Partial
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(user: Partial<User>) {
    if (user.id) {
      console.log(user.id);
    }
    if (user.name) {
      console.log(user.name);
    }
    if (user.email) {
      console.log(user.email);
    }
  }
  
  const userToUpdate: Partial<User> = { id: 1, name: 'John Doe' };
  updateUser(userToUpdate); // Logs: "Updating user with id 1" and "Updating user name to John Doe"
  
  // Required
  interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  
  type RequiredUserProfile = Required<UserProfile>;
  
  const userProfile: RequiredUserProfile = {
    id: 123,
    name: "Alice",
    age: 30
  };
  console.log(userProfile); // Logs: { id: 123, name: 'Alice', age: 30 }
  
  // Readonly
  const config: Readonly<{ apiKey: string; timeout: number }> = {
    apiKey: "12345",
    timeout: 5000,
  };
  
  console.log(config); // Logs: { apiKey: '12345', timeout: 5000 }
  
  // Pick
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;
  
  const productSummary: ProductSummary = {
    id: 1,
    name: "Laptop",
    price: 999.99,
  };
  
  console.log(productSummary); // Logs: { id: 1, name: 'Laptop', price: 999.99 }
  
  // Omit
  type UserWithoutEmail = Omit<User, "email">;
  
  const userWithoutEmail: UserWithoutEmail = {
    id: 2,
    name: "Bob",
  };
  
  console.log(userWithoutEmail); // Logs: { id: 2, name: 'Bob' }
  
  // Record
  type UserRoles = Record<number, string>;
  
  const roles: UserRoles = {
    1: "Admin",
    2: "Editor",
    3: "Viewer"
  };
  
  console.log(roles); // Logs: { 1: 'Admin', 2: 'Editor', 3: 'Viewer' }
  