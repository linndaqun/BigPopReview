<template>

<q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Camera</div>
        <div class="text-subtitle1">You can upload the photo here</div>
      </div>
      <q-img
        src="https://magazine.columbia.edu/sites/default/files/styles/wysiwyg_full_width_image/public/2018-11/Campus-dining.jpg?itok=aM9s4q6K"
        class="header-image absolute-top"
      />
    </q-header>

  <q-page class="constrain q-pa-md">
    <div class="camera-frame q-pa-md">
    <img 
    class="full-width"
    src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/4/0/0132293_Artichoke-Spinach-Dip_s4x3.jpg.rend.hgtvcom.616.462.suffix/1390503632247.jpeg">
    </div>
    <div class="text-center q-pa-md">
      <q-btn round color="grey-10"
      icon = "camera" 
      size="lg"
    />
    </div>
    <q-tabs v-model="tab" class="text">
         <q-route-tab
         label = "Album"/>
      </q-tabs>
    <q-tabs v-model="tab" class="text">
         <q-route-tab
         label = "Back"
         to="/"/>
      </q-tabs>
  </q-page>
</template>

<script>
import {defineComponent} from "vue"

export default defineComponent({
  name: "PageCamera",
})
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px

</style>