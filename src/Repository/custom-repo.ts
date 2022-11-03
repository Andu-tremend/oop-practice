import Repository from "./repository";
import HttpClient from "../Clients/client-interface";
import { User } from "../models/user.model";
import { userDTO } from "../data-transfer-objects/posts-dto";


export class CustomRepo extends Repository<userDTO, {}> {
  constructor (url: string, client:HttpClient ) {
    super();
    this.baseUrl = url
    this.client = client
  }
  
}