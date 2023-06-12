<template>
  <div class="biomass-electrolysis">
    <div class="container mt-4 pb-4">
      <div class="row">
        <div class="col-auto">
          <h1
            class="header"
            v-html="title"
          ></h1>
        </div>
      </div>
      <div class="row">
        <div class="col-auto">
          <h2
            class="header"
            v-html="subtitle"
          ></h2>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col">
          <h1
            align="center"
            class="header"
          >
          <font-awesome-icon
        class="fa"
        icon="fa-bolt-lightning"
      />
           75%
          </h1>
          <h1
            align="center"
            class="header"
          >
            Less Energy
          </h1>
        </div>
      </div>
      <div clas="row justify-content-center">
        <div
          class="col col-md-6 offset-md-3"
          align="center"
        >
          <p v-html="text"></p>
        </div>
      </div>
    </div>
    <div class="tech-highlight-block">
      <div class="container">
        <div class="row">
          <div
            v-for="feature in features"
            class="col pt-4 col-md-4"
          >
            <FeatureCard
              :title="feature.title"
              :text="feature.text"
              :icon="feature.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../cms/biomass-electrolysis.js';

import FeatureCard from './feature-card.vue';

export default {
  name: 'BiomassElectrolysis',
  components: {
    FeatureCard,
  },
  data() {
    return content;
  },
};
</script>
