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
    <p
      align="justify"
      class="pt-2"
      v-html="blurb"
    >
    </p>
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
  },
};
</script>
