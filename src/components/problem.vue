<template>
  <div class="container pt-4">
    <div class="row pt-4">
      <div class="col">
        <h1 class="header">
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2 class="header">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <div class="row pt-2 justify-content-center">
      <div class="col-sm-12 col-md-6">
        <p align="center">
          {{ text1 }}
        </p>
        <p class="text-center callout">
          Over <strong>830 million tonnes</strong> CO2
        </p>
        <p align="center">
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
