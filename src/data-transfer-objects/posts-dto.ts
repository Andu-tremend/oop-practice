export interface userDTO {
  firstName: string;
  lastName: string;
  isOnline: boolean; 
  id: number;
  otherData?: {
    category?: string | undefined;
    interests?: (string | undefined) [] 
  }
}

