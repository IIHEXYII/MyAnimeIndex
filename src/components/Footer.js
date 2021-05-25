import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineHome } from "react-icons/ai";

export default function Footer() {

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    return (
        <>
               <footer className="footer">
                <div className="footer__right">

                    <a href="https://hexyweb.com/"><AiOutlineHome className="social-icon" /></a>
                    <a href="https://twitter.com/IIHEXYII"><AiFillTwitterCircle className="social-icon" /></a>
                    <a href="https://www.linkedin.com/in/vetle-tessem-6039b1203/"><AiFillLinkedin className="social-icon" /></a>
                    <a href="https://github.com/IIHEXYII"><AiOutlineGithub className="social-icon" /></a>

                </div>

                <div className="footer__left">
                    
                    <p className="footer__links">
                        <button onClick={topFunction} className="btn__backTop"title="Go to top">Back to top</button>
                    </p>
                    <div className="footer__center-div">
                    <p className="footer__center"></p>
                    <p className="footer__center">Powered by: <a className="" href="https://app.netlify.com/">Netlify</a></p>

                    <p className="footer__center cc">MyAnimeIndex &copy; 2021</p>
                    </div>
                    
                </div>

                </footer>
            </>
    )
}
