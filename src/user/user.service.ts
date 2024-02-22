import { Injectable } from "@nestjs/common";

type User = {
    username: string;
    age: number;
}

@Injectable()
export class UserService{
    private users: User[] = [
        { username: 'John', age: 25 },
        { username: 'Jane', age: 70 },
        { username: 'Alice', age: 40 },
        { username: 'Vera', age: 6 },
        { username: 'Michaël', age: 1 },
        { username: 'Tina', age: 34 },
        { username: 'Jude', age: 25 },
        { username: 'Lisa', age: 25 },
        { username: 'Fifi', age: 11 },
    ];
    getUsers(): User[] {
        return this.users;
    }
    getByName(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }


    /***************PRIORITE */
    addUser(username: string, age: number): void {
        const newUser: User = {
            username: username,
            age: age
        };
        this.users.push(newUser);
    }
}