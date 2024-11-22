import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPhone } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import project1 from "./assets/Project-1.png";
import project2 from "./assets/Project-2.png";
import project3 from "./assets/Project-3.png";

export const links = [
  { id: nanoid(), href: "#about", text: "O mnie" },
  { id: nanoid(), href: "#skills", text: "Umiejętności" },
  { id: nanoid(), href: "#projects", text: "Projekty" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-sky-500" />,
    text: "Znam HTML/CSS na poziomie, który pozwala mi tworzyć struktury stron internetowych oraz tworzyć responsywne układy, zarządzać kolorami, typografią i rozmieszczeniem elementów, aby poprawić wrażenia użytkownika.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-sky-500" />,
    text: "Mam podstawową wiedzę z JavaScript, co umożliwia mi pisanie skryptów do obsługi interakcji użytkownika oraz manipulacji elementami na stronie. Rozumiem zasady działania zmiennych, pętli oraz funkcji.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-500" />,
    text: "Podstawy Reacta pozwalają mi na tworzenie dynamicznych interfejsów użytkownika. Korzystam z komponentów, aby budować przejrzyste i łatwe w utrzymaniu aplikacje, a także efektywnie zarządzać stanem danych.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: "https://backroads-app-orpin.vercel.app/",
    github: "https://github.com/msyc1990/backroads-app",
    title: "backroads-app",
    text: "Discover scenic routes and hidden gems with Backroads App. Plan your next adventure, explore curated trails, and uncover unique destinations. Perfect for travelers seeking off-the-beaten-path experiences.",
  },
  {
    id: nanoid(),
    img: project2,
    url: "https://project-react-restaurant.vercel.app/",
    github: "https://github.com/msyc1990/project-react-restaurant",
    title: "restaurant-app",
    text: "A modern and user-friendly platform designed to streamline the dining experience. Browse menus, make reservations, order online, and explore top-rated dishes—all in one place. Perfect for food lovers and restaurants looking to connect effortlessly.",
  },
  {
    id: nanoid(),
    img: project3,
    url: "https://bank-react-app-ld5z.vercel.app/",
    github: "https://github.com/msyc1990/bank-react-app",
    title: "bank-app",
    text: "A secure and intuitive platform for managing your finances. Check balances, transfer funds, pay bills, and monitor transactions—all from one convenient app. Simplify banking and stay in control of your money anytime, anywhere.",
  },
];

export const cvContent = {
  name: "Michał Syc",
  job: "Technik Informatyk",
  text: "Jestem zdeterminowanym samoukiem, który z pasją rozwija swoje umiejętności programistyczne, wierząc, że nauka to proces ciągły i niekończący się. Moim celem jest rozpoczęcie kariery jako programista front-end, gdzie będę mógł łączyć kreatywność z umiejętnością rozwiązywania problemów technicznych. W swojej dotychczasowej pracy zdobyłem cenne doświadczenie w pracy zespołowej, efektywnej organizacji zadań i dbałości o szczegóły, które pragnę przenieść na nowe wyzwania w branży IT. Jestem zmotywowany, by stale podnosić swoje kompetencje i z entuzjazmem podchodzę do każdego projektu, widząc w nim szansę na rozwój zawodowy i osobisty.",
  contact: [
    {
      id: nanoid(),
      icon: <FaPhone size={25} />,
      text: "693-529-383",
    },
    {
      id: nanoid(),
      icon: <MdOutlineAlternateEmail size={25} />,
      text: "michal.syc1990@gmail.com",
    },
    {
      id: nanoid(),
      icon: <FiMapPin size={25} />,
      text: "ul.Królowej Jadwigi 1/1 67-400 Wschowa",
    },
  ],
  professionalExperience: {
    title: "Shock Bath - Lakiernik form, pracownik produkcji",
    date: "Czerwiec 2014 - Obecnie",
    experience: [
      {
        id: nanoid(),
        text: "10 lat doświadczenia w precyzyjnej produkcji form i wykończeniu produktów.",
      },
      {
        id: nanoid(),
        text: "Współpraca w zespołach produkcyjnych, realizacja projektów zgodnie z harmonogramem.",
      },
      {
        id: nanoid(),
        text: "Odpowiedzialność za jakość wykończenia i zgodność z wymaganiami technicznymi.",
      },
    ],
  },
  education: {
    date: "09.2006 - 05.210",
    title: "Technikum Informatyczne w I ZSZ im. S.Staszica",
    specialization: "Zarządzanie sieciami",
    level: "Zawodowe",
  },
  personSkills: [
    {
      id: nanoid(),
      text: "Tworzenie prostych aplikacji front-endowych, eksperymentowanie z komponentami React i stylami CSS.",
    },
    {
      id: nanoid(),
      text: "Determinacja w realizacji celów.",
    },
    {
      id: nanoid(),
      text: "Umiejętność pracy zespołowej i komunikacji.",
    },
    {
      id: nanoid(),
      text: "Ciągła chęć nauki i doskonalenia się.",
    },
  ],
  programmingSkills: [
    {
      id: nanoid(),
      title: "HTML&CSS",
      text: "Znam HTML/CSS na poziomie, który pozwala mi tworzyć struktury stron internetowych oraz tworzyć responsywne układy, zarządzać kolorami, typografią i rozmieszczeniem elementów, aby poprawić wrażenia użytkownika.",
    },
    {
      id: nanoid(),
      title: "Javascript",
      text: "Mam podstawową wiedzę z JavaScript, co umożliwia mi pisanie skryptów do obsługi interakcji użytkownika oraz manipulacji elementami na stronie. Rozumiem zasady działania zmiennych, pętli oraz funkcji.",
    },
    {
      id: nanoid(),
      title: "React",
      text: "Podstawy Reacta pozwalają mi na tworzenie dynamicznych interfejsów użytkownika. Korzystam z komponentów, aby budować przejrzyste i łatwe w utrzymaniu aplikacje, a także efektywnie zarządzać stanem danych.",
    },
  ],
  language: {
    name: "Angielski",
    level: "Podstawowy",
  },
  hoby: "Wolny czas poświęcam na rozwijanie i zdobywanie nowych umiejętności z dziedziny IT. Również oddaje się wszelkim sportom. Osobiście trenuje KickBoxing i uwielbiam jazdę na nartach.",
};
