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

    //Colocando o abstract, eu obrigo as instancias de AbstractShareButton a criarem o link
    abstract createLink() : string

    // Pattern: Templat Method, o fato de eu montar um algoritimo na super classe, e delegar para a sub classe, que seria atraves do metodo createLink
    bind(){
        const link = this.createLink();        
        this.eventHandler.addEventListenerToClass(this.clazz, "click", () => window.open(link))
    }
}