<template>
    這是DashBoard後台
    <router-link to="/admin/products">後台產品列表</router-link> |
    <router-link to="/admin/orders">後台訂單列表</router-link> |
    <router-link to="/">回前台</router-link> |
    <a href="" @click.prevent="logout">登出</a>
    <hr>
    <RouterView></RouterView>
    </template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env
export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      // 把值拿掉
      document.cookie = `hexToken=;expires=${new Date()}`
      this.$router.push('/login')
    },
    checkAdmin () {
      const url = `${VITE_APP_URL}/v2/api/user/check`
      this.$http.post(url)
        .then((res) => {
          console.log('login:', res)
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    // 取出 Token
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    // axios.defaults.headers.common['Authorization'] = token;
    console.log('token:', token)
    this.checkAdmin()
  }
}
</script>
