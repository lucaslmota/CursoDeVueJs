<template>
  <div class="usuario-editar">
      <h3>Usuário Editar</h3>
      <p><strong>Código</strong>{{id}}</p>
      <p><strong>Código</strong>{{ $route.query.completo ? 'Sim' : 'Nao'}}</p>
      <p><strong>Código</strong>{{ $route.query.lingua}}</p>
  </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style>

</style>