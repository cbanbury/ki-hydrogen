<template>
  <div class="container pt-4">
    <div class="row pt-4">
      <div class="col text-center text-md-start">
        <h1 class="header">
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col text-center text-md-start">
        <h2 class="header">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <div class="row pt-2 pb-4">
      <div class="col col-md-8 offset-md-2">
        <p>
          {{ text1 }}
        </p>
        <p class="text-center callout">
          Over <strong>830 million tonnes</strong> CO2
        </p>
        <p>
          {{ text2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../cms/problem.js';

export default {
  name: 'Problem',
  data() {
    return content;
  },
};
</script>
