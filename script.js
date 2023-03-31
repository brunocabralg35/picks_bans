const mapPool = [
  {
    map: "ANCIENT",
    img: "./assets/ancient.jpeg",
  },
  {
    map: "ANUBIS",
    img: "./assets/anubis.jpeg",
  },
  {
    map: "INFERNO",
    img: "./assets/inferno.jpeg",
  },
  {
    map: "MIRAGE",
    img: "./assets/mirage.jpeg",
  },
  {
    map: "NUKE",
    img: "./assets/nuke.jpeg",
  },
  {
    map: "OVERPASS",
    img: "./assets/overpass.jpeg",
  },
  {
    map: "VERTIGO",
    img: "./assets/vertigo.jpeg",
  },
];

let mapasRestastes = mapPool;
let count = 7;

function vetaMapa(id) {
  if (count == 1) {
    return;
  }

  if (document.getElementById("turn-team").innerText === "TIME 1") {
    document.getElementById("turn-team").innerText = "TIME 2";
  } else {
    document.getElementById("turn-team").innerText = "TIME 1";
  }

  delete mapasRestastes[id];
  count--;

  document.getElementById(id).classList.add("vetado");
  document.getElementById(id).classList.remove("map");

  if (count == 1) {
    let mapaDaPartida = mapasRestastes.filter((item) => item !== undefined);
    console.log(mapaDaPartida);
    let newID = 0;
    document.getElementById(
      "turn"
    ).innerText = `O mapa da partida é ${mapaDaPartida[0].map}`;
    mapasRestastes.forEach((mapa, index) => {
      if (mapa !== undefined) {
        newID = index;
      }
    });
    document.getElementById(newID).classList.remove("map");
    document.getElementById(newID).classList.add("picked");
  }
}

for (let i = 0; i < mapPool.length; i++) {
  document.getElementById(
    "container-maps"
  ).innerHTML += `<div id=${i} class='map' onclick='vetaMapa(${i})'><h3>${mapPool[i].map}</h3><img src=${mapPool[i].img} alt=''/></div>`;
}
