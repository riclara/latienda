<template>
  <q-dialog v-model="show">
    <q-card>
      <q-card-section>
        <div class="text-h6">Producto Agregado</div>
      </q-card-section>
      <div class="row">
        <div class="col-6">
          <img class="lphoto" :src="product.photo">
        </div>
        <div class="col-6">
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ product.name }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ product.price }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ product.qty }}</q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon color="amber" name="local_movies" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ subtotal }}</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </div>
      </div>

      <q-separator />

      <q-card-actions align="center">
        <q-btn color="white" flat text-color="black" label="Seguir comprando" @click="show = false" />
        <q-btn color="primary" label="Agregar al carro" @click="$emit('add', item)" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  props: {
    product: Object,
    subtotal: {
      type: Number,
      default: 0
    }
  },
  watch: {
    product () {
      this.show = true
    }
  },
  data () {
    return {
      show: false,
      item: this.product
    }
  }
}
</script>
<style>
.lphoto {
  width: 100%;
}
</style>
