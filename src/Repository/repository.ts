import {AxiosClient} from "../Clients/axios-client";
import HttpClient from "../Clients/client-interface";
import { UrlBuilder } from "../Factories/query-builder";
import { RequestActions } from "./repositories-enums";



export default abstract class Repository <Type, userInput> {
    protected client!: HttpClient
    protected baseUrl!: string 

    generateRequestUrl = (path: string, id?:number, urlQueryParam?: {key: string, value: any}[]) => {
        return  new UrlBuilder(this.baseUrl).get(path, id, urlQueryParam)
    }

    get(path: string, urlQueryParam?: any[]) {
        return this.client.request(RequestActions.GET, this.generateRequestUrl(path, NaN, urlQueryParam))
    }

    post(path: string, content:userInput ) {
        return this.client.request(RequestActions.CREATE, this.generateRequestUrl(path), content)
    }

    put( path: string, id: number, content: userInput) {
        return this.client.request(RequestActions.UPDATE, this.generateRequestUrl(path, id), content)
    }

    delete(path: string, id: number) {
        return this.client.request(RequestActions.DELETE, this.generateRequestUrl(path, id), null)
    }
}


  