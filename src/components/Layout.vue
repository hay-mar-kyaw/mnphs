<template>
    <div>
        <Navbar></Navbar>
        <SwiperSlider></SwiperSlider>
        <main>
            <slot></slot>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import SwiperSlider from './SwiperSlider.vue'
import Navbar from './Navbar.vue'
export default {
  components: {
    Footer,
    SwiperSlider, Navbar },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>