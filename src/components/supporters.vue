<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <h2 align="center">
          Supported By
        </h2>
      </div>
    </div>
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide d-md-none d-lg-none"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div class="carousel-inner">
        <div
          v-for="supporter in supporters"
          class="carousel-item"
          :class="supporter.status"
        >
          <a
            class="d-flex justify-content-center"
            :href="supporter.url"
            target="_blank"
          >
            <img
              :src="supporter.logo"
              class="d-block"
              :alt="supporter.name"
              height="60"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="row pt-2 d-none d-md-flex">
      <div
        v-for="supporter in supporters"
        class="col text-center"
      >
        <a
          :href="supporter.url"
          target="_blank"
          class="text-center"
        >
          <img
            height="75"
            :src="supporter.logo"
            :alt="supporter.name"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Supporters',
  data() {
    return {
      supporters: [
        {
          name: 'Carbon13',
          url: 'https://carbonthirteen.com/',
          logo: 'https://ik.imagekit.io/elementone/carbon13-logo.webp?updatedAt=1686680388058',
        },
        {
          name: 'Undaunted, The Greenhouse',
          url: 'https://www.imperial.ac.uk/climate-change-innovation/the-greenhouse/',
          logo: 'https://ik.imagekit.io/elementone/Undaunted_Greenhouse_purple-1.png?updatedAt=1686680387837',
          status: 'active',
        },
        {
          name: 'Birmingham Energy Institute',
          url: 'https://www.birmingham.ac.uk/research/energy/index.aspx',
          logo: 'https://ik.imagekit.io/elementone/bham-energy-institute-logo.jpg?updatedAt=1686069247510',
        },
      ],
    };
  },
};
</script>
