<script setup></script>
<style src="./Carousel.css"></style>

<template>
  <div class="container">
    <div class="carrosel-img-container">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="informacao-img">
              <div class="texto-img">
                <h2>
                  Solidariedade em Ação: Ong Apoia Comunidade Haitiana na luta
                  por Direitos e Diginidade.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  voluptate necessitatibus ex libero repudiandae deserunt sunt
                  iste! Blanditiis tenetur possimus veritatis eum pariatur
                  aperiam minus doloremque, aspernatur debitis velit repellat!
                </p>
              </div>

              <button class="btn-carrosel-img">
                <i class="fa-solid fa-heart"></i> Fazer Doação
              </button>

            </div>
            <img class="d-block w-100" src="../../assets/img/banner_carousel/paris.jpg" />
          </div>

          <div class="carousel-item">
            <div class="informacao-img">
              <div class="texto-img">
                <h2>Teste Teste Teste Teste</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  voluptate necessitatibus ex libero repudiandae deserunt sunt
                  iste! Blanditiis tenetur possimus veritatis eum pariatur
                  aperiam minus doloremque, aspernatur debitis velit repellat!
                </p>
              </div>

              <button class="btn-carrosel-img">
                <i class="fa-solid fa-heart"></i> Fazer Doação
              </button>
            </div>
            <img class="d-block w-100" src="" />
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>

        <a
          class="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>
    </div>
  </div>
</template>
