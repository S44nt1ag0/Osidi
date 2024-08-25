<script setup>

$(document).ready(function(){
  $('#owl-membros').owlCarousel(
    {
        margin: 30,
        items: 4,
        responsive :{
            300: {
                items:2,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4
            }
        }

    });
});

</script>

<style src="./Membros.css"></style>

<template>
    <div class="content-membros">
        <div class="container membros">
            
           <div class="membros-text-information">
                <h2><i class="fa-solid fa-leaf"></i> Membros</h2>
                <button class="btn-mais-sobre-membros"> Ver Sobre <i class="fa-solid fa-arrow-right"></i></button>
           </div>

            <div id="owl-membros" class="owl-carousel owl-theme">
                
                <div class="box-membro">
                    <img src="../../assets/img/membros/lord_aza.png" alt="">
                    <h5>Lord Aura cabral</h5>
                    <span class="membros-funcao"> Doador </span>
                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                </div>

                <div class="box-membro">
                    <img src="../../assets/img/membros/george_clooney.jpg" alt="">
                    <h5>Georgey Clooney</h5>
                    <span class="membros-funcao"> Ator </span>
                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                </div>

                <div class="box-membro">
                    <img src="../../assets/img/membros/laymah.jpg" alt="">
                    <h5>LeyMah Gbowse</h5>
                    <span class="membros-funcao"> Doadora </span>
                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                </div>

                <div class="box-membro">
                    <img src="../../assets/img/membros/deve.png" alt="">
                    <h5>Deve Oledore</h5>
                    <span class="membros-funcao"> Membro </span>
                    <a>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                </div>

            </div>

        </div>
    </div>
</template>