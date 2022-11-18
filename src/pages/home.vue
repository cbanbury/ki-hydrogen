<template>
  <div>
    <cookie-consent/>
    <div class="bg-image"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card home-cta text-center p-3">
            <div class="row">
              <div class="col-12">
                <Logo />
              </div>
              <div class="col-12">
                <h1>The green hydrogen revolution</h1>
              </div>
            </div>
            <div class="card shadow-lg carbon-ticker container pt-2">
              <div class="row pt-2">
                <div class="col">
                  <h2>Whilst you're reading this...</h2>
                </div>
              </div>
              <div class="row pt-2">
                <div class="col">
                  <div
                    ref="tick"
                    class="tick"
                    data-value="1234"
                  >
                    <div
                      data-repeat="true"
                      aria-hidden="true"
                    >
                      <span data-view="flip"></span>
                    </div>
                  </div>
                  <p class="pt-2 text-muted">
                    tonnes of carbon dioxide
                  </p>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                    ...are being emitted into the atmosphere from
                    <strong>hydrogen</strong> produced directly <strong>from fossil fuels</strong>.
                    Stay tuned to see what we're doing to make this stop.
                  </p>
                </div>
              </div>
            </div>
            <div class="row pt-2">
              <div class="col">
                <p>Follow our progress</p>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-1 col-2">
                <a
                  href="https://www.linkedin.com/company/element-one-hydrogen-systems"
                  target="_blank"
                ><font-awesome-icon
                  class="fa-2xl"
                  icon="fa-brands fa-linkedin"
                /></a>
              </div>
              <div class="col-lg-1 col-2">
                <font-awesome-icon
                  class="fa-2xl pr-4"
                  icon="fa-brands fa-square-facebook"
                />
              </div>
              <div class="col-lg-1 col-2">
                <a
                  href="https://www.instagram.com/element_one_hydrogen_systems/"
                  target="_blank"
                ><font-awesome-icon
                  class="fa-2xl mr-2"
                  icon="fa-brands fa-square-instagram"
                /></a>
              </div>
            </div>
            <!-- <div class="form-group mt-4">
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </div>
            <button
              type="button"
              class="mt-2 btn btn-dark"
            >
              Signup to our mailing list
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tick from '@pqina/flip';
import Logo from '../components/logo.vue';
import '@pqina/flip/dist/flip.min.css';

export default {
  name: 'Home',
  components: {
    Logo,
  },
  mounted() {
    this.carbonCount = Tick.DOM.create(this.$refs.tick, {
      value: 0,
      didInit: (tick) => {
        Tick.helper.interval(() => {
          tick.value += 28;
        }, 1000);
      },
    });
  },
};
</script>

<style scoped>
.tick {
  font-size: 2em;
}
</style>
