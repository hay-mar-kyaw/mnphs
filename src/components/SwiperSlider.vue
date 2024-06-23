<template>
    <main class="container">
        <h1>Photo Gallery</h1>
        <Swiper>
            <!-- <SwiperSlide v-for="photo in photos" :key="photo">
                <img :src="`../images/${photo}`" :alt="photo">
            </SwiperSlide> -->
            <SwiperSlide>
                <img src="../assets/images/6D.jpg" alt="photo">
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/images/coverimage.jpg" alt="photo">
            </SwiperSlide>
            <SwiperSlide>
                <img src="../assets/images/logo.png" alt="photo">
            </SwiperSlide>
        </Swiper>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const photos = [
            "6D.jpg",
            "coverimage.jpg",
            "logo.png"
        ];

        return {
            photos
        };
    }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
