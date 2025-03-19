import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { DataSet } from '../models/dataset.model';
import { Address } from '../models/address.model';
import { ByNameDataSet } from '../models/byname-dataset.model';
import { PersonIdentification } from '../models/person-identification.model';
import { QueryByName_DataSet } from '../models/query-by-name-dataset.model';

export interface SOAPDemoApi {
    addInteger(arg1: number, arg2: number): Observable<number>;
    divideInteger(arg1: number, arg2: number): Observable<number>;
    findPerson(id: string): Observable<Person>;
    getByName(name: string): Observable<DataSet>;
    getDataSetByName(name: string): Observable<ByNameDataSet>;
    getListByName(name: string): Observable<PersonIdentification[]>;
    lookupCity(zip: string): Observable<Address>;
    mission(): Observable<string>;
    queryByName(name: string): Observable<QueryByName_DataSet>;
}