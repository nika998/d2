function prikaziDatum(){
    var datum = new Date();
    var godina = datum.getYear();

    if(godina < 1000){
        godina +=1900;
    }
    
    var dan = datum.getDay();
    var mesec = datum.getMonth();
    var danm = datum.getDate();
    var danniz = new Array("Nedelja","Ponedeljak","Utorak","Sreda","Cetvrtak","Petak","Subota");
    var mesecniz = new Array("Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar");
    /*Do toga je bilo za datum*/

    /*Sad je za vreme*/
    var trenutnovreme = new Date();
    var h = trenutnovreme.getHours();
    var m = trenutnovreme.getMinutes();
    var s = trenutnovreme.getSeconds();

    if(h == 24){
        h = 0;
    }else if(h > 12){
        h = h-0;
    }

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    var mojsat = document.getElementById("prikaziDatum");
    mojsat.textContent = "" +danniz[dan]+ " " +danm+ " " +mesecniz[mesec]+ " " +godina+ " | " +h+ ":" +m+ ":" +s;
    mojsat.innerText = "" +danniz[dan]+ " " +danm+ ". " +mesecniz[mesec]+ " " +godina+ " | " +h+ ":" +m+ ":" +s;

    setTimeout("prikaziDatum()", 1000);
}

prikaziDatum();