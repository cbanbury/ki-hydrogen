<template>
  <div class="energy-block pt-4 pb-4">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-auto pb-4">
          <h1 class="header">
            {{ title }}
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col col-md-6 offset-md-3">
          <div class="card">
            <div class="row p-4 h-100">
              <div class="col col-md-6 my-auto">
                <div class="text-center">
                  <img width="128" src="https://ik.imagekit.io/elementone/speedometer__1_.png?updatedAt=1686607229204">
                </div>
              </div>
              <div class="col col-md-6">
                <p
                  class="card-text"
                  v-html="text"
                ></p>
                <p
                  class="card-text"
                  v-html="text2"
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from '../cms/energy-problem.js';

export default {
  name: 'EnergyProblem',
  data() {
    return content;
  },
};
</script>
