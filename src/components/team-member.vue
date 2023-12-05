<template>
  <div class="team-member">
    <h2
      class="text-center"
      v-html="name"
    >
    </h2>
    <h2 class="text-center">
      <strong v-html="title"></strong>
    </h2>
    <div class="row">
      <div class="col-mx-auto text-center">
        <img
          rel="preconnect"
          width="200"
          height="200"
          class="img-fluid faces"
          :alt="title"
          :src="photo"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p
      align="center"
      class="pt-2"
      v-html="blurb"
    >
    </p>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div v-for="affiliation in affiliations" class="col text-center pb-2">
        <a :href="affiliation.href" target="_blank">
          <img height="50" :src="affiliation.image" :alt="affiliation.alt">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    name: String,
    title: String,
    photo: String,
    blurb: String,
    affiliations: Array,
  },
};
</script>
