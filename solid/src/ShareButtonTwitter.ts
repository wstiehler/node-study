import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonTwitter extends AbstractShareButton {

    //Chamo o super pois aqui ele esta "preenchendo" o construtor da minha classe abstrata.
    constructor(clazz: string, url: string){
        super(clazz, url)
    }

    createLink(): string {
       return `https://twitter.com/share?url=${this.url}`
    }
}