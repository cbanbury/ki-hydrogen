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
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="..."
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="..."
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="..."
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row pt-2 d-none d-md-flex">
      <div class="col text-end">
        <a
          href="https://carbonthirteen.com/"
          target="_blank"
          class="text-center"
        >
          <img
            height="75"
            src="https://ik.imagekit.io/elementone/carbon13-logo.webp?updatedAt=1686069247946"
            alt="Carbon13"
          />
        </a>
      </div>
      <div class="col text-center">
        <a
          href="https://www.imperial.ac.uk/climate-change-innovation/the-greenhouse/"
          target="_blank"
        ><img
          height="75"
          src="https://ik.imagekit.io/elementone/Undaunted_Greenhouse_purple-1.png?updatedAt=1686069247713"
          alt="Undaunted, The Greenhouse"
        /></a>
      </div>
      <div class="col">
        <a
          href="https://www.birmingham.ac.uk/research/energy/index.aspx"
          target="_blank"
        >
          <img
            height="75"
            src="https://ik.imagekit.io/elementone/bham-energy-institute-logo.jpg?updatedAt=1686069247510"
            alt="Birmingham Energy Institute"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Supporters',
};
</script>
