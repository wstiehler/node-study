import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {
    eventHandler: EventHandler
    clazz: string
    url: string

    constructor(clazz: string, url: string){
        this.clazz = clazz
        this.url = url;
        this.eventHandler = new EventHandler()
    }

    //Colocando o abstratict, eu obrigo as instancias de AbstractShareButton a criarem o link
    abstract createLink() : string

    bind(){
        const link = this.createLink();        
        this.eventHandler.addEventListenerToClass(this.clazz, "click", () => window.open(link))
    }
}