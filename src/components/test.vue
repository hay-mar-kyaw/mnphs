<template>
  <swiper
    @swiper="onSwiperInitialized"
    :spaceBetween="30"
    effect="fade"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="parallax-slider"
    parallax
    grabCursor
    :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
  >
    <div class="parallax-slider-navigation">
      <div class="nav-indicator prevArrow">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </div>
      <div class="nav-indicator nextArrow">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </div>
    </div>
    <swiper-slide class="parallax-slide">
      <div class="parallax-slide-image">
        <img src="../assets/images/6D.jpg" />
      </div>
    </swiper-slide>
    <swiper-slide class="parallax-slide">
      <div class="parallax-slide-image">
        <img src="../assets/images/coverimage.jpg" />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vuen';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Parallax } from 'swiper/modules';

// Import FontAwesomeIcon from fontAwesome setup
import { FontAwesomeIcon } from '@/fontAwesome';

export default {
  components: {
    Swiper,
    SwiperSlide,
    FontAwesomeIcon,
  },
  setup() {
    const onSwiperInitialized = (swiper) => {
      console.log(swiper.width); // Example of using swiper instance
    };

    return {
      modules: [EffectFade, Navigation, Pagination, Parallax],
      onSwiperInitialized,
    };
  },
};
</script>
<style scoped>
.parallax-slider {
  position: relative;
}
.parallax-slide {
  height: 550px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.parallax-slider-navigation {
  position: absolute;
  top: 50%;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 0;
}
.nav-indicator {
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #6b776b;
  color: #ffffff;
  border-radius: 500px;
  position: relative;
  transform: translateY(-50%);
  cursor: pointer;
}
.parallax-slide-image {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
