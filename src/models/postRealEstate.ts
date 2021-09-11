import { MPost } from "./post";

export class MPostRealEstate extends MPost {
  valueSalePrice: number = 0.0;
 
  constructor(parameters : any) {
    super(parameters);
  }
}
