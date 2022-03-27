<template>
  <q-page class="constrain q-pa-md">
     <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-card
      v-for="dininghalltab in diningHallTabs1"
      :key="dininghalltab.id"
      class="card-dininghalltab q-mb-md"
      bordered
      flat
    >
      <q-img
        :src="dininghalltab.imageUrl"
      />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class= "col text-h6 ellipsis">
            {{ dininghalltab.name }}</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{dininghalltab.openTime}}
        </div>
        <div class="text-caption text-grey">
          {{dininghalltab.description}}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="comment" />
        <q-btn flat color="primary">
          Comment
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
      <div class="col-6">
        <q-card
      v-for="dininghalltab in diningHallTabs2"
      :key="dininghalltab.id"
      class="card-dininghalltab q-mb-md"
      bordered
      flat
    >
      <q-img
        :src="dininghalltab.imageUrl"
      />

      <q-card-section>

        <div class="row no-wrap items-center">
          <div class= "col text-h6 ellipsis">
            {{ dininghalltab.name }}</div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          {{dininghalltab.openTime}}
        </div>
        <div class="text-caption text-grey">
          {{dininghalltab.description}}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="comment" />
        <q-btn flat color="primary">
          Comment
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data(){
    return {
      diningHallTabs1: [
        {
          id: 1,
          name: 'John Jay',
          openTime: 'Sunday-Thursday 9:30am-9:00pm',
          description: 'Home food favorites, grill, hot entrée, sushi, grain bowls, and a full salad bar (Kosher to-go counter at entrance)',
          imageUrl: 'https://magazine.columbia.edu/sites/default/files/styles/wysiwyg_full_width_image/public/2018-11/Campus-dining.jpg?itok=aM9s4q6K',
        },
         {
          id: 2,
          name: 'JJs',
          openTime: 'Sunday-Thursday 12:00pm-10:00pm Friday-Saturday 12:00pm-11:59am',
          description: 'Featuring Angus Steak Burger, specialty sandwiches, fries, wings, and smoothies',
          imageUrl: 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/KZYWNMBLENEHPHFLAKCJQYFFQU.jpg',
        }

      ],
      diningHallTabs2: [
        {
          id: 1,
          name: 'Ferris Booth Commons',
          openTime: 'Monday-Friday 7:30am-8:00pm Saturday 9:00am-8:00pm',
          description: 'Action station, daily offerings of pasta, pizza, wraps and desserts',
          imageUrl: 'https://dining.columbia.edu/sites/default/files/styles/cu_crop/public/content/FBC%20location%20photos/Roaree-73v2.jpg?itok=h3-Mw9Zt',
        },
         {
          id: 2 ,
          name: 'Faculty House',
          openTime: 'Monday-Friday 11:30am-2:00pm',
          description: 'Dine with a view, daily offering of protein, mac&cheese, dessert, fresh fruit, and more',
          imageUrl: 'https://cdn0.weddingwire.com/vendor/035781/3_2/960/jpg/1334760703934-4thwedding22.jpeg',
        }

      ]

    }
  }

})
</script>
