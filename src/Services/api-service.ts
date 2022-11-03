
import { CustomRepo } from "../Repository/custom-repo"
import HttpClient from "../Clients/client-interface";
import { userDTO } from "../data-transfer-objects/posts-dto";
import { URL_PATH } from "../Repository/repositories-enums";
export class ApiService   {

  usersRepo: CustomRepo;
  client: HttpClient

  constructor(customRepo: CustomRepo, client: HttpClient) {
    this.client = client
    this.usersRepo = customRepo
  }

  private objToArray(responseData: any) {
    return Object.keys(responseData).map(
      (key) => {
        return JSON.stringify(responseData[key])
      }
    )
  }

  private arrayToJSON(array: any) {
    const sortedArray = JSON.parse(JSON.stringify(array))
    const toJson = sortedArray.map( (item: any) => {return JSON.parse(item)})
    return toJson
  }

  // Transform first the array of objects in arr of strings to use includes() as a search functionality-ish.
  // Then transform the arr of strings back to json to return the filtered objects
  
  protected filterItems(responseData: any, filterValue: string) {
    const array = this.objToArray(responseData)
    const filteredArr =  array.filter( (filteredElem:any) => filteredElem.includes(filterValue) )
    const filteredUsers = this.arrayToJSON(filteredArr)
    return filteredUsers
  }


}