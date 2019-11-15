$(document).ready(function(){
  // init
  var article = [
    ['Dooms night', 'Azzido Da Bass', 20, 'assets/img/Electronic/AzzidoDaBass/Avant.jpg', 'electronic' ],
    ['Apocalypse', 'Dockstatder', 10, 'assets/img/Electronic/Dockstader/Avant.jpg', 'electronic' ],
    ['How To Destroy Angels', 'How To Destroy Angels', 15, 'assets/img/Electronic/HowToDestroyAngels/Avant.jpg', 'electronic' ],
    ['Oöphoi', 'Potala', 9, 'assets/img/Electronic/Oöphoi/Avant.jpg', 'electronic' ],
    ['Happy Feet', 'Al Hudson And The Partners', 180, 'assets/img/Funk_Soul/AlHudsonAndThePartners/Avant.jpg', 'funk_soul' ],
    ['Greatest Hits', 'Mahalia Jackson', 12, 'assets/img/Funk_Soul/MahaliaJackson/Avant.jpg', 'funk_soul' ],
    ['Only for you', 'Mary Jane Girls', 13, 'assets/img/Funk_Soul/MaryJaneGirls/Avant.jpg', 'funk_soul' ],
    ['Collection', 'The Platters', 7, 'assets/img/Funk_Soul/ThePlatters/Avant.jpg', 'funk_soul' ],
    ['Newborn Sun', 'CHON', 60, 'assets/img/Jazz/CHON/Avant.jpg', 'jazz' ],
    ['Expression', 'John Coltrane', 25, 'assets/img/Jazz/JohnColtrane/Avant.jpg', 'jazz' ],
    ['Rosas De Algodon', 'Mirtha Y Raul', 43, 'assets/img/Jazz/MirthaYRaul/Avant.jpg', 'jazz' ],
    ['From A to U', 'Various', 28, 'assets/img/Jazz/Various/Avant.jpg', 'jazz' ],
    ['Lilali', 'Kim Kay', 19, 'assets/img/Pop/KimKay/Avant.jpg', 'pop' ],
    ['Silver Moon Baby Rose', 'Randolph Rose', 9, 'assets/img/Pop/RandolphRose/Avant.jpg', 'pop' ],
    ['Jetzt Geht Die Party Richtiglos', 'Various', 109, 'assets/img/Pop/Various/Avant.jpg', 'pop' ],
    ['Crash', 'Wall Street', 9, 'assets/img/Pop/WallStreetCrash/Avant.jpg', 'pop' ],
    ['Krieg In Den Städten', 'Klischee', 29, 'assets/img/Rock/Klischee/Avant.jpg', 'rock' ],
    ['Parallels', 'Spylacopa', 19, 'assets/img/Rock/Spylacopa/Avant.jpg', 'rock' ],
    ['Intensity', 'The Bambi Molesters', 7, 'assets/img/Rock/TheBambiMolesters/Avant.jpg', 'rock' ],
    ['One Of Us Is The Killer', 'The Dillinger Escape Plan', 9, 'assets/img/Rock/TheDillingerEscapePlan/Avant.jpg', 'rock' ],
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
