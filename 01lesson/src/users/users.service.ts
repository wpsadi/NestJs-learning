import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John Doe',
            roleId: 1,
            email: 'john.doe@example.com',
        },
        {
            id: 2,
            name: 'Alice Caeiro',
            roleId: 2,
            email: 'alice.caeiro@example.com',
        },
    ];
    
    async findOne(userId: number) {
        return this.users.find(user => user.id === userId);
    }

    async findAll(data:CreateUserDto) {
        // throwing not found exception
         throw new NotFoundException('User not found');
        console.log(data);
        return this.users;
    }


}
