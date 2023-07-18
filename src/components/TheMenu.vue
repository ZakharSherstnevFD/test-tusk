<template>
  <div class="menu">
    <div v-for="item in this.$store.getters.getItems" :key="item.name" class="menu__item">
      <a href="#">
        <img :src="item.img" :alt="item.name">
        <p>{{ item.name }}</p>
      </a>
    </div>
  </div>
</template>


<style scoped>
.menu {
  border-radius: 40px 40px 30px 30px;
  background: var(--white, #FFF);
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
  display: flex;
  justify-content: space-between;
  padding: 18px;
}

.menu__item a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu__item p {
  color: var(--black, #1D1D1D);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.327px;
}
</style>
<script setup>
</script>
