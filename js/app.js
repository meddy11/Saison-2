// Episode 1 : Donne-moi ton adresse e-mail

var adresse = prompt("Entre votre adresse e-mail .");//entrez vortre email
var confirme = adresse.indexOf("@gmail.com");//votre emai doit avoir @gmail.com
console.log(confirme);
if(confirme === -1){
    alert("Adresse invalide");
} else{
    alert("Bienvenu");
}


// Episode 2 : Choisis un mot de passe

// - contient une majuscule NB: n'as pas ete gere 
// - contient au moins un chiffre NB: n'as pas ete gere
var adresse = prompt("Entrez mot de passe");//var declaration
var nombreCaractere = adresse.length;//nombre de caractere
 if(nombreCaractere === 8){//Si nombre caracteres est strictement egale a 8
     alert("valide");//affiche
 }
 else{//Si non
    alert("8 caractères minimum");//affiche
 }


// // Episode 3 : Au pluriel

 var nom = prompt("Entrez votre nom ?");//demande a utilisateur de rentrz un nom.
 console.log(nom);//puis l'affiche en console
 var nmbreEnfant = prompt("Votre nombre d’enfants ?");//demande a l'utilisateur le nombre enfant 
 nmbreEnfant = parseInt(nmbreEnfant);//l'utilisateur doit entrez un nombre
 console.log(nmbreEnfant);//puis l'affiche en console
 if (nmbreEnfant >= 3){// condition si nombre enfant est superieur ou egal a 3
      alert(nom + " , vous avez " + nmbreEnfant + " enfants.");// affiche en alerte se resultat
 } else if( nmbreEnfant == 0){// si resultat 1 est egale a 0 
      alert(nom + " , vous n'avez " + "pas enfant.");//affiche en alerte se resultat
 } else if( nmbreEnfant <= 0){//si resultat 1 est inferieur ou egale a 0
     alert(nom + ", vous avez " + "pas enfant.");//affiche en alerte se resultat
  }else if( nmbreEnfant > 0){// si resultat 1 est superieue a 0
      alert(nom + " , vous n'avez " + nmbreEnfant + " enfant.")//affiche se resultat
 }
 else{//si nombre est une chaine de caratere
     alert("Votre nombre d’enfant est invalide");//affische se resultat
  }

// Episode 4 : Dis-moi, quand es-tu né ?
// Ecrire un programme demande la console.log("Alert il y a 31 jours dans 1mois");de naissance d’un
// utilisateur et vérifie si la date saisie est au format JJ/MM/AAAA.
// Exemple : 13/05/2020.

// Episode 5 : Fiche de renseignement

 function personne(nom , prenom, sexe){//
     this.nom = prompt("Entrez votre nom");//
     this.prenom = prompt("Entrez votre prenom");
     this.sexe = prompt("Votre sexe (homme = M & femme = Mme");
 }
 var utilisateur = new personne("","","");
 alert("Le resultat se trouve dans la console merci!");
 console.log(utilisateur);


// // Episode 6 : Quel jour sommes-nous ?
 var Queljour = prompt("Entre le numéro d’un jour et renvoie le jour correspondant.");//declaration variable 1
 Queljour = parseInt(Queljour);//variable 1 est de type number
 var jourDeLaSemaine = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];//tableau avec les 7 jours de la semaine
//declaration amateur pour parcourir le tableau
 var lundi = jourDeLaSemaine[0];
 var Mardi = jourDeLaSemaine[1]; 
 var Mercredi = jourDeLaSemaine[2]; 
 var Jeudi = jourDeLaSemaine[3]; 
 var Vendredi = jourDeLaSemaine[4]; 
 var Samedi = jourDeLaSemaine[5]; 
 var Dimanche = jourDeLaSemaine[6];
//  console.log(Queljour)
//  console.log(jourDeLaSemaine)

// debut de condition 
 if(Queljour === 0){//Si declaration variable 1 est egale a 0 
    alert(lundi);//affiche
 } else if(Queljour === 1){//Si declaration variable 1 est egale a 1 
      alert(Mardi);//affiche
 } else if(Queljour === 2){//Si declaration variable 1 est egale a 2 
      alert(Mercredi);//affiche
 } else if(Queljour === 3){//Si declaration variable 1 est egale a 3 
     alert(Jeudi);//affiche
 } else if(Queljour === 4){//Si declaration variable 1 est egale a 4
     alert(Vendredi);//affiche
 } else if(Queljour === 5){//Si declaration variable 1 est egale a 5
     alert(Samedi);//affiche
 } else if(Queljour === 6){//Si declaration variable 1 est egale a 6
     alert(Dimanche);//affiche
 } else if(Queljour <= 0){//Si declaration variable 1 est inferieur ou egal a 0
     alert(lundi);//affiche
 }else if(Queljour > 8){//Si declaration variable 1 est superieur a 8
     alert("La semaine a 7 jours le premier jour est 0");//affiche
 }
 else{
    alert("La semaine a 7 jours le premier jour est 0");//fin de condition
 }

// Episode 7 : Admis ou recalé

 var noteUn = prompt("Entrez votre premier note en Mathématique");//declaration variable 1
 var notedeux = prompt("Entrez votre deuxieme note en Mathématique");//declaration variable 2
 var notetrois = prompt("Entrez votre troisieme notes en Mathématiques");//declaration variable 3
 var moyenne = parseInt(noteUn) + parseInt(notedeux) + parseInt(notetrois) / 3;//les 3 variables sont des number et sont additionner et diviser par 3
 var note = [0,1,2,3,4,4,5,6,7,8,9,10,11,12,13,15,15,16,17,18,19,20];//tableau


 //Parcourir le tableau declaration Amateur 

 var note0 = note[0];
 var note1 = note[1];
 var note2 = note[2];
 var note3 = note[3];
 var note4 = note[4];
 var note5 = note[5];
 var note6 = note[6];
 var note7 = note[7];
 var note8 = note[8];
 var note9 = note[9];
 var note10 = note[10];
 var note11 = note[11];
 var note12 = note[12];
 var note13 = note[13];
 var note14 = note[14];
 var note15 = note[15];
 var note16 = note[16];
 var note17 = note[17];
 var note18 = note[18];
 var note19 = note[19];
 var note20 = note[20];

 // debut condition 

 if (moyenne <= note10){//si moyenne est inferieur a la note 10
     alert("recalé");//affiche
 }else {//si non
     alert("Admis");//affiche fin de condition
 }

// Episode 8 : Proclamation

//Episode n'est pas fini car nous ne connaissons pas le premier de la classe :(

 var eleves = [{
         nom: prompt("Entrez votre nom"),
         moyenne: parseInt(prompt("Entrez votre moyenne"))
     },

     {
         nom: prompt("Entrez votre nom"),
         moyenne: parseInt(prompt("Entrez votre moyenne"))
     },
     {
         nom: prompt("Entrez votre nom"),
         moyenne: parseInt(prompt("Entrez votre moyenne"))
     }
 ]
 alert("Le resultat se trouve dans la console merci!");
 console.log(eleves);












