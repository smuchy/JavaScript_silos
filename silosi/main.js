import {Fabrika} from "./fabrika.js";
import {Silos} from "./silos.js";

const fabrika=new Fabrika("Zitopek");
fabrika.dodajSilos(new Silos("Silos_1", 2000, 200));
fabrika.dodajSilos(new Silos("Silos_2", 3000, 500));
fabrika.dodajSilos(new Silos("Silos_3", 2000, 1200));
fabrika.crtaj(document.body);