export class Product {
    id: number;
    name: string;
    description:string;
    price:number;
    imageUrl:string;


    constructor(id, name, description='', price=0, imageUrl='https://5.imimg.com/data5/LE/SW/MY-6975226/5x5-rubiks-cube-stickerless-high-speed-extra-smooth-2c-bright-500x500.jpeg'){
        this.id = id
        this.name = name
        this.description =description
        this.price = price
        this.imageUrl = imageUrl


    }
}
