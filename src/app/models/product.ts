
export interface Product {
  productid: BigInteger;
  name: String;
  productidentifier: String;
}

export class Product{
  constructor(public productid:BigInteger = new Uint8Array(2), public name:String = '', public productidentifier:String = '' ){ 
  }
}

