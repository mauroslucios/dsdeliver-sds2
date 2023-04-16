import './style.css';
import { ReactComponent as InstagranIcon } from './img/instagram.svg'; 
import { ReactComponent as YoutubeIcon } from './img/youtube.svg'; 
import { ReactComponent as LinkedinIcon } from './img/linkedin.svg'; 

function Footer(){
    return(
        <footer className="main-footer">
            <h3>App desenvolvido durante a 2º edição do evento Semana DevSuperior 2</h3>
            <div className="footer-icons">
                    <a href="https://www.instagran.com/luciospsilva" target="_new"><InstagranIcon/></a>
                    <a href="https:www.youtube.com/channel/UCFUC1CjoLr7PTFVMRAbLkiw" target="_new"><YoutubeIcon/></a>
                    <a href="https://www.linkedin.com/in/mauro-l%C3%BAcio-pereira/" target="_new"><LinkedinIcon/></a>
            </div>
        </footer>
    )
}

export default Footer;
