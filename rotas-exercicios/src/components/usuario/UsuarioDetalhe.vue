<template>
  <div class="usuario-detalhe">
      <h3>Usuário Detalhe</h3>
      <hr>
       <p><strong>Código</strong>{{id}}</p>
       <!--:to="`/usuario/${id}/editar`"  -->
       <router-link tag="button" primario
        :to="{name: 'editarUsuario', params:{id},
          query:{complemento:'true', lingua:'pt'} }">
         Editar
       </router-link>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>