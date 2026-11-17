// Facts of the clinic: only from veon/client.json (ids in comments). Nothing here is invented.
export const FUTURE = "Розділ у розробці";

export const phone = { label: "+38 (099) 001-61-06", href: "tel:+380990016106" }; // company.contacts.phones[0]

export type Channel = "viber" | "telegram" | "whatsapp";
export const messengers: { id: Channel; label: string; href: string }[] = [
  { id: "viber", label: "Viber", href: "viber://chat?number=%2B380990016106" },       // contacts.messengers[0]
  { id: "telegram", label: "Telegram", href: "https://t.me/+380990016106" },          // contacts.messengers[1]
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/380938466674" },          // contacts.messengers[2]
];

// socials with status confirmed
export const socials = {
  instagramIf: { label: "@yeremchuk_dental_if", short: "Instagram", href: "https://www.instagram.com/yeremchuk_dental_if/" },
  instagramCv: { label: "@yeremchukdental", short: "Instagram", href: "https://www.instagram.com/yeremchukdental/" },
  facebook: { label: "Facebook", href: "https://www.facebook.com/royal.dental.if/" },
  youtube: { label: "YouTube", href: "https://www.youtube.com/@yeremchuk_dental" },
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const branches = [
  {
    id: "branch-if",
    city: "Івано-Франківськ",
    address: "вул. Військова, 1",
    hours: "Пн–Сб 8:00–20:00", // contacts.addresses[0]
    hoursKnown: true,
    map: maps("Yeremchuk Dental, вулиця Військова 1, Івано-Франківськ"),
    instagram: socials.instagramIf,
  },
  {
    id: "branch-cv",
    city: "Чернівці",
    address: "вул. Руська, 237",
    hours: "Графік уточнюйте за телефоном", // B-I002: графік не підтверджено
    hoursKnown: false,
    map: maps("Yeremchuk Dental, вулиця Руська 237, Чернівці"),
    instagram: socials.instagramCv,
  },
];

// B-005 (прайс), business_lines, products_services
export type Row = { name: string; detail?: string; price?: string };
export const restore: Row[] = [
  { name: "Протезування", detail: "коронки, бюгельні й нейлонові протези, знімні протези на імплантах", price: "цирконієва коронка від 16 500 грн" },
  { name: "Видалення та хірургія", detail: "зуби мудрості, ретиновані зуби, кісти, зокрема лазером і під наркозом" },
];
export const groups: { title: string; rows: Row[] }[] = [
  {
    title: "Вирівняти й естетика",
    rows: [
      { name: "Ортодонтія", detail: "брекети, Інвізілайн, елайнери, прикус у дітей і дорослих", price: "брекети від 28 000 грн" },
      { name: "Вініри", detail: "керамічні, композитні, люмініри", price: "композитний вінір 5 500 грн" },
      { name: "Відбілювання", detail: "Philips Zoom", price: "Zoom 4: 7 000 грн" },
    ],
  },
  {
    title: "Лікувати й берегти",
    rows: [
      { name: "Лікування зубів і каналів", detail: "зокрема під мікроскопом та уві сні" },
      { name: "Лікування ясен", detail: "пародонтит, пародонтоз, гінгівіт" },
      { name: "Професійна гігієна", detail: "ультразвукове та комплексне чищення", price: "3 000 грн" },
    ],
  },
  {
    title: "Діти",
    rows: [{ name: "Дитяча стоматологія", detail: "брекети для дітей, фторування, лікування під наркозом" }],
  },
];
export const consultations = [
  { name: "Експрес-консультація", price: "600 грн" },
  { name: "Онлайн-консультація", price: "750 грн" },
  { name: "Консультація головного лікаря", price: "1 250 грн" },
];

// B-007
export const founder = { name: "Володимир Єремчук", role: "Головний лікар, хірург-імплантолог", photo: "yeremchuk" };
export const doctors = [
  { name: "Альона Шеремета", role: "Хірург-імплантолог", photo: "sheremeta" },
  { name: "Діана Микицей", role: "Ортодонт", photo: "mykytsei" },
  { name: "Павло Костишин", role: "Ортодонт", photo: "kostyshyn" },
  { name: "Марина Любинець", role: "Дитячий стоматолог", photo: "lyubynets" },
  { name: "Ірина Глинянчук", role: "Дитячий стоматолог, лікування уві сні", photo: "hlynianchuk" },
  { name: "Назар Калинюк", role: "Терапевт, ендодонтист, ортопед", photo: "kalyniuk" },
  { name: "Роман Винничук", role: "Ортопед, 10 років досвіду", photo: "vynnychuk" },
  { name: "Анна Іванів", role: "Терапевт і ортопед, 11 років досвіду", photo: "ivaniv" },
  { name: "Марта Мінько", role: "Терапевт", photo: "minko" },
  { name: "Анна Шпільчак", role: "Терапевт", photo: "shpilchak" },
];
