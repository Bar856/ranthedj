import Image from "next/image";

const INSTAGRAM = "https://www.instagram.com/ran_the_dj/";
const FACEBOOK =
  "https://www.facebook.com/profile.php?id=100056682145355";

const PHONE_TEL = "tel:0542515155";
const PHONE_DISPLAY = "054-2515155";

/** Primary booking — Instagram DM; phone in nav/footer for direct calls. */
const BOOKING_HREF = INSTAGRAM;

function IconMusic(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function IconSpark(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d="m12 3-1.9 5.8H4l4.9 3.6-1.9 5.8 4.9-3.6 4.9 3.6-1.9-5.8L20 8.8h-6.1L12 3Z" />
    </svg>
  );
}

function IconHeart(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d="M19 14c1.5-1.3 2.5-3.2 2.5-5.3A5.4 5.4 0 0 0 16.2 3c-1.6 0-3 .8-3.8 2.1-.8-1.3-2.2-2.1-3.8-2.1A5.4 5.4 0 0 0 2.5 8.7c0 2.1 1 4 2.5 5.3l7.5 6.5 7.5-6.5Z" />
    </svg>
  );
}

function IconPhone(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only cursor-pointer focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-pink focus:px-4 focus:py-2 focus:text-brand-black">
        דלג לתוכן
      </a>

      <header className="fixed top-4 right-4 left-4 z-50 mx-auto max-w-6xl rounded-2xl border border-white/10 bg-brand-black/85 px-4 py-3 shadow-lg shadow-brand-pink/5 backdrop-blur-md md:right-6 md:left-6 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#"
            className="flex cursor-pointer items-center gap-3 transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
            <Image
              src="/logo.png"
              alt="Ran the DJ — לוגו"
              width={52}
              height={52}
              className="h-11 w-11 rounded-lg object-contain md:h-12 md:w-12"
              priority
            />
            <div className="hidden text-start sm:block">
              <p className="font-display text-lg tracking-wide text-brand-pink md:text-xl">
                RAN THE DJ
              </p>
              <p className="text-xs text-white/60">רן וקנין · ישראל</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="ניווט ראשי">
            <NavLink href="#events">סוגי אירועים</NavLink>
            <NavLink href="#vibe">הווייב</NavLink>
            <NavLink href={PHONE_TEL}>צור קשר</NavLink>
          </nav>

          <a
            href={BOOKING_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 cursor-pointer rounded-xl bg-brand-pink px-4 py-2.5 text-sm font-semibold text-brand-black shadow-md shadow-brand-pink/25 transition-colors duration-200 hover:bg-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-5">
            הזמינו אותי
          </a>
        </div>
      </header>

      <main id="main" className="pt-28">
        <section
          className="relative overflow-hidden border-b border-white/10 bg-hero-mesh px-4 pt-8 pb-20 md:pt-12 md:pb-28"
          aria-labelledby="hero-heading">
          <div
            className="pointer-events-none absolute top-32 -left-24 h-64 w-64 rounded-full bg-brand-pink/15 blur-3xl motion-safe:[animation:float_7s_ease-in-out_infinite]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-brand-pink/10 blur-3xl motion-safe:[animation:float_9s_ease-in-out_infinite_1s]"
            aria-hidden
          />

          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-start">
            <div className="flex shrink-0 justify-center motion-safe:[animation:float_7s_ease-in-out_infinite]">
              <div className="relative">
                <div
                  className="absolute inset-0 -m-3 rounded-3xl bg-brand-pink/20 blur-xl motion-reduce:hidden"
                  aria-hidden
                />
                <Image
                  src="/logo.png"
                  alt=""
                  width={280}
                  height={280}
                  className="relative h-auto w-[min(72vw,280px)] max-w-[280px] drop-shadow-2xl md:w-[320px] md:max-w-[320px]"
                  priority
                />
              </div>
            </div>

            <div className="flex max-w-xl flex-1 flex-col items-center gap-6 lg:items-start">
              <p className="font-display text-sm tracking-[0.2em] text-brand-pink uppercase md:text-base">
                Israel · parties & love
              </p>
              <h1
                id="hero-heading"
                className="text-4xl leading-tight font-bold text-white md:text-5xl lg:text-[3.25rem]">
                מחפשים די ג׳יי שישים לכם{" "}
                <span className="text-brand-pink">חיוך על הפנים</span> ועל הרחבה?
              </h1>
              <p className="text-lg text-white/75 md:text-xl">
                רן הדי ג׳יי — מוזיקה, אנרגיה וחיבור לקהל. חתונות, בר/בת מצווה,
                מסיבות ואירועי חברה בכל הארץ.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a
                  href={BOOKING_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl bg-brand-pink px-8 py-3.5 text-base font-bold text-brand-black shadow-lg shadow-brand-pink/30 transition-colors duration-200 hover:bg-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  בואו נתאם תאריך
                </a>
                <a
                  href="#events"
                  className="cursor-pointer rounded-xl border-2 border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:border-brand-pink/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
                  מה אני מנגן?
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="events"
          className="mx-auto max-w-6xl px-4 py-20 md:py-24"
          aria-labelledby="events-heading">
          <h2
            id="events-heading"
            className="mb-4 text-center font-display text-3xl text-brand-pink md:text-4xl">
            כל אירוע מגיע עם הפלייליסט שלו
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-white/70">
            בלוקים גדולים, צבעים חזקים, ושירים שמכירים — בלי להתבייש לרקוד.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "חתונות וחופות",
                body: "רגעים מרגשים, רחבת ריקודים מלאה, ושילוב בין קלאסיקות לטרנדים.",
                Icon: IconHeart,
                bg: "bg-brand-surface border-white/10",
              },
              {
                title: "מסיבות וברים",
                body: "באס שמרגיש בבטן, היפ-הופ, אלקטרו ומה שהקהל מבקש.",
                Icon: IconMusic,
                bg: "border-brand-pink-hover/40 bg-brand-pink text-brand-black",
              },
              {
                title: "אירועי חברה",
                body: "טון מקצועי עם קלילות — כדי שכולם ירגישו בנוח להצטרף.",
                Icon: IconSpark,
                bg: "bg-brand-surface border-white/10",
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`flex flex-col gap-4 rounded-2xl border p-8 transition-shadow duration-200 hover:shadow-lg hover:shadow-brand-pink/10 ${card.bg}`}>
                <card.Icon className="h-10 w-10 shrink-0 opacity-90" />
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p
                  className={
                    card.bg.includes("brand-pink")
                      ? "text-brand-black/85"
                      : "text-white/75"
                  }>
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="vibe"
          className="border-y border-brand-pink/30 bg-brand-pink py-16 text-brand-black md:py-20"
          aria-labelledby="vibe-heading">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center md:flex-row md:justify-between md:text-start">
            <h2
              id="vibe-heading"
              className="font-display max-w-lg text-3xl leading-tight font-normal md:text-4xl">
              PLAYFUL. LOUD. FRIENDLY.
            </h2>
            <p className="max-w-md text-lg font-medium text-brand-black/85">
              פה זה לא &quot;רק מוזיקה ברקע&quot; — פה חוגגים. אם זה נשמע כמו מה
              שאתם מחפשים, אני כבר עם האוזניות בכיוון שלכם.
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-20 md:py-28"
          aria-labelledby="cta-heading">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-surface p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute inset-0 bg-hero-mesh opacity-80"
              aria-hidden
            />
            <div className="relative">
              <h2
                id="cta-heading"
                className="mb-4 text-3xl font-bold md:text-4xl">
                מוכנים לשמוע את הצליל של האירוע שלכם?
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-lg text-white/70">
                התקשרו ל־{PHONE_DISPLAY}, או שלחו הודעה באינסטגרם — נחזור עם
                זמינות, סגנון וכל מה שצריך כדי להתחיל לרקוד.
              </p>
              <div className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
                <a
                  href={PHONE_TEL}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-colors duration-200 hover:border-brand-pink hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
                  <IconPhone className="h-5 w-5" />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={BOOKING_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-pink px-10 py-4 text-lg font-bold text-brand-black transition-colors duration-200 hover:bg-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  <span>פתחו שיחה באינסטגרם</span>
                  <svg
                    className="h-5 w-5 rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="border-t border-white/10 bg-brand-black px-4 py-14">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
            <div className="text-center md:text-start">
              <p className="font-display text-xl text-brand-pink">RAN THE DJ</p>
              <p className="mt-2 text-white/60">
                רן וקנין · די ג׳יי לאירועים בישראל
              </p>
              <a
                href={PHONE_TEL}
                className="mt-4 inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-brand-pink transition-colors duration-200 hover:text-brand-pink-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <IconPhone className="h-5 w-5 shrink-0" />
                <span dir="ltr">{PHONE_DISPLAY}</span>
              </a>
              <p className="mt-1 text-sm text-white/45">צור קשר בטלפון</p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <p className="text-sm text-white/50">עקבו גם ברשתות:</p>
              <div className="flex items-center gap-5">
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl p-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
                  <Image
                    src="/facebook.png"
                    alt="פייסבוק"
                    width={44}
                    height={44}
                  />
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-xl p-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink">
                  <Image
                    src="/instagram.png"
                    alt="אינסטגרם"
                    width={44}
                    height={44}
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-xs text-white/35">
            © {new Date().getFullYear()} Ran the DJ. כל הזכויות שמורות.
          </p>
        </footer>
      </main>
    </>
  );
}
