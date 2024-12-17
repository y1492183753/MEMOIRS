<template>
    <div class="home">
        <TopBar/>
        <h1>
            <span>H</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
        </h1>
        <div class="picture-gallery">
            <div v-for="(image, index) in images" :key="index">
               <Picture :src="image.src" v-if="image.src" class="picture"></Picture>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Picture from '@/components/Picture.vue'
import IMAGES from '@/const'
export default {
  name: 'my-home',
  components: {
    Picture,
    TopBar
  },
  data () {
    return {
      images: IMAGES
    }
  }
}
</script>
<style src="../assets/DropFont.css" scoped></style>
<style scoped>
.home {
    width: 100%;
    min-height: 90vh;
}

.picture-gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.picture{
    margin: 40px;
}

</style>
