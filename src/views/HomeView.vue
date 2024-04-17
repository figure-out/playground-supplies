<template>
  <main>
    <h2>Welcome to Metre Tonne!</h2>
    <p>
      Metre Tonne is your one-stop shop for all our your playground supply needs! From slides and
      ladders to ground coverings, we have everything you need to create the ultimate outdoor play
      space for all ages.
    </p>
    <p>
      With high-quality products, competitive prices and fast shipping, Metre tonne makes it easy to
      get what you need to create a safe and exciting play area.
    </p>
    <hr />
    <br />
    <h3>Product Categories</h3>
    <div class="home__categories">
      <div class="home__category">
        <div class="home__category-details">
          <h4>Bark Chips</h4>
          <div class="home__category-image">
            <img src="/images/image3.jpg" alt="" />
          </div>
        </div>
        <router-link to="/products/bark" class="home__category_link">
          VIEW BARK CHIPS >
        </router-link>
      </div>

      <div class="home__category">
        <div class="home__category-details">
          <h4>Slides</h4>
          <div class="home__category-image">
            <img src="/images/image5.jpg" alt="" />
          </div>
        </div>
        <router-link to="/products/slide" class="home__category_link"> VIEW SLIDES > </router-link>
      </div>

      <div class="home__category">
        <div class="home__category-details">
          <h4>Bridges</h4>
          <div class="home__category-image">
            <img src="/images/image4.jpg" alt="" />
          </div>
        </div>
        <router-link to="/products/bridge-and-ladder" class="home__category_link">
          VIEW BRIDGES >
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.home__categories {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.home__category {
  border: 1px solid var(--color-secondary);
  border-radius: 0.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-basis: 15rem;
}

.home__category-details {
  padding: 1rem;
  margin-bottom: 2rem;
  flex: 1;

  img {
    max-width: 5rem;
    height: auto;
  }
}

.home__category-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.home__category_link {
  background-color: var(--color-secondary);

  padding: 1rem;
  color: var(--color-text-light);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
