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
            <div class="row p-4">
              <div class="col col-md-6 my-auto">
                <div class="row">
                  <div class="col">
                    <h1
                      class="callout"
                      align="center"
                      v-html="callout"
                    ></h1>
                  </div>
                </div>
                <div class="row">
                  <h1
                    class="callout"
                    align="center"
                  >
                    <font-awesome-icon
                      class="fa px-2"
                      icon="fa-bolt-lightning"
                    />


                    <font-awesome-icon
                      class="fa px-2"
                      icon="fa-bolt-lightning"
                    />

                    <font-awesome-icon
                      class="fa px-2"
                      icon="fa-bolt-lightning"
                    />
                  </h1>
                </div>

                <!-- <div class="row justify-content-center"> -->
                <div class="row">
                  <div class="col">
                    <h1
                      align="center"
                      v-html="callout2"
                    ></h1>
                  </div>
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
