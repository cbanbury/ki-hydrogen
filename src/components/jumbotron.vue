<template>
  <div class="jumbotron">
    <div class="container pb-4 pt-4">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h1>{{ title }}</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col text-center">
          <a
            target="_blank"
            :href="cta.url"
            :aria-label="cta.text"
          ><font-awesome-icon
            class="fa-6x"
            icon="fa-solid fa-circle-play"
          /></a>
          <p>{{ cta.text }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2 align="center">
            {{ subtitle }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../cms/jumbotron';

export default {
  name: 'Jumbotron',
  data() {
    return content;
  },
};
</script>
