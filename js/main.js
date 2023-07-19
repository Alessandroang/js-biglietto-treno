const etaDelPasseggero = prompt("Quanti anni hai?");
const eta = parseInt(etaDelPasseggero);

const kmDaPercorrere = prompt("Quanti km devi percorrere?");
const km = parseInt(kmDaPercorrere);

let prezzoKm = km * 0.21;

if (eta < 18) {
  let scontoVenti = (prezzoKm / 100) * 20;
  prezzoKm = prezzoKm - scontoVenti;
} else if (eta > 65) {
  let scontoQuaranta = (prezzoKm / 100) * 40;
  prezzoKm = prezzoKm - scontoQuaranta;
}

document.getElementById("pluto").innerHTML = "prezzo finale: " + prezzoKm;
