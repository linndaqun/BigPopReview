<template>
  <q-page class="constrain q-pa-md">
      <div >

      <div class="text-h6" style="height: 30px">
        <p class="text-red-6">Recommended for you:</p>
      </div>
        <div class="col">
<q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="200px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4.5 " height="100px" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/4/0/0132293_Artichoke-Spinach-Dip_s4x3.jpg.rend.hgtvcom.616.462.suffix/1390503632247.jpeg" />
           <div class="text-h8">
           creamy spinach
           Ferris
          </div>
          <q-img class="rounded-borders col-4.5 " height="100px" src="https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg" />
                    <div class="text-h8">
           Cheese cake Ferris
          </div>
          <q-img class="rounded-borders col-4.5 " height="100px" src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps40469__SD143206B04_02_5b.jpg" />
            <div class="text-h8">
           Chicken Burger
           JJs
           </div>

        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">

        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders col-4.5" height="100px" src="https://www.seriouseats.com/thmb/S_LW9Oa3pkmywLUd-YsNa-WsiNs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__06__20200602-western-denver-omelette-daniel-gritzer-8-20ef3336fd4b44f68987badfde08a71a.jpg" />
             <div class="text-h8">
           Omlette
           John Jay
          </div>
          <q-img class="rounded-borders col-4.5" height ="100px" src="https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg" />
             <div class="text-h8">
           Pasta
           Faculty House
          </div>
          <q-img class="rounded-borders col-4.5" height = "100px" src="https://www.goodforyouglutenfree.com/wp-content/uploads/2017/02/Gluten-free-sushi-rolls-header.jpg" />
             <div class="text-h8">
           Sushi
           John Jay
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
        </div>
      </div>

     <div class="row q-col-gutter-md">
      <div class="col-6">
        <q-card
      v-for="dininghalltab in diningHallTabs1"
      :key="dininghalltab.id"
      :to="'/JohnJay'"
      class="card-dininghalltab q-mb-md"
      bordered
      flat
    >
      <q-img
        :src="dininghalltab.imageUrl"
      />

      <q-tabs v-model="tab" class="text">
         <q-route-tab
         label = "View"
         to="/JohnJay"/>
      </q-tabs>

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
        <q-tabs v-model="tab">
         <q-route-tab
         to="/comment"
          icon="comment"/>
      </q-tabs>

      <q-tabs v-model="tab" class="text">
         <q-route-tab
         to="/comment"
          label ="Comment"/>
      </q-tabs>

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

      <q-tabs v-model="tab" class="text">
         <q-route-tab
         label = "View"
         to="/JohnJay"/>
      </q-tabs>

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
        <q-tabs v-model="tab">
         <q-route-tab
         to="/comment"
          icon="comment"/>
      </q-tabs>

      <q-tabs v-model="tab" class="text">
         <q-route-tab
         to="/comment"
          label ="Comment"/>
      </q-tabs>

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
      slide: defineComponent(1),
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
