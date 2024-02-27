import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonfacebook extends AbstractShareButton {

    //Chamo o super pois aqui ele esta "preenchendo" o construtor da minha classe abstrata.
    constructor(clazz: string, url: string){
        super(clazz, url)
    }

    createLink(): string {
       return `https://facebook.com/share?url=${this.url}`
    }
}