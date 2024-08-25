<script setup>
    import Nav from '../components/Nav/Nav.vue'
    import Footer from '@/components/Footer/Footer.vue';
    import Carousel from '@/components/Home/Carousel.vue';
    import CardAjudamos from '@/components/Home/CardAjudamos.vue';
    import Sobre from '@/components/Home/Sobre.vue';
    import SobreBanner from '@/components/Home/SobreBanner.vue';
    import ConteudoSobre from '@/components/Home/ConteudoSobre.vue';
    import Membros from '@/components/Home/Membros.vue';
    import Noticias from '@/components/Home/Noticias.vue';
    import Eventos from '@/components/Home/Eventos.vue';
    import Fotos from '@/components/Home/Fotos.vue';
</script>

<template>
    <Nav />
    <Carousel /> 
    <CardAjudamos />
    <Sobre />
    <SobreBanner />
    <ConteudoSobre />
    <Membros />
    <Noticias />
    <Eventos />
    <Fotos />
    <Footer />
</template>