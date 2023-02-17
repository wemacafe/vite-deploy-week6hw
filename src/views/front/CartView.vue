<template>
    <div class="text-end">
    <button class="btn btn-outline-danger" type="button"
    @click="deleteAllCarts()"
    >清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm"
            @click="deleteItem(item)"
            :disabled="item.id===loadingItem">

              x
            </button>
          </td>
          <td>
            {{ item.product.title }}

          </td>
          <td>
            <div class="input-group input-group-sm">
            <select name="" id="" class="form-select" v-model="item.qty"
            :disabled="item.id===loadingItem"
            @change="modifyCart(item)"
            >
                <option :value="i" v-for="i in 20" :key="i+12345">{{i}}</option>
            </select>
            </div>
          </td>
          <td class="text-end">
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
  <!-- 表單 -->
  <div class="my-5 row justify-content-center">
            <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></v-field>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">收件人姓名</label>
                <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label">收件人電話</label>
                <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
                <error-message name="電話" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">收件人地址</label>
                <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required" v-model="form.user.address"></v-field>
                <error-message name="地址" class="invalid-feedback"></error-message>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-danger">送出訂單</button>
              </div>
            </v-form>
          </div>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      apiUrl: VITE_APP_URL,
      apiPath: VITE_APP_PATH,
      products: [],
      productId: '',
      cart: {},
      loadingItem: '', // 存id
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${this.apiUrl}/v2/api/${this.apiPath}/cart`)
        .then(res => {
          console.log('取得購物車:', res.data.data)
          this.cart = res.data.data
        })
    },
    modifyCart (item) {
      // 要送入購物車的id和產品id，送入的一包item裡，就會包函product資料
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http.put(`${this.apiUrl}/v2/api/${this.apiPath}/cart/${item.id}`, { data })
        .then(res => {
          console.log('更新購物車:', res.data)
          this.getCart()
          this.loadingItem = ''
        })
    },
    deleteItem (item) {
      this.loadingItem = item.id
      this.$http.delete(`${this.apiUrl}/v2/api/${this.apiPath}/cart/${item.id}`)
        .then(res => {
          console.log('刪除購物車:', res.data)
          this.getCart()
          this.loadingItem = ''
        })
    },
    deleteAllCarts () {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/carts`
      this.$http.delete(url).then((response) => {
        alert(response.data.message)
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    },
    createOrder () {
      const url = `${this.apiUrl}/v2/api/${this.apiPath}/order`
      const order = this.form
      this.$http.post(url, { data: order }).then((response) => {
        alert(response.data.message)
        this.$refs.form.resetForm()
        this.getCart()
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>
