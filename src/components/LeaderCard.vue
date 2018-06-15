<template lang="html">
  <div v-if="leader.name" class="card card-body rounded-0 mb-2">
    <div class="media">
      <img :src="imgSrc" :alt="imgAlt" class="mr-3 county-leader-image" />

      <div class="media-body">
        <h4 class="mt-0 d-flex flex-column">
          {{ leader.name }}
          <small class="text-muted">{{ joinedTitle }}</small>
        </h4>

        <div class="list-group list-group-flush">
          <a v-if="leader.phone" :href="`tel:${leader.phone}`" class="list-group-item list-group-item-action p-2 d-flex align-items-center">
            <span class="mr-3 fa fa-fw fa-1x fa-phone" aria-hidden="true"></span>
            {{ leader.phone }}
          </a>

          <a v-if="leader.email" :href="`mailto:${leader.email}`" class="list-group-item list-group-item-action p-2 d-flex align-items-center" :title="leader.email">
            <span class="mr-3 fa fa-fw fa-1x fa-envelope" aria-hidden="true"></span>
            Email
          </a>

          <a v-if="leader.assistantemail" :href="`mailto:${leader.assistantemail}`" class="list-group-item list-group-item-action p-2 d-flex align-items-center">
            <span class="mr-3 fa fa-fw fa-1x fa-user" aria-label="Email"></span>
            <span class="small d-flex flex-column">
              <strong class="text-muted">Admin Assistant:</strong>
              {{ leader.assistant }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['leader'],
  computed: {
    joinedTitle () {
      return (this.leader.department) ? [this.leader.title, this.leader.department].join(': ') : this.leader.title
    },
    imgSrc () {
      return (this.leader.imgsrc) ? this.leader.imgsrc : 'https://www.hillsboroughcounty.org/library/hillsborough/head-shots/placeholder.gif'
    },
    imgAlt () {
      return (this.leader.imgsrc) ? this.leader.name : `${this.leader.name} - Not Pictured`
    }
  }
}
</script>
