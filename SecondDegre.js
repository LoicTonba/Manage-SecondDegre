
//Declaration des variables
let a=0,b=0,delta=0,c=0,resultat=0;
let x1=0, x2=0;
console.log("Bienvenu    dans   la    gestion  de l'equation  du  second  degre")
//Traitement du probleme du second degre
function SecondDegre(){
    let valA= prompt("Entrez les valeurs a", a)
    let valB= prompt("Entrez les valeurs b", b)
    let valC= prompt("Entrez les valeurs c", c)
    delta = b*b-(4*a*c)

    // cas(a=0,b!=0,c!=0)
    if(valA==0 && valB!=0 && valC!=0){
        resultat = -valC/valB
        console.log("Le resultat est :", resultat)
    }

    //Gestion de delta
    else if(delta<0){
        console.log("Ensemble vide, donc aucun resultat🙂")
    }
    else if(delta==0){
        resultat = -valB/2*valA
        console.log("Le resultat est :", resultat)
    }
    else if(delta>0){
        x1 = (-b-Math.sqrt(delta))/(2*valA)
        x2 = (-b+Math.sqrt(delta))/(2*valA)
        console.log("Le resultat est : x1 = ", x1+" et x2 = "+ x2)
    }
    // cas(a!=0,b=0,c!=0)
    else if(valA!=0 && valB==0 && valC!=0){
        if((valA<0 && valC<0) || (valA>0 && valC>0)){
            console.log("Ensemble vide, donc aucun resultat🙄") 
        }
        else if((valA<0 && valC>0) || (valA>0 && valC<0)){
            x1 = (-b-Math.sqrt(delta))/(2*valA)
            x2 = (-b+Math.sqrt(delta))/(2*valA)
            console.log("Le resultat est : x1 = ", x1+" et x2 = "+ x2)
        } 
      
    }

    // cas(a!=0,b!=0,c=0)
    else if(valA!=0 && valB!=0 && valC==0){
        x1=0
        x2= -valB/valA
        console.log("Le resultat est : x1 = ", x1+" et x2 = "+ x2)
    }

     // cas(a=0,b=0,c=0)
    else{
        console.log("Le resultat est 0=0 , ce qui est toujours VRAI, pas vrai ?😁")
    }

}
let resultatFonction = SecondDegre()
console.log(resultatFonction)