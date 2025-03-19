import { POST, BasePath, Body, BaseService, Response } from "ts-retrofit";
import { Address, Person, DataSet, ByNameDataSet, PersonIdentification, QueryByName_DataSet } from "../models";

@BasePath("/SOAP.Demo")
export class SoapDemoService extends BaseService {
    @POST("/AddInteger")
    async addInteger(@Body args: { Arg1: number, Arg2: number }): Promise<Response<number>> {
        return {} as Response<number>;
    }

    @POST("/DivideInteger")
    async divideInteger(@Body args: { Arg1: number, Arg2: number }): Promise<Response<number>> {
        return {} as Response<number>;
    }

    @POST("/FindPerson")
    async findPerson(@Body args: { id: string }): Promise<Response<Person>> {
        return {} as Response<Person>;
    }

    @POST("/GetByName")
    async getByName(@Body args: { name: string }): Promise<Response<DataSet>> {
        return {} as Response<DataSet>;
    }

    @POST("/GetDataSetByName")
    async getDataSetByName(@Body args: { name: string }): Promise<Response<ByNameDataSet>> {
        return {} as Response<ByNameDataSet>;
    }

    @POST("/GetListByName")
    async getListByName(@Body args: { name: string }): Promise<Response<Array<PersonIdentification>>> {
        return {} as Response<Array<PersonIdentification>>;
    }

    @POST("/LookupCity")
    async lookupCity(@Body args: { zip: string }): Promise<Response<Address>> {
        return {} as Response<Address>;
    }

    @POST("/Mission")
    async mission(): Promise<Response<string>> {
        return {} as Response<string>;
    }

    @POST("/QueryByName")
    async queryByName(@Body args: { name: string }): Promise<Response<QueryByName_DataSet>> {
        return {} as Response<QueryByName_DataSet>;
    }
}