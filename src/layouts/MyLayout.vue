<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          La Tienda
        </q-toolbar-title>

        <q-avatar color="red" text-color="white">
          <q-icon  name="local_grocery_store" />
        </q-avatar>

      </q-toolbar>
    </q-header>

    <t-category-list />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import TCategoryList from 'components/TCategoryList.vue'

export default {
  name: 'MyLayout',
  components: { TCategoryList },
  methods: {
    ...mapMutations('common', ['toggleLeftDrawerOpen'])
  }
}
</script>
