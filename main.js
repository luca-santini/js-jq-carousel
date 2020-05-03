// pulsante next: quando l'utente clicca, devo spostyare la classe active all'img successiva

// intercettare il click sulla classe next
$('.next').click(function() {
    // recupera l'immagine che ha la classe active
    var img_corrente = $('img.active');

    // recupero il pallino img_corrente
    var pallino_corrente = $('fa-circle.active');

    // tolgo la classe active all'img corrente
    img_corrente.removeClass('active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');
    // recupero l'immagine successiva

    var img_successiva = img_corrente.next('img');
    // recupero il pallino successivo
    var pallino_successivo = pallino_corrente.next('fa-circle');
    // metto la classeactive al pallino successivo

    // verifico che esista un img successiva
    if (img_successiva.lenght !=0) {
        // metto la classe active all'img successiva
        img_successiva.addClass('active');
    } else {
        // non c'è un img successica => riparto dall'inizio
        img_successiva = $('img:first-child');
        img_successiva.addClass('active');
        // non c'è un pallino pallino successivo
    }
});

// intercettare il click sulla classe prev
$('.prev').click(function() {
    // recupera l'immagine che ha la classe active
    var img_corrente = $('img.active');
    console.log(img_corrente);
    // tolgo la classe active all'img corrente
    img_corrente.removeClass('active');
    // metto la classe active all'img successiva
    var img_precedente = img_corrente.next('img');
    console.log(img_precedente);
    // verifico che esista un img successiva
    if (img_precedente.lenght !=0) {
        // metto la classe active all'img successiva
        img_precedente.addClass('active');
    } else {
        // non c'è un img successica => riparto dall'inizio
        img_precedente = $('img:first-child');
        img_precedente.addClass('active');
    }
});
