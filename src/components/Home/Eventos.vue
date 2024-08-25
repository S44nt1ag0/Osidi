<script setup>

$(document).ready(function() {
 
 $("#owl-evento").owlCarousel({
    items : 1,
    margin: 10,
    navigation : true,
    responsive: {
        300: {
            items : 1,
        },
        600: {
            items : 1,
        },
        1000: {
            items : 1,
        }
    }
 });

});

</script>

<style src="./Eventos.css" />

<template>
    <div class="container eventos">

        <div class="texto-content-eventos">
            <h2><i class="fa-solid fa-leaf"></i> Eventos</h2>
        </div>

        <div id="owl-evento" class="owl-carousel owl-theme">

            <div class="item card-banner-evento">
                <img src="../../assets/img/banner_eventos/Samba-de-verao.jpg">
            </div>

            <div class="item card-banner-evento">
                <img src="../../assets/img/banner_eventos/Samba-de-verao.jpg">
            </div>
        </div>
    </div>
</template>
