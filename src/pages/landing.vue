<template>
  <div>
    <cookie-consent />
    <div
      id="homecta"
      class="home-cta col-4 col-offset-4 text-center shadow"
    >
      <img
        height="300"
        width="300"
        alt="Ki Hydrogen"
        src="https://ik.imagekit.io/elementone/kih2_horizontal_green.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675296186591"
      />
    </div>
    <div
      class="header-gradient"
    ></div>
    <Jumbotron />
    <Supporters />
    <Problem />
    <EnergyProblem />
    <BiomassElectrolysis />
    <Process />
    <!-- <Products /> -->
    <Team />
    <footer class="footer contact-us fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-2">
      <ul class="nav col justify-content-center list-unstyled d-flex">
        <li class="ms-3">
          <a
            href="mailto:info@ki-hydrogen.com"
            aria-label="Email Us"
          ><font-awesome-icon
            class="fa-xl"
            icon="fa-solid fa-envelope"
          /></a>
        </li>
        <li class="ms-3">
          <a
            href="https://www.linkedin.com/company/ki-hydrogen"
            aria-label="Follow us on LinkedIn"
            target="_blank"
          ><font-awesome-icon
            class="fa-xl"
            icon="fa-brands fa-linkedin"
          /></a>
        </li>
      </ul>
    </footer>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 d-flex align-items-center">
            <span class="navbar-text">© 2023 Ki Hydrogen Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SocialIcons from '../components/social-icons.vue';
import Products from '../components/products.vue';
import Process from '../components/process.vue';
import Jumbotron from '../components/jumbotron.vue';
import Supporters from '../components/supporters.vue';
import Problem from '../components/problem.vue';
import EnergyProblem from '../components/energy-problem.vue';
import BiomassElectrolysis from '../components/biomass-electrolysis.vue';
import Team from '../components/team.vue';

export default {
  name: 'LandingPage',
  components: {
    Jumbotron,
    Supporters,
    Problem,
    SocialIcons,
    Products,
    Process,
    EnergyProblem,
    BiomassElectrolysis,
    Team,
  },
};
</script>

<style scoped>
.tick {
  font-size: 2em;
}
</style>
