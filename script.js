const mapPool = [
  {
    map: "ANCIENT",
    img: "./assets/ancient.jpeg",
    isBanned: false,
  },
  {
    map: "ANUBIS",
    img: "./assets/anubis.jpeg",
    isBanned: false,
  },
  {
    map: "INFERNO",
    img: "./assets/inferno.jpeg",
    isBanned: false,
  },
  {
    map: "MIRAGE",
    img: "./assets/mirage.jpeg",
    isBanned: false,
  },
  {
    map: "NUKE",
    img: "./assets/nuke.jpeg",
    isBanned: false,
  },
  {
    map: "OVERPASS",
    img: "./assets/overpass.jpeg",
    isBanned: false,
  },
  {
    map: "VERTIGO",
    img: "./assets/vertigo.jpeg",
    isBanned: false,
  },
];

let mapasRestastes = [];

function vetaMapa(id) {

  if(mapasRestastes.length == 1){
    return;
  }

  mapPool[id].isBanned = true;

  mapasRestastes = mapPool.filter((item) => item.isBanned !== true);

  document.getElementById(id).removeAttribute("onclick")

  console.log(mapasRestastes);

  if (document.getElementById("turn-team").innerText === "TIME 1") {
    document.getElementById("turn-team").innerText = "TIME 2";
  } else {
    document.getElementById("turn-team").innerText = "TIME 1";
  }

  document.getElementById(id).classList.add("vetado");
  document.getElementById(id).classList.remove("map");

  if (mapasRestastes.length == 1) {
    console.log(mapasRestastes[0].map);
    let newID = 0;
    document.getElementById(
      "turn"
    ).innerText = `O mapa da partida é ${mapasRestastes[0].map}`;

    mapPool.forEach((map, i) => {
      if (map.map === mapasRestastes[0].map) {
        newID = i;
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
