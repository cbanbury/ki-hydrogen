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
      <div style="position: relative; top: -50px;">
        <SocialIcons />
        <a
          class="mb-2 mt-2 btn btn-dark"
          href="https://www.linkedin.com/company/ki-hydrogen"
          target="_blank"
          role="button"
        >
          Follow Our Progress
        </a>
      </div>
    </div>
    <div
      class="header-gradient"
    ></div>
    <Jumbotron />
    <!-- <Supporters /> -->
    <Problem />
    <EnergyProblem />
    <BiomassElectrolysis />
    <Process />
    <!-- <Products /> -->
    <Team />
    <nav class="navbar footer">
      <div class="container-fluid">
        <span class="navbar-text">© 2023 Ki Hydrogen Ltd</span>
      </div>
    </nav>
  </div>
</template>

<script>
import SocialIcons from '../components/social-icons.vue';
import Products from '../components/products.vue';
import Process from '../components/process.vue';
import Jumbotron from '../components/jumbotron.vue';
// import Supporters from '../components/supporters.vue';
import Problem from '../components/problem.vue';
import EnergyProblem from '../components/energy-problem.vue';
import BiomassElectrolysis from '../components/biomass-electrolysis.vue';
import Team from '../components/team.vue';

export default {
  name: 'LandingPage',
  components: {
    Jumbotron,
    // Supporters,
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
