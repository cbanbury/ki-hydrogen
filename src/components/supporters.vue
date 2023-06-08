<template>
  <div class="container pt-4">
    <div class="row">
      <div class="col">
        <h2 align="center">
          Supported By
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="lc-block">
          <div
            id="carouselLogos"
            class="carousel slide pt-5 pb-4"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner px-5">
              <div class="carousel-item active">
                <div class="row justify-content-center">
                  <div class="col align-self-center">
                    <img
                      class="d-block px-3 mb-3 w-50"
                      src="https://ik.imagekit.io/elementone/Undaunted_Greenhouse_purple-1.png?updatedAt=1686069247713"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center">
                  <div class="col-6 col-lg-2 align-self-center">
                    <img
                      class="d-block px-3 mb-3 w-100"
                      src="https://ik.imagekit.io/elementone/carbon13-logo.webp?updatedAt=1686069247946"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-center">
                  <div class="col-6 col-lg-2 align-self-center">
                    <img
                      class="d-block px-3 mb-3 w-100"
                      src="https://ik.imagekit.io/elementone/bham-energy-institute-logo.jpg?updatedAt=1686069247510"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <!--
	<ol class="carousel-indicators position-relative mt-3">
		<li data-bs-target="#carouselLogos" data-bs-slide-to="0" class="active bg-dark carousel-control-prev-icon"></li>
		<li data-bs-target="#carouselLogos" data-bs-slide-to="1" class="bg-dark"></li>
	</ol>
	-->

            <div class="w-100 px-3 text-center mt-4">
              <a
                class="carousel-control-prev position-relative d-inline me-4"
                href="#carouselLogos"
                data-bs-slide="prev"
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="text-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                <span class="visually-hidden">Previous</span>
              </a>
              <a
                class="carousel-control-next position-relative d-inline"
                href="#carouselLogos"
                data-bs-slide="next"
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="text-dark"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
          </div>
        </div><!-- /lc-block -->
      </div><!-- /col -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Supporters',
};
</script>
