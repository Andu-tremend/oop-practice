import { userDTO } from "../data-transfer-objects/posts-dto";

enum Status {
  ONLINE = "online",
  OFFLINE = "offline"
}

const statusLabels = {
  [Status.ONLINE]: "Online",
  [Status.OFFLINE] : "Offline"
}

export class User {
  fullName: string;
  status: string; 
  memberId: number;
  category?: string | undefined;
  interests?: (string | undefined) [] 


  constructor(user: userDTO) {
    this.fullName = this.buildFullName(user.firstName, user.lastName)
    this.status = user.isOnline ? statusLabels.offline : statusLabels.online
    this.memberId = user.id
    this.category = user.otherData?.category
    this.interests = user.otherData?.interests
  }
 

  private buildFullName (firstName: string, lastName?: string) {
    return firstName + " " + lastName
  }

  private getInterests (interestsArray?: {type: string, interested: boolean}[]) {
    
    const interests =  interestsArray?.map( ({type, interested}) => {
      if (interested) {
        return type
      }
    })
    return interests?.filter(val => val !== undefined)
  }


  // toDto() {
  //   const dto: PostsDTO = {
  //     firstName: "",
  //     lastName: "",
  //     isOnline: false,
  //     id: NaN,
      
  //   }
  //   return dto
  // }

  fromDto(dto: userDTO) {
    
  }

}

