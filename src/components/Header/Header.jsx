import "./Header.css";

const navigation = [
  { name: "О проекте", href: "#about" },
  { name: "Как проходит", href: "#format" },
  { name: "Волонтёрам", href: "#volunteer" },
];

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a
          className="header-logo"
          href="#home"
          aria-label="Muse Renewal, наверх"
        >
          <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" />
          <span>Muse Renewal</span>
        </a>

        <nav className="header-navigation" aria-label="Навигация по странице">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <a
          className="header-button"
          href="https://t.me/anketsmuserenewal_bot"
          target="_blank"
          rel="noreferrer"
        >
          Присоединиться
        </a>
      </div>
    </header>
  );
}

export default Header;
