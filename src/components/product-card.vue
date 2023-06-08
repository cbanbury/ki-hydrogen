<template>
  <div class="product-card">
    <div class="card h-100">
    <div class="card-body">
      <div class="card-title">
        <h2 align="center">{{ title }}</h2>
      </div>
      <div class="card-text">
        <p>{{ description }}</p>
        <p style="margin-bottom: 0">Hydrogen output</p>
        <div class="progress">
          <div
          class="progress-bar"
          role="progressbar"
          style="width: 75%; height: 100px"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100">
          </div>
        </div>
        <p class="pt-2" style="margin-bottom: 0">Coproduct value</p>
        <div class="progress">
          <div
          class="progress-bar"
          role="progressbar"
          style="width: 40%;"
          aria-valuenow="40"
          aria-valuemin="0"
          aria-valuemax="100">
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    hydrogen: Number,
    coproduct: Number,
    description: String
  },
  name: 'ProductCard',
};

</script>