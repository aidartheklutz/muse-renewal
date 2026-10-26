import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="footer-brand">
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" />
          <span>Muse Renewal</span>
        </a>
        <a
          href="https://t.me/anketsmuserenewal_bot"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-telegram" aria-hidden="true" />
          Telegram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
