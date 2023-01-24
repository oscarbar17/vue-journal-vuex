<template>
  <div class="d-flex justify-content-center">
        <p class="align-self-center">No hay nadie seleccionado</p>
  </div>

  <FabButton/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default{
    components:{
        FabButton: defineAsyncComponent(() => import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>