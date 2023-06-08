<template>
  <div class="card h-100 text-center">
    <div class="card-body">
      <div class="card-title">
        <h1 v-html="title"></h1>
      </div>
      <div class="card-text">
        <div class="text-center">
          <img
            width="100"
            height="100"
            class="img-fluid"
            :src="icon"
          />
        </div>
        <p
          class="pt-2"
          v-html="text"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: String,
    icon: String,
    text: String,
  },
};
</script>
