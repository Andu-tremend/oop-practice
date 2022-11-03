import { ApiService } from "./api-service";
import { URL_PATH } from "../Repository/repositories-enums";
import { CustomRepo } from "../Repository/custom-repo";
import { SORTING_TYPES } from "./services-enums";
import { userDTO } from "../data-transfer-objects/posts-dto";
import { User } from "../models/user.model";


export class UserService extends ApiService {

  private sortHelper(objType: any) { // for now any
      return (a: string, b : string) => {
        if (a[objType] > b[objType]) {
          return 1
        } else if (a[objType] < b[objType]){
          return -1
        }
        return 0
      }
  }

  // De sortat dinamic
  sortItems(responseData: any, sortVal?: string | undefined) {
      switch(sortVal) {
          case SORTING_TYPES.ID: 
            return responseData.sort()
            
          case SORTING_TYPES.REVERSE_ID:
            return responseData.sort().reverse()

          default: 
            return responseData.sort( 
              this.sortHelper(sortVal)
              )
      }
    
  }

  getSortedUsers(customRepo: CustomRepo, sortBy?: string) {
    return customRepo.get(URL_PATH.USERS).then( (res:any) => {
      return this.sortItems(res.data, sortBy )
    })
  }

  getFilteredUsers(customRepo:CustomRepo, filterValue: string) {
    return customRepo.get(URL_PATH.USERS)
    .then( (response: any) => {
      return this.filterItems(response.data, filterValue)
    })
  }


  // Send to DTO into post from REPO

  toDtoFormat (users: User[]) {
    return users?.map( (user: User) => {
      return user
    })
   
  }

  // fromDtoFormat (users: any[]) {
  //   return users?.map ( (user: User) => {
  //     return user
  //   })
  // }

  
}

