var thumbnails = document.querySelectorAll('.thumbnail');
var lightbox = document.getElementById('lightbox');
var imagemAmpliada = document.getElementById('imagem-ampliada');
var fecharLightbox = document.getElementById('fechar-lightbox');

thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener('click', function(){
        var imagemSrc = thumbnail.getAttribute('src');
        imagemAmpliada.src = imagemSrc;
        lightbox.style.display = 'block';
    });
});

fecharLightbox.addEventListener('click', function(){
    lightbox.style.display = 'none';
});
