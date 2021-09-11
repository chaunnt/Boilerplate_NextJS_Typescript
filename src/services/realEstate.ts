
import { RealEstateAPI } from "../api/realEstate";

export default class RealEstateService {
  static getPostListByArea(filter = {}, page = 1) { 
    const skip = 1 - page;
    return RealEstateAPI.getPostList(filter, skip, skip * 20); 
  }
}
