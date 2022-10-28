import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';

@Injectable()
export class ServiceProviderService {

    constructor(private readonly prisma: PrismaService) { }

    async create(createServiceProviderDto: CreateServiceProviderDto) {
        const data: Prisma.ServiceProviderCreateInput = {
            ...createServiceProviderDto,
        };

        const serviceProviderExist = await this.findByCpf(data.cpf);

        if (serviceProviderExist) {
            throw new HttpException('Service provider already exists', HttpStatus.BAD_REQUEST);
        }

        const createdServiceProvider = await this.prisma.serviceProvider.create({
            data
        });

        return {
            id: createdServiceProvider.id,
            name: createdServiceProvider.name,
        };
    }

    findAll() {
        return this.prisma.serviceProvider.findMany();
    }

    findOne(id: number) {
        return this.prisma.serviceProvider.findUnique({ where: { id } });
    }

    async update(id: number, updateServiceProviderDto: UpdateServiceProviderDto) {
        const serviceProviderExist = await this.findOne(id);
        if (!serviceProviderExist) {
            throw new HttpException('Service provider not found', HttpStatus.NOT_FOUND);
        }
        // partial update service provider
        return this.prisma.serviceProvider.update({
            where: { id },
            data: {
                ...updateServiceProviderDto,
            },
        });
    }

    remove(id: number) {
        return this.prisma.serviceProvider.delete({ where: { id } });
    }

    findByCpf(cpf: string) {
        return this.prisma.serviceProvider.findUnique({ where: { cpf } });
    }
}
