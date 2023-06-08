<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <h1 class="header">
          Maximising Value
        </h1>
        <h2>Choice of co-products</h2>
        <p>
          Unlike other technologies, we offer solutions to suit your business needs with the option to extract value from waste in established chemical markets, or emerging markets such as carbon sequestration and liquid hydrogen carriers.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <ProductCard
          title="GreenChem"
        />
      </div>
      <div class="col-4">
        <ProductCard
          title="Balanced"
        />
      </div>
      <div class="col-4">
        <ProductCard
          title="H2 Max"
        />
      </div>
    </div>
  </div>
</template>

<script>

import ProductCard from './product-card.vue';

export default {
  name: 'Products',
  components: {
    ProductCard,
  },
};

</script>
