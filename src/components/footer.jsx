import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <span>В случае возникновения любых вопросов свяжитесь с нами</span>
      <div className="contact">
        <span>Константин</span><br/>
        <a href="tel:89215702271">8(921)570-22-71</a><br/>
        <a href="https://t.me/cspckt">написать в Telegram</a>
    </div>
  <div className="contact">
    <span>Наталия</span><br/>
    <a href="tel:89602602371">8(960)260-23-71</a>
    </div>
</div>
)
  ;
};

export default Footer;