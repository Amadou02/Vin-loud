$(document).ready(function(){
  // init
  var article = [
    ['Dooms night', 'Azzido Da Bass', 20, 'assets/img/Electronic/AzzidoDaBass/Avant.jpg', 'electronic', 'Single sorti en 1999 en Allemagne sous le label Club Tools, 2 Titres', '001'],
    ['Apocalypse', 'Dockstatder', 10, 'assets/img/Electronic/Dockstader/Avant.jpg', 'electronic', 'LP sorti en 1993 aux U.S sous le label Starkland, 9 Titres', '002' ],
    ['How To Destroy Angels', 'How To Destroy Angels', 15, 'assets/img/Electronic/HowToDestroyAngels/Avant.jpg', 'electronic', 'EP sorti en 2010 aux U.S sous le label The Null Corporation, 6 Titres', '003' ],
    ['Oöphoi', 'Potala', 9, 'assets/img/Electronic/Oöphoi/Avant.jpg', 'electronic', 'Single sorti en 2008 en Allemagne sous le label Drone Records, 2 Titres', '004' ],
    ['Happy Feet', 'Al Hudson And The Partners', 180, 'assets/img/Funk_Soul/AlHudsonAndThePartners/Avant.jpg', 'funk_soul', 'LP sortie en 1979 aux US sous le Label ABC records, 9 Titres', '005' ],
    ['Greatest Hits', 'Mahalia Jackson', 12, 'assets/img/Funk_Soul/MahaliaJackson/Avant.jpg', 'funk_soul', 'LP sortie en 1963 aux U.S sous le label Columbia, 10 Titres', '006' ],
    ['Only for you', 'Mary Jane Girls', 13, 'assets/img/Funk_Soul/MaryJaneGirls/Avant.jpg', 'funk_soul', 'LP sorti aux U.S en 1985 sous le label Gordy, 9 Titres', '007' ],
    ['Collection', 'The Platters', 7, 'assets/img/Funk_Soul/ThePlatters/Avant.jpg', 'funk_soul', 'Coffret double LP sorti en Angleterre sous le Label Pickwick Records, 24 Titres', '008' ],
    ['Newborn Sun', 'CHON', 60, 'assets/img/Jazz/CHON/Avant.jpg', 'jazz', 'EP sorti en 2014 aux U.S, 8 Titres', '009' ],
    ['Expression', 'John Coltrane', 25, 'assets/img/Jazz/JohnColtrane/Avant.jpg', 'jazz', 'LP sorti en 1967 aux U.S sous le label Impulse!, 4 Titres', '010' ],
    ['Rosas De Algodon', 'Mirtha Y Raul', 43, 'assets/img/Jazz/MirthaYRaul/Avant.jpg', 'jazz', 'LP sorti en 1972 à Cuba sous le label Areito, 12 Titres', '011' ],
    ['From A to U', 'Various', 28, 'assets/img/Jazz/Various/Avant.jpg', 'jazz', 'Compilation sortie en 2015 en Angleterre sous le label Alrealon Musique, 20 Titres', '012' ],
    ['Lilali', 'Kim Kay', 19, 'assets/img/Pop/KimKay/Avant.jpg', 'pop', 'Single sorti en 1988 en France sous le label EMI Music France, 2 Titres', '013' ],
    ['Silver Moon Baby Rose', 'Randolph Rose', 9, 'assets/img/Pop/RandolphRose/Avant.jpg', 'pop', 'Single sorti en 1971 en Allemagne, 2 Titres', '014' ],
    ['Jetzt Geht Die Party Richtiglos', 'Various', 109, 'assets/img/Pop/Various/Avant.jpg', 'pop', 'Titres diffusés sur la chaîne de télévision allemande ZDF lors du nouvel an, 31 décembre 1978.', '015' ],
    ['Crash', 'Wall Street', 9, 'assets/img/Pop/WallStreetCrash/Avant.jpg', 'pop', 'LP sorti en 1982 en Angleterre sous le label Magnet, 10 Titres', '016' ],
    ['Krieg In Den Städten', 'Klischee', 29, 'assets/img/Rock/Klischee/Avant.jpg', 'rock', 'LP sorti en 1981 en Allemagne sous le label Frostschutz Records, 16 Titres', '017' ],
    ['Parallels', 'Spylacopa', 19, 'assets/img/Rock/Spylacopa/Avant.jpg', 'rock', 'LP sorti en 2015 aux U.S sous le label     Rising Pulse Records, 8 Titres', '018' ],
    ['Intensity', 'The Bambi Molesters', 7, 'assets/img/Rock/TheBambiMolesters/Avant.jpg', 'rock', 'LP sorti en 2009 en Croatie sous le label Dancing Bear', '019' ],
    ['One Of Us Is The Killer', 'The Dillinger Escape Plan', 9, 'assets/img/Rock/TheDillingerEscapePlan/Avant.jpg', 'rock', 'LP sorti en 2013 aux U.S sous le label Sumerian Records, 11 Titres', '020' ],
  ];
  var totalPrice = 0;
  console.log(article);
  $('#trArticle').hide();
  $('#cloningCard').hide()

  // Duplication de card et ajout des genres
  for (var i = 0; i < article.length; i++) {
    var cloning = $('#cloningCard').clone();
    cloning.removeClass('electronic');
    cloning.appendTo('.row');
    cloning.find('h1').text(article[i][0]);
    cloning.find('#artist').text(article[i][1]);
    cloning.find('#price').text(article[i][2]);
    cloning.find('img').attr('src', article[i][3]);
    cloning.addClass(article[i][4]);
    cloning.find('.shopping').attr('id', article[i][6]);
    cloning.find('#description').text(article[i][5]);
    cloning.show();
  }
  // Augmenter la quantitée
  $('#positiv').on('click', function(){
    var modifiedNumber = parseInt($('#modifiedNumber').text()) + 1;
    if ($('#modifiedNumber').text() < 9) {
      $('#modifiedNumber').text(modifiedNumber);
    }
    else {
      return false;
    }
  })
  // Diminuer la quantitée
  $('#negativ').on('click', function(){
    var modifiedNumber = parseInt($('#modifiedNumber').text()) - 1;
    if ($('#modifiedNumber').text() > 0 ) {
      $('#modifiedNumber').text(modifiedNumber);
    }
    else {
      return false;
    }
  })
  // Ajouter au panier
  $('.shopping').on('click', function(){
    // Recuperation des infos
    var albumTitle = $(this).parent('.card-body').find('h1').text();
    var numberAdd = $(this).parent('.card-body').find('#qt').val();
    var price = $(this).parent('.card-body').find('#price').text();
    var ref = $(this).attr('id');
    var totalQuantity = parseInt($('#modal-quantity').text()) + parseInt(numberAdd);
    // Calcul qt * prix
    var finalPrice = parseInt(numberAdd) * parseInt(price);
    // Ajout d'article au panier
    var cloningBasket = $('#trArticle').clone();
    cloningBasket.appendTo('#cart-tablebody');
    cloningBasket.find('#refArticle').text(ref)
    cloningBasket.find('#titleArticle').text(albumTitle)
    cloningBasket.find('#quantityArticle').text(numberAdd)
    cloningBasket.find('#priceArticle').text(finalPrice + '€')
    cloningBasket.show();
    // Affichage prix total et quantité total
    totalPrice += finalPrice;
    $('#modal-quantity').text(totalQuantity);
    $('#modal-total').text(totalPrice);
    $('#modal-total').text();
  });

  // Filtrer les choix
  $('.nav-item > a').on('click',function(){
    var getId = $(this).attr('id');
    console.log(getId);
    $('.card').hide();
    $(`.${getId}`).show();
  });
  $('#name').on('click',function(){
    $('.card').show();
  });
  // Suppression d'un article au panier
  $('body').on('click', '.deleteOneElement', function (event) {
    $(this).closest('tr').remove();
    console.log('test');
  });
  //Suppression des articles dans le Panier
  $('#delete').on('click', function(){
    if ($('#basketContainer').text().length  == 386) {
      return alert('Il n\'y a rien à supprimer');
    }
    else {
      $('#basketContainer').html(`<table class="table"><thead><tr><th>ref</th><th>Article</th><th>Quantité</th><th>Prix</th></tr><th></th></thead><tbody id="cart-tablebody"><tr id="trArticle"><td id="refArticle"></td><td id="titleArticle"></td><td id="quantityArticle"></td><td id="priceArticle"></td><td><a id="deleteOneElement" href="">Supprimer</i></a></td></tr></tbody></table>`);
      $('#modal-quantity').text('0');
      $('#modal-total').text('0');
      $('#trArticle').hide();
    }
  });
  // Validation de la commande ---> Reload la page
  $('#modal-purchase').on('click', function(){
    if ($('#basketContainer').text().length  == 386) {
      return alert('Le panier est vide')
    }
    else {
      alert('Merci de votre achat !');
      location.reload();
    }
  });
})
