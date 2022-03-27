<template>
  <q-page class="constrain q-pa-md">
    <div class="q-pa-md">

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
        <div class="text-h3">Comment</div>
        <div class="text-subtitle1">Share your thoughts to help peers decide</div>
      </div>
      <q-img
        src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/columbia-gs-alma-mater-butler-library.943x530.2.jpg?itok=KpK17OGr"
        class="header-image absolute-top"
      />
    </q-header>

    <q-footer elevated>
      <q-toolbar>
         <q-btn to="/PageHome" color="primary" class="full-width" label="submit" />
      </q-toolbar>
    </q-footer>



      <div class="text-h6" style="height: 25px">
        <p class="text-grey-7">How was your dining experience?</p>
      </div>

      <div class="comment q-col-gutter-md">
        <div class="q-pa-md" style="max-width: 900px">
         <q-input
          v-model="text"
          filled
          type="textarea"
        />
        </div>

      <div class="row q-col-gutter-sm">
        <div class="col">
          <q-card class="my-card">
           <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-rating
              v-model="model1"
              size="1em"
              :max="1"
              color="red"
              icon="favorite"
            />
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
           <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-rating
              v-model="model2"
              size="1em"
              :max="1"
              color="red"
              icon="favorite"
            />
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
           <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            <q-rating
              v-model="model3"
              size="1em"
              :max="1"
              color="red"
              icon="favorite"
            />
          </q-card>
        </div>
      </div>

      <div class="column" style="height: 100px">
      <div class="col">
        <div class="q-pa-md" style="max-width: 300px">
         <div class="q-gutter-md">
         <q-select filled v-model="DiningHall" :options="options" label="Dining Hall" />
         </div>
        </div>
      </div>
      <div class="column" style="max-height: 20px">
        <div class="q-pa-md" style="max-width: 300px">
         <div class="q-gutter-md">
         <q-select filled v-model="DiningHall" :options="stationOptions" label="Station" />
         </div>
        </div>
      </div>
    </div>

    </div>

    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import foodclassify from '../backend/foodclassification'

export default defineComponent({
  name: 'PageComment',
    setup () {
    const model1 = ref(3.5)
    const model2 = ref(2.3)
    const model3 = ref(4.5)
    return {
      options: [
        'John Jay', 'Ferris Booth Commons', 'JJs', 'Faculty House'
      ],
      stationOptions: [
        'Main', 'Grill', 'Salad', 'Action','Pasta','Burger & Sandwich','Smoothie'
      ],
     model1,
     model2,
     model3,

     resetModels () {
        model1.value = 3.5
        model2.value = 2.3
        model3.value = 4.5
      }
    }
  }
})
</script>


