<template>
  <div class="">
    <div class="person">
      <p> {{ users.length }} персонажей</p>
    </div>
    <div v-for="(user, index) in usersFilter" :key="index" class="user">
      <div class="user__info">
        <div class="ava">
          <img :src="user.image">
        </div>
        <div class="name">
          <p>{{ user.name }}</p>
        </div>
      </div>
      <div @click="iconUsers(index)" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
          <path
            d="M9.625 4H6.825C5.35486 4 4.61979 4 4.05827 4.28611C3.56435 4.53778 3.16278 4.93935 2.91111 5.43328C2.625 5.99479 2.625 6.72986 2.625 8.2V12.75C2.625 13.5637 2.625 13.9706 2.71444 14.3044C2.95717 15.2103 3.66473 15.9178 4.5706 16.1606C4.90441 16.25 5.31127 16.25 6.125 16.25V18.2936C6.125 18.7598 6.125 18.9929 6.22058 19.1127C6.30369 19.2168 6.42974 19.2774 6.56297 19.2772C6.71617 19.2771 6.89821 19.1314 7.26229 18.8402L9.34956 17.1704C9.77595 16.8292 9.98915 16.6587 10.2266 16.5374C10.4372 16.4298 10.6614 16.3511 10.8931 16.3036C11.1542 16.25 11.4272 16.25 11.9733 16.25H13.3C14.7701 16.25 15.5052 16.25 16.0667 15.9639C16.5607 15.7122 16.9622 15.3107 17.2139 14.8167C17.5 14.2552 17.5 13.5201 17.5 12.05V11.875M17.6062 3.89384C18.6313 4.91897 18.6313 6.58103 17.6062 7.60616C16.581 8.63128 14.919 8.63128 13.8938 7.60616C12.8687 6.58103 12.8687 4.91897 13.8938 3.89384C14.919 2.86872 16.581 2.86872 17.6062 3.89384Z"
            stroke="#7A7D85" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <a @click="remuveSearchValue" v-if="search !== ''" href="#">
      <div class="btn btn__search">
        Сбросить поиск
      </div>
    </a>
    <div class="button__next">
      <div @click="nextPage()" class="btn btnPrimary">
        <p>Показать еще</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
          <g clip-path="url(#clip0_3_203)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.2902 13.574C10.3567 13.6514 10.4095 13.7434 10.4455 13.8446C10.4815 13.9458 10.5 14.0543 10.5 14.1639C10.5 14.2735 10.4815 14.382 10.4455 14.4832C10.4095 14.5845 10.3567 14.6764 10.2902 14.7538L6.00541 19.7527C5.93909 19.8303 5.86027 19.8918 5.77351 19.9338C5.68676 19.9758 5.59374 19.9975 5.49981 19.9975C5.40589 19.9975 5.31287 19.9758 5.22611 19.9338C5.13936 19.8918 5.06054 19.8303 4.99421 19.7527L0.709427 14.7538C0.575333 14.5973 0.5 14.3852 0.5 14.1639C0.5 13.9427 0.575333 13.7305 0.709427 13.574C0.843523 13.4176 1.02539 13.3297 1.21503 13.3297C1.40467 13.3297 1.58654 13.4176 1.72064 13.574L5.49981 17.9847L9.27899 13.574C9.34533 13.4965 9.42413 13.4349 9.51089 13.3929C9.59766 13.3509 9.69066 13.3293 9.7846 13.3293C9.87853 13.3293 9.97154 13.3509 10.0583 13.3929C10.1451 13.4349 10.2239 13.4965 10.2902 13.574Z"
                  fill="#3C4061"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.50014 0C5.68954 1.28713e-08 5.87118 0.0877784 6.00511 0.244025C6.13902 0.400272 6.21427 0.612187 6.21427 0.833152V18.3293C6.21427 18.5503 6.13902 18.7622 6.0051 18.9185C5.87118 19.0747 5.68954 19.1625 5.50014 19.1625C5.31074 19.1625 5.1291 19.0747 4.99517 18.9185C4.86124 18.7622 4.78601 18.5503 4.78601 18.3293V0.833152C4.78601 0.612187 4.86124 0.400272 4.99517 0.244025C5.1291 0.0877784 5.31074 -1.28713e-08 5.50014 0Z"
                  fill="#3C4061"/>
          </g>
          <defs>
            <clipPath id="clip0_3_203">
              <rect width="10" height="20" fill="white" transform="translate(0.5)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    search: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      users: [],
      page: {
        current: 1,
        length: 5,
      },
    };
  },
  created() {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=19")
      .then((response) => {
        this.users = response.data.results;

      });

  },
  computed: {
    usersFilter() {
      let array = this.users,
        search = this.search;
      if (!search) return this.users
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });
      ;

      search = search.trim().toLocaleLowerCase();

      array = array.filter(function (item) {
        if (item.name.toLocaleLowerCase().indexOf(search) !== -1) {
          return item;
        }
      });
      return array;
    },
  },
  methods: {
    remuveSearchValue() {
      this.search = ''
    },
    prevPage() {
      if (this.page.current > 1) {
        this.page.current -= 1;
      }
    },
    iconUsers(index) {
      alert(this.users[index].species)
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length) {
        this.page.current += 1;
      }
    },
  },
};
</script>

<style scoped>
.user {
  border-radius: 15px;
  border: 1px solid #F4F5F5;
  background: var(--white, #FFF);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  max-width: 375px;
}

.user__info {
  display: flex;
  align-items: center;
}

.name {
  margin-left: 20px;
}

.ava img {
  width: 50px;
  height: 50px;
  border-radius: 80px;
}

.person {
  margin-bottom: 10px;
  color: #C1C2C7;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.327px;
  display: flex;
  justify-content: center;
}

.btn {
  display: flex;
  justify-content: space-between;
  color: #3C4061;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.327px;
  padding: 20px 50px;
  border-radius: 10px;
  border: 1px solid #F4F5F5;
  background: var(--white, #FFF);
  margin-bottom: 38px;
  cursor: pointer;
}

.btn__search {
  background: #CB99FA;
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 120% */
  justify-content: center;
  margin-bottom: 10px;
}

.icon {
  cursor: pointer;
}
</style>
