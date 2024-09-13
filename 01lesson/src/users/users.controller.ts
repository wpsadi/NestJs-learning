import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe, } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto} from './dto/create-user-dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    // GET /users
    // @Get() // Decorator // /users 
    // findAll() {
    //     return 'This action returns all users';
    // }

    @Post( ) // Decorator // /users?role=admin
    findAll(@Body(ValidationPipe) body : CreateUserDto) {
        console.log(body);
        return this.usersService.findAll(body)
    }
    // findAll(@Query("role") role : string) {
    //     return 'This action returns all users with role ' + role;
    // }

    // @Get() // Decorator // /users 
    
    // findAll(@Query() query : any) {
    //     return 'This action returns all users with role ' + JSON.stringify(query);
    // }

    @Get("interns") // /users/interns
    findInterns() {
        return 'This action returns all interns';
    }

    // GET /users/1
    @Get(':id') // /users/1
    findOne(@Param("id") id:string) { 
        console.log(typeof id); // string
        return `This action returns a specific user ${id} ${typeof(id)}`;
    }

    @Post() // /users
    create(@Body() user:any) {
        return user;
    }

    @Patch(':id') // /users/1
    update(@Param('id') id:string, @Body() user:any) {
        return `This action updates a user ${id} ${JSON.stringify(user)}`;
    }

    @Delete(':id') // /users/1
    remove(@Param('id') id:string,@Param() param:any) {
        return `This action removes a user ${id} ${JSON.stringify(param)}`;
    }

 
}
