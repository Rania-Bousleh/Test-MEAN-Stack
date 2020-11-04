export class Member{
    id: number;
    name: string;
    subtitle: string;
    role: string;
    photo: string
    constructor(name:string,subtitle:string,role:string,photo:string){
        this.name=name;
        this.subtitle=subtitle;
        this.role=role;
        this.photo=photo;
    }
}