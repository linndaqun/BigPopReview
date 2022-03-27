<template>
    <q-layout view="lHh Lpr lFf">
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
                <q-tabs>
                <q-route-tab
                to="/camera"
                icon="camera"
                name = "camera"/>
                </q-tabs>
            </q-toolbar>
            <div class="q-px-lg q-pt-xl q-mb-md">
                <div class="text-h3">Home</div>
                <div class="text-subtitle1">Sunday, March 26th</div>
            </div>
            <div>
                <q-img
                    src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/columbia-gs-alma-mater-butler-library.943x530.2.jpg?itok=KpK17OGr"
                    class="header-image absolute-top"
                />
            </div>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            :width="250"
            :breakpoint="600"
        >
            <q-scroll-area
                style="height: calc(100% - 140px); margin-top: 140px; border-right: 1px solid #ddd"
            >
                <q-list padding>
                    <q-item clickable v-ripple> </q-item>

                    <q-item active clickable v-ripple>
                        <q-item to="/comment" exact>
                            <q-item-section avatar>
                                <q-icon name="star" />
                            </q-item-section>

                            <q-item-section>
                                Comment
                            </q-item-section>
                        </q-item>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="drafts" />
                        </q-item-section>

                        <q-item-section>
                            Inbox
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section avatar>
                            <q-icon name="help" />
                        </q-item-section>

                        <q-item-section>
                            Help
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-scroll-area>

            <q-img
                class="absolute-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgHbIkXmAmxQ2w1EItrSQYzKelF2RbbvQGW39F_YLPvG_f9HEH-ItIUUZfDl1nLjVVc3g&usqp=CAU"
                style="height: 192px"
            >
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png"
                        />
                    </q-avatar>
                    <div class="text-weight-bold">Linda Pang</div>
                    <div>Uni: sp4049</div>
                    <div>Swipes: 6</div>
                    <div>Dining Dollars: $56</div>
                </div>
            </q-img>
        </q-drawer>

        <q-footer elevated>
            <q-toolbar>
                <q-toolbar-title>Footer</q-toolbar-title>
            </q-toolbar>
        </q-footer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from '../components/EssentialLink.vue';

const linksList = [
    {
        title: 'Docs',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
    },
    {
        title: 'Github',
        caption: 'github.com/quasarframework',
        icon: 'code',
        link: 'https://github.com/quasarframework',
    },
    {
        title: 'Discord Chat Channel',
        caption: 'chat.quasar.dev',
        icon: 'chat',
        link: 'https://chat.quasar.dev',
    },
    {
        title: 'Forum',
        caption: 'forum.quasar.dev',
        icon: 'record_voice_over',
        link: 'https://forum.quasar.dev',
    },
    {
        title: 'Twitter',
        caption: '@quasarframework',
        icon: 'rss_feed',
        link: 'https://twitter.quasar.dev',
    },
    {
        title: 'Facebook',
        caption: '@QuasarFramework',
        icon: 'public',
        link: 'https://facebook.quasar.dev',
    },
    {
        title: 'Quasar Awesome',
        caption: 'Community Quasar projects',
        icon: 'favorite',
        link: 'https://awesome.quasar.dev',
    },
];

export default defineComponent({
    name: 'MainLayout',

    components: {
        // eslint-disable-next-line vue/no-unused-components
        EssentialLink,
    },

    setup() {
        const leftDrawerOpen = ref(false);

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
});
</script>

<style lang="scss">
.header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.5;
    filter: grayscale(20%);
}
</style>
