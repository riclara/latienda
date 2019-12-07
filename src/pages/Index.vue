<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card col-3" v-for="product in prds" :key="product.id">
        <img :src="product.photo" >

        <q-card-section>
          <div class="text-h6">{{ product.name }}</div>
          <div class="text-subtitle2">{{ product.price}}</div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="center">
          <q-input dense
            v-model="product.qty"
            type="number"
            filled
            style="max-width: 100px"
          />
          <q-btn color="purple" @click="added = product" glossy icon="local_grocery_store" />
        </q-card-actions>
      </q-card>

      <t-product-modal  :subtotal="subtotal" :product="added" @add="addItem" />
    </div>

  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TProductModal from 'components/TProductModal.vue'

export default {
  name: 'PageIndex',
  components: { TProductModal },
  data () {
    return {
      added: {},
      cart: {},
      prds: []
    }
  },
  watch: {
    category (val) {
      if (val && val.id) {
        this.getProductsByCategory(val.id)
      }
    },
    products () {
      this.prds = this.products.map(itm => itm)
    }
  },
  computed: {
    ...mapState('common', ['category', 'products']),
    subtotal () {
      if (!Object.keys(this.cart).length) return 0
      return 1
    }
  },
  methods: {
    ...mapActions('common', ['getProductsByCategory']),
    addItem (item) {
      this.cart[item.id] = item
    }
  }
}
</script>
