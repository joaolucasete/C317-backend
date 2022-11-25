import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const data: Prisma.UserCreateInput = {
            ...createUserDto,
            password: await bcrypt.hash(createUserDto.password, 10),
        };

        const userExists = await this.findByEmail(createUserDto.email);

        if (userExists) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        const createdUser = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        });

        return {
            ...createdUser,
            password: undefined,
        };
    }

    findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    findAll() {
        return this.prisma.user.findMany({
            include: {
                serviceProvider: true,
            }
        });
    }
}
