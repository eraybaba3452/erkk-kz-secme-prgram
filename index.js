let erkekler=["Rahmi","Osman","Eray","Sedat","Umut","Mustafa"];
let kizlar=["Yağmur","İlayda","Ayşe","Fatma","Hayriye","Zeynep"];

const liste=document.querySelector("#slctcinsiyet");
let secim=liste.options[liste.selectedIndex].value;

function isimbul(){
    let sayi=Math.floor(Math.random()*6);
    let ad="";

    if(secim=="E")
    {
        ad=erkekler[sayi];
    }
    else if(secim=="K")
    {
        ad=kizlar[sayi];
    }

    document.getElementById("sonuc").innerHTML="Üretilen isim: "+ad;

}

function isimgetir(){
    let secim=liste.options[liste.selectedIndex].value;
    let tumadlar="";
    
    console.log(secim);

    if(secim==="E")
    {
        for (let i=0;i<erkekler.length;i++)

        tumadlar=tumadlar+erkekler[i]+"<br>";
    }
    else if(secim==="K")
    {
        for (let i=0;i<kizlar.length;i++)

        tumadlar=tumadlar+kizlar[i]+"<br>";
    }
    sonuc.innerHTML=tumadlar;
}