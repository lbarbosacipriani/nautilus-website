function textowebsites() {
    var txt_web = document.getElementById("texto-websites");
    var txt_adsense= document.getElementById("texto-adsense");
    var txt_analytics = document.getElementById("texto-analytics");
    txt_adsense.style.display = "none";
    txt_analytics.style.display = "none";

    if (txt_web.style.display === "none") {
        txt_web.style.display = "block";
    } else {
        txt_web.style.display = "none";
    }
}
function textoanalytics() {
    var txt_web = document.getElementById("texto-websites");
    var txt_adsense= document.getElementById("texto-adsense");
    var txt_analytics = document.getElementById("texto-analytics");
    txt_web.style.display = "none";
    txt_adsense.style.display = "none";

    if (txt_analytics.style.display === "none") {
        txt_analytics.style.display = "block";
    } else {
        txt_analytics.style.display = "none";
    }
}
function textoadsense() {
    var txt_web = document.getElementById("texto-websites");
    var txt_adsense= document.getElementById("texto-adsense");
    var txt_analytics = document.getElementById("texto-analytics");
    txt_analytics.style.display = "none";
    txt_web.style.display = "none";

    if (txt_adsense.style.display === "none") {
        txt_adsense.style.display = "block";
    } else {
        txt_adsense.style.display = "none";
    }
}

function textoinove() {
    var txt_inove = document.getElementById("text-inove");
    var txt_crie = document.getElementById("text-crie");
    var txt_evolua = document.getElementById("text-evolua");
    txt_crie.style.display = "none";
    txt_evolua.style.display = "none";
    if (txt_inove.style.display === "none") {
        txt_inove.style.display = "block";
    } else {
        txt_inove.style.display = "none";
    }    

}
function textocrie() {
    var txt_inove = document.getElementById("text-inove");
    var txt_crie = document.getElementById("text-crie");
    var txt_evolua = document.getElementById("text-evolua");
    txt_inove.style.display = "none";
    txt_evolua.style.display = "none";
    if (txt_crie.style.display === "none") {
        txt_crie.style.display = "block";
    } else {
        txt_crie.style.display = "none";
    }

}
function textoevolua() {
    var txt_inove = document.getElementById("text-inove");
    var txt_crie = document.getElementById("text-crie");
    var txt_evolua = document.getElementById("text-evolua");
    txt_inove.style.display = "none";
    txt_crie.style.display = "none";

    if (txt_evolua.style.display === "none") {
        txt_evolua.style.display = "block";
    } else {
        txt_evolua.style.display = "none";
    }  
}