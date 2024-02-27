export default class ShareButton {
    url: string

    constructor(url: string){
        this.url = url;
    }

    bind(clazz: string, socialNetwork: string){
        let link: string;

        if (socialNetwork === "twitter"){
            link = `https://twitter.com/share?url=${this.url}`

        }
        if (socialNetwork === "facebook"){
            link = `https://facebook.com/share?url=${this.url}`
            
        }
        if (socialNetwork === "linkedin"){
            link = `https://linkedin.com/share?url=${this.url}`
        }
        const elements = document.querySelectorAll(clazz);
        for (const element of elements){
            element.addEventListener("click", () => window.open(link));
        }
    }
}