<template lang="">
    <form id="form" class="form-signin" @submit.prevent="login">
              <div class="form-floating mb-3">
                <!-- vue 用 v-model做雙向綁定，會和後端互相引響 -->
                <input type="email" class="form-control" v-model="user.username" id="getusername"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <!-- 因為要包到axios裡的user去做驗證，就直接把user拆成2個element做綁定就可以了 -->
                <input type="password" class="form-control" v-model="user.password" id="getpassword"
                  placeholder="Password" required>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
</template>
<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // const api = 'https://vue3-course-api.hexschool.io/v2/admin/signin';
      // 處理axios
      const url = VITE_APP_URL // 請加入站點
      // 用post請求要帶，查文件
      this.$http.post(`${url}/v2/admin/signin`, this.user)
      // 成功的話就抓cookie，並轉到相關頁面
        .then((response) => {
          // 存token和expired
          const { token, expired } = response.data
          // 寫入 cookie token
          // expires 設置有效時間
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          // 用catch來抓錯，console和ui都吐一下資料
        //   console.dir(err)
          alert(err.response.data.message)
        })
    }
  }
}
</script>
