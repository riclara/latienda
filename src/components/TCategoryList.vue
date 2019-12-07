<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-grey-2"
  >
    <q-list>
      <q-item-label header>Categorias</q-item-label>
      <q-item v-for="category in categories" :key="category.id" clickable @click="setCategory(category)">
        <q-item-section>
          <q-item-label>{{ category.name }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-drawer>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'TCategoryList',
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  created () {
    this.getCategories()
  },
  watch: {
    ldo (value) {
      console.log('value: ', value)
      this.leftDrawerOpen = this.ldo
    }
  },
  computed: {
    ...mapState('common', {
      ldo: 'leftDrawerOpen',
      categories: 'categories',
      category: 'category'
    })
  },
  methods: {
    ...mapActions('common', ['getCategories']),
    ...mapMutations('common', ['setCategory'])
  }
}
</script>
