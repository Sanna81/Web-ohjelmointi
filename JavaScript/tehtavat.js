function teht18(){
    let r = document.getElementById("sade").value;
    let a = Math.PI * r * r;
    if(r<=0){
    console.log("Ympyrän pinta-ala säteellä "+r+ " on 0.");
    tulos.innerHTML = "Ympyrän pinta-ala on 0." ;}
    else{
    console.log("Ympyrän pinta-ala säteellä "+r+ " on", a);
    tulos.innerHTML = "Ympyrän pinta-ala on " + a;
}
}
teht18();

    var taulukko = [2, 15 , 20, 55, 13, 8, 75, 95];

    document.getElementById("max").innerHTML = teht19(taulukko);

    function teht19(arr) {
         let Max = Math.max.apply(null, arr);
         //console.log("Taulukon suurin luku on ", Max);
      }
    