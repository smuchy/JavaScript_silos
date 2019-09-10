export class Silos {
    constructor (oznaka, kapacitet, kolicina) {
        this.oznaka=oznaka;
        this.kapacitet=kapacitet;
        this.kolicina=kolicina;
        if(!oznaka) {
            this.oznaka="Silos_#";
        }
        if(!kapacitet) {
            this.kapacitet=2000;
        }
        if (!kolicina) {
            this.kolicina=200;
        }
    }


    ispisiOdnos() {
        return this.kolicina + "t/" + this.kapacitet + "t";
    }

    izracunajOdnos() {
        return this.kolicina/this.kapacitet;
    }
}