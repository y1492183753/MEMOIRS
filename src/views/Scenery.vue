<template>
    <div class="scenery">
        <TopBar/>
        <h1>
           <span>S</span>
           <span>C</span>
           <span>E</span>
           <span>N</span>
           <span>E</span>
           <span>R</span>
           <span>Y</span>
       </h1>
       <div class="picture-gallery">
           <div v-for="(image, index) in filteredLoveImages" :key="index">
              <Picture :src="image.src" v-if="image.src && image.type === 'scenery'" class="picture"></Picture>
           </div>
       </div>
   </div>
</template>

<script>
import IMAGES from '@/const'
import Picture from '@/components/Picture.vue'
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'my-scenery',
  components: {
    Picture,
    TopBar
  },
  data () {
    return {
      images: IMAGES
    }
  },
  computed: {
    // 创建一个新的计算属性来过滤出类型为 'love' 的图片
    filteredLoveImages () {
      return this.images.filter(image => image.type === 'scenery')
    }
  }
}
</script>
<style src="../assets/DropFont.css" scoped></style>
<style scoped>
.scenery {
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
