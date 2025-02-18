const campeoes = {
  Top: ["Aatrox", "Akali", "Aurora", "Camille", "Cho'Gath", "Darius", "Dr. Mundo", "Fiora", "Gangplank", "Garen",
      "Gnar", "Gragas", "Gwen", "Heimerdinger", "Illaoi", "Irelia", "Jax", "Jayce", "K'Sante", "Karma",
      "Kayle", "Kennen", "Kled", "Malphite", "Mordekaiser", "Nasus", "Olaf", "Ornn", "Pantheon", "Poppy",
      "Quinn", "Renekton", "Rengar", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Skarner", "Smolder",
      "Sylas", "Tahm Kench", "Teemo", "Trundle", "Tryndamere", "Twisted Fate", "Udyr", "Urgot", "Vayne", "Vladimir",
      "Volibear", "Warwick", "Wukong", "Yasuo", "Yone", "Yorick", "Zac"],

  Jungle: ["Amumu", "Bel'Veth", "Brand", "Briar", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Gragas", "Graves", "Hecarim",
      "Ivern", "Jarvan IV", "Jax", "Karthus", "Kayn", "Kha'Zix", "Kindred", "Lee Sin", "Lillia",
      "Maokai", "Master Yi", "Nidalee", "Nocturne", "Nunu", "Pantheon", "Poppy", "Rammus", "Rek'Sai", "Rengar",
      "Sejuani", "Shaco", "Shyvana", "Skarner", "Taliyah", "Talon", "Teemo", "Trundle", "Udyr", "Vi", "Viego", "Volibear",
      "Warwick", "Wukong", "Xin Zhao", "Zac", "Zed"],

  Mid: ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "Aurelion Sol", "Aurora", "Azir", "Brand", "Cassiopeia", "Diana", "Ekko", "Fizz",
      "Galio", "Gragas", "Heimerdinger", "Hwei", "Irelia", "Jayce", "Karma", "Kassadin", "Katarina", "LeBlanc", "Lissandra", "Lux", "Malphite", "Malzahar",
      "Naafiri", "Neeko", "Orianna", "Pantheon", "Rumble", "Ryze", "Smolder", "Swain", "Sylas", "Syndra", "Taliyah",
      "Talon", "Taric", "Tristana", "Twisted Fate",
      "Veigar", "Vel'Koz", "Vex", "Viktor", "Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs", "Zoe"],

  Adc: ["Aphelios", "Ashe", "Caitlyn", "Corki", "Draven", "Ezreal", "Graves", "Jhin", "Jinx", "Kai'Sa", "Kalista",
      "Kindred", "Kog'Maw", "Lucian", "Miss Fortune", "Samira", "Senna", "Quinn", "Sivir", "Tristana",
      "Twitch", "Varus", "Vayne", "Xayah", "Zeri"],

  Supp: ["Bardo", "Braum", "Fiddlesticks", "Heimerdinger", "Ivern", "Janna", "Karma", "Kayle", "Leona",
      "Lulu", "Lux", "Morgana", "Nami", "Nidalee", "Nunu", "Orianna", "Sona", "Syndra",
      "Tahm Kench", "Taric", "Yuumi", "Zilean", "Zyra"],

  Everything: ["Alistar", "Annie", "Ashe", "Fiddlesticks", "Jax", "Kayle", "Master Yi", "Morgana", "Nunu & Willump", "Ryze",
      "Sion", "Sivir", "Soraka", "Teemo", "Tristana", "Twisted Fate", "Warwick", "Singed", "Zilean", "Evelynn",
      "Tryndamere", "Twitch", "Karthus", "Amumu", "Cho'Gath", "Anivia", "Rammus", "Veigar", "Kassadin", "Gangplank",
      "Taric", "Blitzcrank", "Dr. Mundo", "Janna", "Malphite", "Corki", "Katarina", "Nasus", "Heimerdinger", "Shaco",
      "Udyr", "Nidalee", "Poppy", "Gragas", "Pantheon", "Mordekaiser", "Ezreal", "Shen", "Kennen", "Garen", "Akali",
      "Malzahar", "Olaf", "Kog'Maw", "Xin Zhao", "Vladimir", "Galio", "Urgot", "Miss Fortune", "Sona", "Swain", "Lux",
      "LeBlanc", "Irelia", "Trundle", "Cassiopeia", "Caitlyn", "Renekton", "Karma", "Maokai", "Jarvan IV", "Nocturne",
      "Lee Sin", "Brand", "Rumble", "Vayne", "Orianna", "Yorick", "Leona", "Wukong", "Skarner", "Talon", "Riven", "Xerath",
      "Graves", "Shyvana", "Fizz", "Volibear", "Ahri", "Viktor", "Sejuani", "Ziggs", "Nautilus", "Fiora", "Lulu", "Hecarim",
      "Varus", "Darius", "Draven", "Zyra", "Diana", "Rengar", "Syndra", "Kha’Zix", "Elise", "Zed", "Nami", "Vi", "Thresh",
      "Quinn", "Zac", "Lissandra", "Aatrox", "Lucian", "Jinx", "Yasuo", "Vel'Koz", "Braum", "Gnar", "Azir", "Kalista", "Rek’Sai",
      "Bardo", "Ekko", "Tahm Kench", "Kindred", "Illaoi", "Jhin", "Aurelion Sol", "Taliyah", "Kled", "Ivern", "Camille", "Rakan",
      "Xayah", "Kayn", "Ornn", "Zoe", "Kai'Sa", "Pyke", "Neeko", "Sylas", "Qiyana", "Senna", "Aphelios", "Sett", "Lillia", "Yone",
      "Samira", "Seraphine"]
};

function sortearCampeao() {
  const roleSelect = document.getElementById('role');
  const selectedRole = roleSelect.options[roleSelect.selectedIndex].text;

  let campeoesParaEscolher = [];
  if (selectedRole === 'Aleatório') {
      Object.values(campeoes).forEach(array => campeoesParaEscolher.push(...array));
  } else if (campeoes[selectedRole]) {
      campeoesParaEscolher = campeoes[selectedRole];
  } else {
      document.getElementById('result').innerText = 'Por favor, escolha uma função válida.';
      return;
  }

  const campeaoAleatorio = campeoesParaEscolher[Math.floor(Math.random() * campeoesParaEscolher.length)];
  document.getElementById('result').innerText = `Campeão sorteado: ${campeaoAleatorio}`;
}

var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

$('.splat-toggle.toggle').on('click', function() {
  $('body').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function() {
  $('body').toggleClass('back-row-toggle');
  $('.back-row-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function() {
  $('body').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
});

makeItRain();