export default interface HttpClient {
  request(method: any, url: any, config?: any ): any
}