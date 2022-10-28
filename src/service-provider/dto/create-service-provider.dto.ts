import { IsOptional, IsString, MaxLength, maxLength } from "class-validator";
import { ServiceProvider } from "../entities/service-provider.entity";

export class CreateServiceProviderDto extends ServiceProvider {
    @IsString()
    cpf: string

    @IsString()
    name: string

    // ------ Address --------
    @IsString()
    @MaxLength(50)
    country: string

    @IsString()
    @MaxLength(16)
    zipCode: string

    @IsString()
    @MaxLength(200)
    street: string

    @IsString()
    @MaxLength(50)
    addressNumber: string

    @IsString()
    @MaxLength(200)
    district: string

    @IsString()
    @IsOptional()
    @MaxLength(200)
    addressComplement?: string

    @IsString()
    @MaxLength(100)
    city: string

}