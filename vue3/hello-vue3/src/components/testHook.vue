<template>
  <div @click="f1">{{count}}</div>
  <div >{{publishedBooksMessage}}</div>
</template>

<script setup>
import { ref ,onMounted,defineExpose,computed,reactive,watch} from 'vue'

let props = defineProps({
  msg: String
})
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// onMounted(() => {
//   console.log('2')
// })
// onMounted(() => {
//   console.log('3'); 
//   console.log(props.msg);
// })
// onMounted(() => {
//   console.log('1')
// });
const x = ref(0)
const y = ref(0)
let count = ref(0);
let  f1= ()=>{
  console.log('f1')
  count.value++;
  author.books.pop();
  // y.value++;
  // x.value--;
  obj.count++;
}
defineExpose({
  f1
})



// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

const obj = reactive({ count: 0 })

// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)





</script>


<style>

</style>