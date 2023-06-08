<template>
  <div class="process">
    <div style="background-color: #E9F3FA !important">
      <div class="container pt-2">
        <div class="row">
          <div class="col">
            <h1
              class="header"
              align="center"
            >
              Enabling Industrial Decarbonisation
            </h1>
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
    <div style="background-color: #E9F3FA !important">
      <div class="container">
        <div class="row justify-content-center">
          <ProcessSVG />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProcessSVG from './process-svg.vue';

export default {
  name: 'Process',
  components: {
    ProcessSVG,
  },
};
</script>
