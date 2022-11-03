import axios from "axios"
import HttpClient from './client-interface'


export class AxiosClient implements HttpClient  {

    request(method:string, url?:string, bodyContent?: any) {

        return axios({
            method,
            url,
            data: bodyContent,
        })
    }
}