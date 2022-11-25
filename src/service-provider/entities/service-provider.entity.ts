export class ServiceProvider {
    userId: number;
    cpf: string;
    serviceName: string;
    serviceDescription?: string;
    // ------ Address --------
    zipCode: string;
    state: string;
    street: string;
    addressNumber: string;
    district: string;
    addressComplement?: string;
    city: string;
}
