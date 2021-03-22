<template>
  <div class="main-app">
    <Navbar />

    <router-view name="vuexTest"></router-view>
    <router-view name="form" @search="fetchCocktail"></router-view>
    <router-view name="info" :items="cocktailData"></router-view>
    <router-view name="details" :items="cocktailData"></router-view>
    <router-view name="cocktails" :items="cocktailData"></router-view>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      cocktailData: [],
      query: "",
    };
  },

  mounted() {
    this.fetchCocktail();
  },

  methods: {
    fetchCocktail(searchText = "") {
      this.query = searchText;

      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`
      )
        .then((res) => res.json())
        .then((data) => (this.cocktailData = data.drinks))
        //.then((data) => (console.log(data)))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
