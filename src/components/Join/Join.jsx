import "./Join.css";

function Join() {
  return (
    <section className="section join-section" id="join">
      <div className="container join-content">
        <span className="eyebrow">Вступить к нам</span>
        <h2>Хотите попасть в следующий поток?</h2>
        <p>
          Заполните короткую анкету в Telegram-боте. После этого вам напишет
          один из наших волонтёров, расскажет о наборе и ответит на вопросы.
        </p>
        <a
          className="button button-primary"
          href="https://t.me/anketsmuserenewal_bot"
          target="_blank"
          rel="noreferrer"
        >
          @anketsmuserenewal_bot
        </a>
        <small>Участие полностью бесплатное</small>
      </div>
    </section>
  );
}

export default Join;
