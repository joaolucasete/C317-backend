import { IsNumber, IsOptional, IsString, MaxLength, maxLength } from "class-validator";
import { ServiceProvider } from "../entities/service-provider.entity";

export class CreateServiceProviderDto extends ServiceProvider {

    @IsNumber()
    userId: number;

    @IsString()
    cpf: string;

    @IsString()
    serviceName: string;

    @IsOptional()
    @IsString()
    serviceDescription?: string;

    // ------ Address --------

    @IsString()
    @MaxLength(16)
    zipCode: string;

    @IsString()
    @MaxLength(200)
    street: string;

    @IsString()
    @MaxLength(200)
    state: string;

    @IsString()
    @MaxLength(50)
    addressNumber: string;

    @IsString()
    @MaxLength(200)
    district: string;

    @IsString()
    @IsOptional()
    @MaxLength(200)
    addressComplement?: string;

    @IsString()
    @MaxLength(100)
    city: string;

}