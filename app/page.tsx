const stats = [
  ["185", "см / зріст"],
  ["0", "проклятої енергії"],
  ["31.12", "день народження"],
];

const abilities = [
  {
    id: "01",
    title: "Небесне обмеження",
    text: "Повна відсутність проклятої енергії обміняна на надлюдську силу, швидкість і витривалість.",
  },
  {
    id: "02",
    title: "Загострені чуття",
    text: "Тоджі відчуває проклять без техніки та миттєво читає простір, дистанцію й наміри суперника.",
  },
  {
    id: "03",
    title: "Невидимий для бар’єрів",
    text: "Нульова проклята енергія робить його аномалією для більшості систем виявлення чаклунів.",
  },
];

const arsenal = [
  ["Небесний спис, що інвертує", "Скасовує активні прокляті техніки при контакті."],
  ["Ланцюг тисячі миль", "Подовжується, доки один із його кінців залишається невидимим."],
  ["Грайлива хмара", "Трисекційний посох, сила якого залежить від фізичної могутності власника."],
  ["Дух-сховище", "Проклятий дух, у якому Тоджі непомітно переносить цілий арсенал."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На початок сторінки">
          <span className="brand-mark">伏黒</span>
          <span>TOJI / ARCHIVE</span>
        </a>
        <nav aria-label="Головна навігація">
          <a href="#profile">Досьє</a>
          <a href="#abilities">Здібності</a>
          <a href="#arsenal">Арсенал</a>
        </nav>
        <span className="issue">ISSUE 01</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Той, хто зламав правила світу джюджюцу</p>
          <h1>
            ТОДЖІ
            <span>ФУШІҐУРО</span>
          </h1>
          <p className="hero-lead">
            «Вбивця чаклунів». Людина без жодної краплі проклятої енергії —
            і водночас загроза для найсильніших.
          </p>
          <a className="cta" href="#profile">
            Відкрити досьє <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="hero-visual" role="img" aria-label="Тоджі Фушіґуро з аніме Магічна битва">
          <div className="hero-stamp">術師殺し</div>
          <p className="hero-caption">SORCERER KILLER<br />ZENIN OUTCAST</p>
          <span className="cross cross-one" />
          <span className="cross cross-two" />
        </div>

        <div className="vertical-title" aria-hidden="true">呪術廻戦 · 伏黒甚爾</div>
      </section>

      <section className="marquee" aria-label="Ключові характеристики">
        <div>
          <span>НЕБЕСНЕ ОБМЕЖЕННЯ</span><b>✦</b>
          <span>НУЛЬ ПРОКЛЯТОЇ ЕНЕРГІЇ</span><b>✦</b>
          <span>АБСОЛЮТНЕ ТІЛО</span><b>✦</b>
          <span>НЕБЕСНЕ ОБМЕЖЕННЯ</span><b>✦</b>
        </div>
      </section>

      <section className="profile section" id="profile">
        <div className="section-kicker">01 / ДОСЬЄ</div>
        <div className="profile-grid">
          <div>
            <h2>НАРОДЖЕНИЙ<br />БЕЗ <em>МАГІЇ.</em></h2>
          </div>
          <div className="profile-copy">
            <p className="large-copy">
              Колишній член клану Зен’ін, який відмовився грати за правилами
              спадкових технік і статусу.
            </p>
            <p>
              Через Небесне обмеження Тоджі народився без проклятої енергії.
              Клан вважав це слабкістю. Він перетворив її на найнебезпечнішу
              перевагу — тіло, доведене до абсолюту, майстерність зброї та
              холодний розрахунок мисливця.
            </p>
          </div>
        </div>
        <div className="stats">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
          <div className="stat stat-word">
            <strong>ЗЕН’ІН</strong>
            <span>колишній клан</span>
          </div>
        </div>
      </section>

      <section className="abilities section dark-section" id="abilities">
        <div className="section-kicker light">02 / ЗДІБНОСТІ</div>
        <div className="abilities-head">
          <h2>НУЛЬ ЕНЕРГІЇ.<br /><em>МАКСИМУМ</em> СИЛИ.</h2>
          <p>Його тіло — це техніка.<br />Його присутність — сліпа зона.</p>
        </div>
        <div className="ability-list">
          {abilities.map((ability) => (
            <article key={ability.id}>
              <span className="ability-id">{ability.id}</span>
              <h3>{ability.title}</h3>
              <p>{ability.text}</p>
              <span className="ability-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-image" />
        <blockquote>
          <span className="quote-mark">“</span>
          Я ВЖЕ ПЕРЕСТАВ<br />
          <em>ПИШАТИСЯ СОБОЮ.</em>
          <footer>— ТОДЖІ ФУШІҐУРО</footer>
        </blockquote>
      </section>

      <section className="arsenal section" id="arsenal">
        <div className="section-kicker">03 / АРСЕНАЛ</div>
        <div className="arsenal-head">
          <h2>ІНСТРУМЕНТИ<br /><em>ПРОТИ МАГІЇ</em></h2>
          <p>
            Тоджі не створює проклятих технік — він обирає правильний інструмент,
            вивчає ціль і змушує саму систему працювати проти неї.
          </p>
        </div>
        <div className="weapon-list">
          {arsenal.map(([name, description], index) => (
            <article key={name}>
              <span>0{index + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline section">
        <div className="section-kicker">04 / СЛІД У СЮЖЕТІ</div>
        <div className="timeline-layout">
          <h2>ДВІ ПОЯВИ.<br /><em>ОДНА ЛЕГЕНДА.</em></h2>
          <div className="timeline-cards">
            <article>
              <span>2006</span>
              <h3>Арка «Прихований інвентар»</h3>
              <p>Контракт, який назавжди змінив Ґоджьо, Ґето та весь баланс світу чаклунів.</p>
            </article>
            <article>
              <span>2018</span>
              <h3>Інцидент у Шібуї</h3>
              <p>Повернення чистого бойового інстинкту — без волі, наказів і страху.</p>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="footer-kanji">伏黒甚爾</p>
          <p>Фан-сайт про персонажа всесвіту «Магічна битва».</p>
        </div>
        <a href="https://jujutsukaisen.jp/" target="_blank" rel="noreferrer">
          Офіційний сайт аніме ↗
        </a>
        <p>© Ґеґе Акутамі / Shueisha / JJK Project</p>
      </footer>
    </main>
  );
}
