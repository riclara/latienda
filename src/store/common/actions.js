import { axiosInstance } from 'boot/axios'

export function getCategories (context) {
  axiosInstance.get('product-category')
    .then((response) => {
      context.commit('setCategories', response.data)
    })
    .catch((error) => {
      console.error(error.response)
    })
}

export function getProductsByCategory (context, category) {
  axiosInstance.get('product')
    .then((response) => {
      console.log(response.data)
      context.commit('setProducts', response.data)
    })
    .catch((error) => {
      console.error(error.response)
    })
}
