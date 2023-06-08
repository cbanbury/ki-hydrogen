<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-auto">
        <h1
          class="header"
          v-html="title"
        >
        </h1>
      </div>
    </div>
    <div class="row">
      <p v-html="background">
      </p>
    </div>
    <div class="row">
      <div
        v-for="member in members"
        class="col-md-4 col-sm-12"
      >
        <TeamMember
          :name="member.name"
          :photo="member.photo"
          :title="member.title"
          :blurb="member.blurb"
        />
        <!-- <h2 class="text-center">
          Michael Stanton, PhD
        </h2>
        <h2 class="text-center">
          <strong>CTO</strong>
        </h2>
        <div class="col-mx-auto text-center">
          <img
            rel="preconnect"
            width="200"
            height="200"
            class="img-fluid faces"
            alt="Michael Stanton"
            src="https://ik.imagekit.io/elementone/New_Headshot_Michael.png?updatedAt=1680279767822"
          />
        </div>
        <p
          align="justify"
          class="pt-2"
        >
          Michael has a strong <strong>scientific</strong>
          and <strong>research</strong> background,
          with a varied academic career covering materials engineering,
          chemistry, and a PhD in physics/nanotechnology.
          His recent work focused on novel methods for generation
          of <strong>green hydrogen</strong> from <strong>waste materials</strong>.
        </p> -->
      </div>
      <!-- <div class="col-md-4 col-sm-12">
        <h2 class="text-center">
          Koji Muto
        </h2>
        <h2 class="text-center">
          <strong>CEO</strong>
        </h2>
        <div class="col-mx-auto text-center">
          <img
            rel="preconnect"
            width="200"
            height="200"
            class="img-fluid faces"
            alt="Koji Muto"
            src="https://ik.imagekit.io/elementone/New_Headshot_Koji.png?updatedAt=1680279726140"
          />
        </div>
        <p
          align="justify"
          class="pt-2"
        >
          Koji has experience scaling <strong>deep-tech</strong>. He drove development for an
          <strong>$800M</strong> hydrogen project at the largest refinery in the UK. He was an
          early hire at a small modular nuclear reactor startup (<strong>$3M</strong> seed raised)
          and at a direct-air-capture startup (<strong>$1.25M</strong> pre-seed raised).
        </p>
      </div> -->
      <!-- <div class="col-md-4 col-sm-12">
        <h2 class="text-center">
          Carl Banbury, PhD
        </h2>
        <h2 class="text-center">
          <strong>COO</strong>
        </h2>
        <div class="col-mx-auto text-center">
          <img
            rel="preconnect"
            width="200"
            height="200"
            class="img-fluid faces"
            alt="Carl Banbury"
            src="https://ik.imagekit.io/elementone/New_Headshot_Carl.png?updatedAt=1680279748976"
          />
        </div>
        <p
          align="justify"
          class="pt-2"
        >
          Carl has over <strong>ten years</strong> of
          <strong>startup experience</strong> and a multidisciplinary PhD with
          hands on expertise in <strong>nanotechnology</strong>, machine learning, spectroscopy,
          and neuroscience. He specialises in bringing to life blue-sky ideas;
          <strong>developing IP</strong>, MVPs and robust scalable solutions.
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import content from '../cms/team.js';
import TeamMember from './team-member.vue';

export default {
  name: 'Team',
  components: {
    TeamMember,
  },
  data() {
    return content;
  },
};
</script>
