<template>
  <div class="wrapper">
    <div class="_container">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <Search @search="search = $event" placeholder="Поиск"/>
      <div class="users">
        <Users :search="search"/>
      </div>
      <Menu/>
    </div>
  </div>
</template>

<script>
import Search from '@/components/TheSearch.vue'
import Users from '@/components/TheUserCard.vue'
import Menu from '@/components/TheMenu.vue'

export default {
  components: {Search, Users, Menu},
  data() {
    return {
      title: 'Персонажи',
      search:''
    };
  },

};
</script>

<style scoped>

.title {
  text-align: center;
  margin-bottom: 15px;
}
.title p {
  color: #221A51;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
}

</style>
