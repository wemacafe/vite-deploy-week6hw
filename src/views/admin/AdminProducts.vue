<template>
      <Loading :active="isLoading" :z-index="1060"></Loading>
      <div class="text-end mt-4">
          <button class="btn btn-primary" @click="callModal('new')">
            建立新的產品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="120">
                分類
              </th>
              <th>產品名稱</th>
              <th width="120">
                原價
              </th>
              <th width="120">
                售價
              </th>
              <th width="100">
                是否啟用
              </th>
              <th width="120">
                編輯
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td>{{ item.title }}</td>
              <td class="text-end">
                {{ item.origin_price }}
              </td>
              <td class="text-end">
                {{ item.price }}
              </td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-fail">未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm" @click="callModal('edit',item)">
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm" @click="callModal('delete',item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
      <!-- ProductModal -->
    <ProductModal
      @update-product="updateProduct"
      @create-images="createImages"
      :target="tempProduct"
      :isNew="isNew"
      ref="productModal"
    />
    <!-- DelModal -->
    <DelModal
    :target="tempProduct"
    ref="delModal"
    @del-item="delProduct">
  </DelModal>

  </template>

<script>
import Pagination from '@/components/PaginationView.vue'
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelProductModal.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  props: ['token'],
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false,
      pagination: {},
      modal: {
        editModal: '',
        delModal: ''
      },
      currentPage: 1
    }
  },
  components: {
    Pagination,
    ProductModal,
    DelModal
  },
  methods: {
    delProduct () {
      const url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        alert(response.data.message)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts(this.currentPage)
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    getProducts (page = 1) {
      // API
      const api = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(api)
        .then((response) => {
          this.products = response.data.products
          this.pagination = response.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },
    checkAdmin () {
      const url = `${VITE_APP_URL}/api/user/check`
      this.$http.post(url)
        .then(() => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    },

    callModal (action, item) {
      const productComponent = this.$refs.productModal
      const delComponent = this.$refs.delModal
      switch (action) {
        case 'new':
          this.tempProduct = {
            imagesUrl: []
          }
          this.isNew = true
          // productModal.show()
          productComponent.openModal()
          break
        case 'edit':
          this.isNew = false
          this.tempProduct = { ...item }
          // productModal.show()
          productComponent.openModal()
          break
        case 'delete':
          this.tempProduct = { ...item }
          // delProductModal.show()
          delComponent.openModal()
          break
        default:
        // catch error
      }
    },
    updateProduct (item) {
      this.tempProduct = item
      let url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        url = `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }

      this.$http[http](url, { data: this.tempProduct }).then((response) => {
        alert(response.data.message)
        // productModal.hide()
        const productComponent = this.$refs.productModal
        productComponent.hideModal()
        this.getProducts()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    createImages (item) {
      this.tempProduct = item
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
