// Definir a função que será chamada quando a página for rolada
window.onscroll = function() {
    scrollFunction() //chamando função
};

function scrollFunction(){
    var btn = document.getElementById("scrollTopBtn"); // chamando pelo Id
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){ // Verifica se a rolagem vertical é maior que 20 pixels a partir do topo
        btn.style.display = "block";
    } else {
        btn.style.display = "none"; // Caso contrário oculta o botão
    }
}

function topFunction() {
    // Verifica se a rolagem é suportada pelo navegador
    if ('scrollBehavior' in document.documentElement.style){
        window.scrollTo({ top: 0, behavior: 'smooth'}); // Rola suavement para o topo
    } else {
        smoothScrollToTop(); // Caso a rolagem suave não seja suportada, chama essa função
    }
}
//Função auxiliar para rolar suavemente para o topo (para navegadores que não suportam scrollBehavior)
function smoothScrollToTop(){
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    // Verificar se a posição atual é maior que 0
    if (currentPosition > 0){
        window.requestAnimationFrame(smoothScrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

window.onload = function() {
    var heroSection = document.getElementById("hero");
    heroSection.classList.add("hide");
    setTimeout(function(){
        heroSection.classList.remove("hide");
    }, 1000);
}

  
