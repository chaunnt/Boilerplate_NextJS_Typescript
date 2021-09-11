import { post } from './_index'

const ApiModuleName = 'RealEstateRecord';
export class RealEstateAPI {
  static getPostList(filter: any, skip: number, limit: number) {
    const path = `${ApiModuleName}/postList`
    const body = {
      filter: filter,
      skip: skip,
      limit: limit
    }
    return post(path, body)
  }
}
