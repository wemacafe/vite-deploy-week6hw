<template lang="">
    <div id="productModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
              <h5 id="productModalLabel" class="modal-title">
                <span v-if="isNew">新增產品</span>
                <span v-else>編輯產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="mb-2">
                    <div class="mb-3">
                      <label for="imageUrl" class="form-label">主要圖片</label>
                      <input type="text" class="form-control"
                             placeholder="請輸入圖片連結" v-model="target.imageUrl">
                    </div>
                    <img class="img-fluid" :src="target.imageUrl" alt="">
                  </div>
                  <h3>多圖新增</h3>
                  <!-- 判斷是否有多張附圖，先check是不是array
                  const fruits = ["Banana", "Orange", "Apple", "Mango"];
                  let result = Array.isArray(fruits);
                  -->
                  <div v-if="Array.isArray(target.imagesUrl)">
                    <!-- 渲染子图層 -->
                    <div class="mb-1" v-for="(image, key) in target.imagesUrl" :key="key">
                      <div class="mb-3">
                        <label for="imageUrl" class="form-label">圖片網址</label>
                        <input v-model="target.imagesUrl[key]" type="text" class="form-control"
                          placeholder="請輸入圖片連結">
                      </div>
                      <img class="img-fluid" :src="image">
                    </div>

                    <!-- 子圖新增或刪除內容，確認array的長度結尾，新增會加上一個empty節點，刪除會移除，用push and pop做 -->
                    <div v-if="!target.imagesUrl.length || target.imagesUrl[target.imagesUrl.length - 1]">
                      <button class="btn btn-outline-primary btn-sm d-block w-100"
                        @click="target.imagesUrl.push('')">
                        新增圖片
                      </button>
                    </div>
                    <div v-else>
                      <button class="btn btn-outline-danger btn-sm d-block w-100" @click="target.imagesUrl.pop()">
                        刪除圖片
                      </button>
                    </div>

                  </div>
                  <!-- 如果都沒有子圖，就建立空array，再push一個空值進去，符合imagesUrl:['',''] -->
                  <div v-else>
                    <button class="btn btn-outline-primary btn-sm d-block w-100" @click="$emit('create-images',target)">
                      新增圖片
                    </button>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" v-model="target.title" type="text" class="form-control" placeholder="請輸入標題">
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="category" class="form-label">分類</label>
                      <input id="category" v-model="target.category" type="text" class="form-control"
                             placeholder="請輸入分類">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">單位</label>
                      <input id="unit" v-model="target.unit" type="text" class="form-control" placeholder="請輸入單位">
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label for="origin_price" class="form-label">原價</label>
                      <input id="origin_price" v-model.number="target.origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價">
                    </div>
                    <div class="mb-3 col-md-6">
                      <label for="price" class="form-label">售價</label>
                      <input id="price" v-model.number="target.price" type="number" min="0" class="form-control"
                             placeholder="請輸入售價">
                    </div>
                  </div>
                  <hr>

                  <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" v-model="target.description" type="text" class="form-control"
                              placeholder="請輸入產品描述">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="description" v-model="target.content" type="text" class="form-control"
                              placeholder="請輸入說明內容">
                    </textarea>
                  </div>
                  <div class="mb-3">
                    <div class="form-check">
                      <input id="is_enabled" v-model="target.is_enabled" class="form-check-input" type="checkbox"
                             :true-value="1" :false-value="0">
                      <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-primary" @click="$emit('update-product', target)">
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    product: {
      type: Object,
      default () { return {} }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      status: {},
      modal: '',
      target: {}
    }
  },
  emits: ['update-product', 'create-images'],
  mixins: [modalMixin],
  watch: {
    product () {
      this.target = this.product
      if (!this.target.imagesUrl) {
        this.target.imagesUrl = []
      }
      if (!this.target.imageUrl) {
        this.target.imageUrl = ''
      }
    }
  }
}
</script>
<style lang="">

</style>
