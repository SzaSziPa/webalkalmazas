/*<div class="gallery_img-block">
    <span class="">
        Barlang Algarve környékén, Portugália
    </span>
    <img src="gallery/img_1" alt=""></img>
</div>*/
let gallery = [
{
    leiras: 'Barlang Algarve környékén, Portugália',
    nev: 'img_1'
}, 
{
    leiras: 'Gásadalur, Feröer-szigetek',
    nev: 'img_2'
},
{
    leiras: 'Geiranger fjord, Norvégia',
    nev: 'img_3'
},
{
    leiras: 'Moreine-tó, Kanada',
    nev: 'img_4'
},
{
    leiras: 'Navagio-öböl, Görögország',
    nev: 'img_5'
},
{
    leiras: 'Plitvicei tavak, Horvátország',
    nev: 'img_6'
},
{
    leiras: 'Provence, Franciaország',
    nev: 'img_7'
},
{
    leiras: 'Vatnajokull gleccserbarlang, Izland',
    nev: 'img_8'
},
{
    leiras: 'Yosemite Nemzeti Park, Amerikai Egyesült Államok',
    nev: 'img_9'
}];
gallery.forEach(element => {
    $('.gallery').append(
        `<div class="gallery__img-block">
        <span class="">
            ${element.leiras}
        </span>
        <img src="gallery/${element.nev}.jpg" alt=""></img>
    </div>`
    )
})