export default {
  state:{
    items: [
      {
        img: require('@/assets/img/Navigation.svg'),
        name:'карта'
      },
      {
        img: require('@/assets/img/Comment.svg'),
        name:'чаты'
      },
      {
        img: require('@/assets/img/Clock.svg'),
        name:'Мои встречи'
      },
      {
        img: require('@/assets/img/User.svg'),
        name:'Профиль'
      },
    ]
  },
  mutations:{},
  actions:{},
  getters: {
    getItems(state) {
      return state.items
    }
  }
}
