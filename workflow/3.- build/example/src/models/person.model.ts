import { Address } from './address.model';

export interface Person {
    Name: string;
    SSN: string;
    DOB: Date;
    Home: Address;
    Office: Address;
    Spouse: Person;
    FavoriteColors: string[];
    Age: number;
}