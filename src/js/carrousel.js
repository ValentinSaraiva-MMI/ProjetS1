function carrousel() {
    let bsuiv = document.querySelector('.suivante button');
    let bprec = document.querySelector('.precedente button');

    let largeur = 375;
    let lesimg = document.querySelector(".images");
    let nb = document.querySelectorAll(".images li").length;    // .length retourne le nombre d'élément, ici 3 car il y a 3 images
    let cpt = 0;

    lesimg.style.transition = "transform 1s ease-in-out";

    bsuiv.addEventListener("click", function () {
        console.log("Click sur bsuiv");
        if (cpt < (nb - 1)) cpt++;
        else cpt = 0;
        lesimg.style.transform = "translateX(-" + cpt * largeur + "px)";

    });

    bprec.addEventListener("click", function () {
        console.log("Click sur bprec");
        if (cpt > 0) cpt--;
        else cpt = 2;
        lesimg.style.transform = "translateX(-" + cpt * largeur + "px)";
    });
}