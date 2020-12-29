<template>
  <div class="usuario-lista">
      <h3>Lista de Usários</h3>
      <ul class="lista">
          <router-link tag="li" to="/usuario/1" 
            class="item-lista"> Usuário1</router-link>
          <router-link  tag="li" to="/usuario/2"
            class="item-lista">Usuário2</router-link>
          <router-link  tag="li" to="/usuario/3"
            class="item-lista">Usuário3</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>