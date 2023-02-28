import HealingHouse from "../assets/images/healig-house.svg";
import SchoolIcon from "@mui/icons-material/School";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaletteIcon from "@mui/icons-material/Palette";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import NightShelterRoundedIcon from '@mui/icons-material/NightShelterRounded';
import person1 from "../assets/images/person1.jpeg"
import person2 from "../assets/images/person2.jpeg"
import person3 from "../assets/images/person3.jpeg"
import person4 from "../assets/images/person4.jpeg"

export const PHONE_NUMBER = '+32493327386';
export const EMAIL = 'info@amodius.eu';
export const ADDRESS = 'rue des Anciens Etangs 40 1190 Brussels';
export const NAV_ITEMS = [
  { id: 1, idnm: 'home', navheading: 'Home' },
  { id: 2, idnm: 'services', navheading: 'Aims' },
  { id: 3, idnm: 'about', navheading: 'About' },
  { id: 4, idnm: 'team', navheading: 'Our Team' },
  { id: 5, idnm: 'getInTouch', navheading: 'Contacts' },
];
export const SERVICES = [
  { icon: <NightShelterRoundedIcon style={{ marginLeft: '-10px', marginTop: '-10px', color: '#fff', width: 55, height: 55 }}  alt={'for help'}/>, title: "Hosting promotion", desc: "Promotion of socio-professional integration, analyze and deal with the issues of hosting and asylum for Ukrainian refugees." },
  { icon: <SchoolIcon style={{ marginLeft: '-5px', marginTop: '-5px', color: '#fff', width: 50, height: 50 }} />, title: "Educational Guidance", desc: "Support of the interactive process through the organization of various educational online and offline courses." },
  { icon: <Diversity1Icon style={{ marginLeft: '-3px', marginTop: '-5px', color: '#fff', width: 50, height: 50 }} />, title: "Multicultural Integration", desc: "Movement of multicultural values among adults and children." },
  { icon: <TipsAndUpdatesIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Digital Intelligence", desc: "Distribution of digital tools and skills among the population." },
  { icon: <PsychologyIcon style={{ marginLeft: '-7px', marginTop: '-10px', color: '#fff', width: 55, height: 55 }} />, title: "Psychological support", desc: "Analyzing and providing solutions to issues relating to mental and physical health through support and accompaniment." },
  { icon: <PaletteIcon style={{ marginLeft: '-5px', marginTop: '-5px', color: '#fff', width: 50, height: 50 }} />, title: "Art Diverse", desc: "Development of Culture and Art through any form of collaborations." },
];

export const SUBJECTS = [
  { title: "Hosting promotion"},
  { title: "Educational Guidance"},
  { title: "Multicultural Integration"},
  { title: "Digital Intelligence"},
  { title: "Psychological support"},
  { title: "Art Diverse"},
  { title: "Other"},
];

export const SECTION_ITEMS = [
  {
    id: 1,
    h1: "Amodius - social justice and integration.",
    p: "Join Amodius to promote social justice and integration through our inclusive platform and empower individuals for a better future.",
    href: "#"
  },
  {
    id: 2,
    h1: "Improve your skills and network with Amodius.",
    p: "Amodius provides chances to boost skills, network, and foster cooperation in a diverse, inclusive environment.",
    href: "#"
  },
  {
    id: 3,
    h1: "Opportunity, Education, Inclusion.",
    p: "Unlock your potential with Amodius: access opportunities, education, and inclusive community to achieve your goals and dreams.",
    href: "#"
  }
];

export const TEAM = [
  {
    id: 1,
    img: person1,
    icon: "mdi  mdi-laptop-mac",
    title: "Ainur Kassenova",
    desc:
    "president - is responsible for general management of the association including grant seeking process, overseeing budgets, staff, and executives and evaluating the success of the activities. Ainur has considerable experience in the management of non-profit organizations, public relations and journalism. ",
    link: "/",
  },
  {
    id: 2,
    img: person2,
    icon: "mdi  mdi-account-group",
    title: "Violetta Tsybenko",
    desc:
    "co-president - is responsible for the development and maintenance of association targets and partnership opportunities. Notably, performing strategy formulation and vision, executing planning derivation, incubating new products and innovations due to the technologies and IT intelligence, interacting between units designing organizational strategy.",
    link: "/",
  },
  {
    id: 3,
    img: person3,
    icon: "mdi  mdi-chart-bell-curve",
    title: "Rano Aboutkhodjaeva",
    desc:
    "treasurer - oversees all financial transactions including budget planning, financial reporting, record-keeping, and managing incoming and outgoing funds.\n" +
  "Rano has more than ten years experience in accountancy and budget planning in commercial and social fields.",
  link: "/",
  },
  {
    id: 4,
    img: person4,
    icon: "mdi  mdi-chart-bell-curve",
    title: "Darina Apajeva",
    desc:
    "our legal adviser - provides association with guidance in matters relating to law and developing strategies to match and beat the competition and providing the quality of service that our target audience requires. Darina is an Erasmus Mundus alumni, studying Law at Université Libre de Bruxelles.",
    link: "/",
  },
]

export const UserData = {
  serviceID: `service_0bi6cjd`, //userID
  templateID: `template_gpld8fm`, //templateID
  publicKey: `weR86XeethnGCo08g`,
};
