<script setup>
$(function () {
  const scrollContainer = $(".conteudo-principal-noticias");
  
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.on("mousedown", function (e) {
    isMouseDown = true;
    scrollContainer.addClass("active");
    startX = e.pageX - scrollContainer.offset().left;
    scrollLeft = scrollContainer.scrollLeft();
  });

  scrollContainer.on("mouseleave", function () {
    isMouseDown = false;
    scrollContainer.removeClass("active");
  });

  scrollContainer.on("mouseup", function () {
    isMouseDown = false;
    scrollContainer.removeClass("active");
  });

  scrollContainer.on("mousemove", function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offset().left;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft(scrollLeft - walk);
  });
});
</script>

<style src="./Noticias.css"></style>

<template>
  <div class="container noticias">
    <div class="texto-content-noticias">
      <h2><i class="fa-solid fa-leaf"></i> Noticias</h2>
      <button class="btn-content-noticias">
        Ver Mais <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>

    <div class="conteudo-principal-noticias">
      <div class="box-noticia">
        <div class="box-noticia-img">
          <h1>img</h1>
        </div>

        <a>Compensa</a>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere earum
          incidunt expedita.
        </p>

        <button class="btn-box-noticia">Ler Sobre</button>
      </div>

      <div class="box-noticia">
        <div class="box-noticia-img">
          <h1>img</h1>
        </div>

        <a>Compensa</a>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere earum
          incidunt expedita.
        </p>

        <button class="btn-box-noticia">Ler Sobre</button>
      </div>

      <div class="box-noticia">
        <div class="box-noticia-img">
          <h1>img</h1>
        </div>

        <a>Compensa</a>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere earum
          incidunt expedita.
        </p>

        <button class="btn-box-noticia">Ler Sobre</button>
      </div>
    </div>
  </div>
</template>
