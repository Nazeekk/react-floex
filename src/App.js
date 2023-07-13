import "./App.css";
import FlowersComponent from "./components/FlowersComponent/FlowersComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ServicesComponent from "./components/ServicesComponent/ServicesComponent";

const servicesCards = [
  {
    title: "Букети та композиції",
    imgSrc: "/images/flowers.svg",
    backText:
      "Ми пропонуємо різноманіття букетів для будь-якої нагоди: романтичні букети на День Святого Валентина, яскраві та елегантні композиції на ювілеї та весілля, а також класичні букети для щоденного святкування. У нас є букети різних розмірів та стилів, щоб задовольнити всі ваші потреби.",
  },
  {
    title: "Спеціальні пропозиції",
    imgSrc: "/images/specials.svg",
    backText:
      "Ми постійно оновлюємо наші спеціальні пропозиції, щоб ви могли отримати найкращі квіти за вигідною ціною. Підпишіться на нашу розсилку, щоб бути в курсі останніх акцій та знижок.",
  },
  {
    title: "Доставка в будь-яку точку",
    imgSrc: "/images/delivery.svg",
    backText:
      "FloEx здійснює доставку квітів по всьому місту та прилеглим районам. Ми гарантуємо своєчасну доставку та збереження свіжості квітів під час транспортування. Ви можете вибрати зручний час доставки, щоб здивувати своїх близьких або створити романтичну атмосферу.",
  },
  {
    title: "Онлайн-замовлення та оплата",
    imgSrc: "/images/payment.svg",
    backText:
      "Замовляйте квіти прямо на нашому зручному у використанні веб-сайті. Ви можете вибрати потрібний букет, додати додаткові подарунки або листівки, а також вказати точну адресу доставки. Ми приймаємо різні способи оплати для вашої зручності та безпеки.",
  },
  {
    title: "Професійні флористи",
    imgSrc: "/images/florists.svg",
    backText:
      "Наша команда досвідчених має творчий підхід та дбає про деталі. Вони створять унікальні композиції, поєднуючи красу та стиль, щоб кожна квітка виражала ваш настрій та почуття.",
  },
];

const shopItems = [
  {
    title: "Букет рожевих півонії 15 шт",
    imgSrc: "shopitem-1",
    price: "850",
  },
  {
    title: "Букет мікс тюльпан (51шт)",
    imgSrc: "shopitem-2",
    price: "1 950",
  },
  {
    title: "Букет із 49 еквадорської троянди Люсьєна.",
    imgSrc: "shopitem-3",
    price: "7 350",
  },
  {
    title: "Букет з 25 троянд Алама-де-Арагон",
    imgSrc: "shopitem-4",
    price: "2 169",
  },
  {
    title: "Букет 25 рожевих троянд",
    imgSrc: "shopitem-5",
    price: "1 125",
  },
];

function App() {
  return (
    <>
      <HeaderComponent />
      <ServicesComponent servicesCards={servicesCards} />
      <FlowersComponent shopItems={shopItems} />
    </>
  );
}

export default App;
