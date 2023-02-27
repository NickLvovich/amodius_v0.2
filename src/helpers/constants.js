import HealingHouse from "../assets/images/healig-house.svg";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PaletteIcon from "@mui/icons-material/Palette";
import React from "react";

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
  { icon: <img src={HealingHouse} style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }}  alt={'for help'}/>, title: "Hosting promotion", desc: "Promotion of socio-professional integration, analyze and deal with the issues of hosting and asylum for Ukrainian refugees." },
  { icon: <SchoolIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Educational Guidance", desc: "Support of the interactive process through the organization of various educational online and offline courses." },
  { icon: <AccountBalanceIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Multicultural Integration", desc: "Movement of multicultural values among adults and children." },
  { icon: <TipsAndUpdatesIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Digital Intelligence", desc: "Distribution of digital tools and skills among the population." },
  { icon: <PsychologyIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Psychological support", desc: "Analyzing and providing solutions to issues relating to mental and physical health through support and accompaniment." },
  { icon: <PaletteIcon style={{ marginLeft: 0, marginTop: 0, color: '#fff', width: 45, height: 45 }} />, title: "Art Diverse", desc: "Development of Culture and Art through any form of collaborations." },
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
