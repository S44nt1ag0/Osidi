<script setup>

$(document).ready(function() {
 
 $("#owl-fotos").owlCarousel({
    items : 4,
    margin: 10,
    navigation : true,
    responsive: {
        300: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
 });

});

</script>

<style src="./Fotos.css"></style>

<template>

    <div class="container fotos">

        <div class="texto-container-fotos">
            <h2><i class="fa-solid fa-leaf"></i> Fotos</h2>
            <button class="btn-texto-container-fotos"> Ver Todas Fotos <i class="fa-solid fa-arrow-right"></i></button>
        </div>

        <div id="owl-fotos" class="owl-carousel owl-theme">

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

            <div class="item card-fotos-carousel">
                <img src="../../assets/img/fotos/musical.png" alt="">
            </div>

        </div>

        
    </div>

</template>