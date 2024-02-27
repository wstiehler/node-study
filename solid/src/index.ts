import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonLinkdIn from './ShareButtonLinkedIn';
import ShareButtonFacebook from "./ShareButtonFacebook";

const link: string = "http://evoluinfo.com.br"

const twitter = new ShareButtonTwitter(".btn-twitter", link)
twitter.bind()
const facebook = new ShareButtonFacebook(".btn-facebook", link)
facebook.bind()
const linkedin = new ShareButtonLinkdIn(".btn-linkedin", link)
linkedin.bind()