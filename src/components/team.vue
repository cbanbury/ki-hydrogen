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
      </div>
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
