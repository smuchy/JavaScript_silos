export class Fabrika {
    constructor(ime) {
        this.ime=ime;
        this.silosi=[];
        this.container=null;
    }

    dodajSilos(silos) {
        this.silosi.push(silos);
    }

    crtaj(host) {
        if (!host) {
            throw new Error("Host nije definisan!");
        }

        let naslov=document.createElement("h1");
        host.appendChild(naslov);
        naslov.innerHTML=this.ime;

        this.container=document.createElement("div");
        host.appendChild(this.container);
        this.container.className="nadDiv";

        const silosKontejner=document.createElement("div");
        this.container.appendChild(silosKontejner);
        silosKontejner.className="silosKontejner";

        this.silosi.forEach(silos => this.crtajSilos(silosKontejner, silos));


        const ostatakKontejner=document.createElement("div");
        this.container.appendChild(ostatakKontejner);
        ostatakKontejner.className="ostatakKontejner";

        let zaSelect=document.createElement("div");
        ostatakKontejner.appendChild(zaSelect);
        zaSelect.className="zaSelect";

        let labela=document.createElement("label");
        zaSelect.appendChild(labela);
        labela.innerHTML="Silos";

        let selekt=document.createElement("select");
        zaSelect.appendChild(selekt);
        selekt.className="selekt";
        let opcija=null;

        this.silosi.forEach((silos, index) => {
            opcija=document.createElement("option");
            opcija.innerHTML=silos.oznaka;
            opcija.value=index;
            selekt.appendChild(opcija);
        });

        labela=document.createElement("label");
        ostatakKontejner.appendChild(labela);
        labela.innerHTML="Kolicina";

        const textbox=document.createElement("input");
        ostatakKontejner.appendChild(textbox);

        const dugme=document.createElement("button");
        ostatakKontejner.appendChild(dugme);
        dugme.innerHTML="Sipaj u silos";

        dugme.onclick = (ev) => {
            const trenutniS=this.silosi[selekt.value];

            let novaKolicina=this.container.querySelector("input").value;
            novaKolicina=parseFloat(novaKolicina);
            if (trenutniS.kolicina+novaKolicina>trenutniS.kapacitet) {
                alert("Ne moze be!");
            }

            else {
                trenutniS.kolicina+=novaKolicina;
                const kontSilosi=silosKontejner.querySelectorAll(".silosPoseban")[selekt.value];
                const odnosLab=kontSilosi.querySelector(".odnos");
                odnosLab.innerHTML=trenutniS.ispisiOdnos();

                const okvir=kontSilosi.querySelector(".okvir");
                const uboji=okvir.querySelector(".uboji");
                uboji.style.flexGrow=trenutniS.izracunajOdnos();
            }
        }
    }

    crtajSilos(silosKontejner, silos) {
        let kontejner=document.createElement("div");
        silosKontejner.appendChild(kontejner);
        kontejner.className="silosPoseban";

        let labela=document.createElement("label");
        kontejner.appendChild(labela);
        labela.innerHTML=silos.oznaka;

        labela=document.createElement("label");
        kontejner.appendChild(labela);
        labela.className="odnos";
        labela.innerHTML=silos.kolicina + "t/" + silos.kapacitet + "t";

        let okvir=document.createElement("div");
        kontejner.appendChild(okvir);
        okvir.className="okvir";

        let uboji=document.createElement("div");
        okvir.appendChild(uboji);
        uboji.className="uboji";
    }
}