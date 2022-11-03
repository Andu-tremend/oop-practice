
import { AxiosClient } from "./Clients/axios-client"
import { CustomRepo } from "./Repository/custom-repo";
import { ApiService } from "./Services/api-service";
import { userDTO } from "./data-transfer-objects/posts-dto";
import { UserService } from "./Services/user-service";
import { SORTING_TYPES } from "./Services/services-enums";
import { User } from "./models/user.model";
import {URL_PATH} from "./Repository/repositories-enums";

export const fakeInput = {
    firstName: "Andrew",
    lastName: "Garfield",
    isOnline: true,
    otherData: {
      category: "basic user",
      interests: [
        {
          somethig: 2,
          somethingValidated: true
        },
        {
          somethingElse: "a string ",
          somethingValidated: false
        }
      ]
    }
}

const queryParams = [ 
  {}
]


const client = new AxiosClient()
const usersRepo = new CustomRepo("http://localhost:3000", client)
const userService = new UserService(usersRepo, client)




userService.getSortedUsers(usersRepo, "id").then( (res: any) => {
  const model = new User(res)
  const formattedUsers = userService.toDtoFormat(res)
  console.log("Formatat to dto", formattedUsers)
})



// Test post operation from REPO
// console.log(usersRepo.post(URL_PATH.USERS, fakeInput))

