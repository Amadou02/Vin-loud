$(document).ready(function(){
  // init
  var article = [
    ['Dooms night', 'Azzido Da Bass', 20, 'assets/img/Electronic/AzzidoDaBass/Avant.jpg', 'electronic', 'Single sorti en 1999 en Allemagne sous le label Club Tools, 2 Titres'],
    ['Apocalypse', 'Dockstatder', 10, 'assets/img/Electronic/Dockstader/Avant.jpg', 'electronic', 'LP sorti en 1993 aux U.S sous le label Starkland, 9 Titres'],
    ['How To Destroy Angels', 'How To Destroy Angels', 15, 'assets/img/Electronic/HowToDestroyAngels/Avant.jpg', 'EP sorti en 2010 aux U.S sous le label The Null Corporation, 6 Titres' ],
    ['Oöphoi', 'Potala', 9, 'assets/img/Electronic/Oöphoi/Avant.jpg', 'electronic', 'Single sorti en 2008 en Allemagne sous le label Drone Records, 2 Titres' ],
    ['Happy Feet', 'Al Hudson And The Partners', 180, 'assets/img/Funk_Soul/AlHudsonAndThePartners/Avant.jpg', 'funk_soul', 'LP sortie en 1979 aux US sous le Label ABC records, 9 Titres'],
    ['Greatest Hits', 'Mahalia Jackson', 12, 'assets/img/Funk_Soul/MahaliaJackson/Avant.jpg', 'funk_soul', 'LP sortie en 1963 aux U.S sous le label Columbia, 10 Titres'],
    ['Only for you', 'Mary Jane Girls', 13, 'assets/img/Funk_Soul/MaryJaneGirls/Avant.jpg', 'funk_soul', 'LP sorti aux U.S en 1985 sous le label Gordy, 9 Titres' ],
    ['Collection', 'The Platters', 7, 'assets/img/Funk_Soul/ThePlatters/Avant.jpg', 'funk_soul', 'Coffret double LP sorti en Angleterre sous le Label Pickwick Records, 24 Titres' ],
    ['Newborn Sun', 'CHON', 60, 'assets/img/Jazz/CHON/Avant.jpg', 'jazz', 'EP sorti en 2014 aux U.S, 8 Titres' ],
    ['Expression', 'John Coltrane', 25, 'assets/img/Jazz/JohnColtrane/Avant.jpg', 'jazz', 'LP sorti en 1967 aux U.S sous le label 	Impulse!, 4 Titres' ],
    ['Rosas De Algodon', 'Mirtha Y Raul', 43, 'assets/img/Jazz/MirthaYRaul/Avant.jpg', 'jazz', 'LP sorti en 1972 à Cuba sous le label Areito, 12 Titres' ],
    ['From A to U', 'Various', 28, 'assets/img/Jazz/Various/Avant.jpg', 'jazz', 'Compilation sortie en 2015 en Angleterre sous le label Alrealon Musique, 20 Titres' ],
    ['Lilali', 'Kim Kay', 19, 'assets/img/Pop/KimKay/Avant.jpg', 'pop', 'Single sorti en 1988 en France sous le label EMI Music France, 2 Titres'],
    ['Silver Moon Baby Rose', 'Randolph Rose', 9, 'assets/img/Pop/RandolphRose/Avant.jpg', 'pop', 'Single sorti en 1971 en Allemagne, 2 Titres' ],
    ['Jetzt Geht Die Party Richtiglos', 'Various', 109, 'assets/img/Pop/Various/Avant.jpg', 'pop', 'Titres diffusés sur la chaîne de télévision allemande ZDF lors du nouvel an, 31 décembre 1978.' ],
    ['Crash', 'Wall Street', 9, 'assets/img/Pop/WallStreetCrash/Avant.jpg', 'pop', 'LP sorti en 1982 en Angleterre sous le label Magnet, 10 Titres' ],
    ['Krieg In Den Städten', 'Klischee', 29, 'assets/img/Rock/Klischee/Avant.jpg', 'rock', 'LP sorti en 1981 en Allemagne sous le label Frostschutz Records, 16 Titres' ],
    ['Parallels', 'Spylacopa', 19, 'assets/img/Rock/Spylacopa/Avant.jpg', 'rock', 'LP sorti en 2015 aux U.S sous le label 	Rising Pulse Records, 8 Titres' ],
    ['Intensity', 'The Bambi Molesters', 7, 'assets/img/Rock/TheBambiMolesters/Avant.jpg', 'rock', 'LP sorti en 2009 en Croatie sous le label Dancing Bear' ],
    ['One Of Us Is The Killer', 'The Dillinger Escape Plan', 9, 'assets/img/Rock/TheDillingerEscapePlan/Avant.jpg', 'rock', 'LP sorti en 2013 aux U.S sous le label Sumerian Records, 11 Titres' ],
  ];
  console.log(article);
  for (var i = 1; i < article.length; i++) {
    var cloning = $('#cloningCard').clone();
    cloning.appendTo('.row');
    cloning.find('h1').text(article[i][0]);
    cloning.find('#artist').text(article[i][1]);
    cloning.find('#price').text(article[i][2]);
    cloning.find('img').attr('src', article[i][3]);
  }
  // Ajouter au panier

  // Filtrer
})
