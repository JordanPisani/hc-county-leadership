<template lang="html">
  <div v-if="leader" class="card card-body rounded-0 mb-2">
    <div class="media">
      <a :href="imgFullSrc" target="_blank">
        <img
          :src="imgThumbSrc"
          :alt="imgAlt"
          class="mr-3 county-leader-image"
        />
      </a>

      <div class="media-body">
        <h4 class="mt-0 d-flex flex-column">
          {{ leader.name }}
          <small class="text-muted">{{ joinedTitle }}</small>
        </h4>

        <div class="list-group list-group-flush">
          <a
            v-if="leader.phone"
            :href="`tel:${leader.phone}`"
            class="list-group-item list-group-item-action p-2 d-flex align-items-center"
          >
            <span
              class="mr-3 fa fa-fw fa-1x fa-phone"
              aria-hidden="true"
            ></span>
            {{ leader.phone }}
          </a>

          <a
            v-if="leader.email"
            :href="`mailto:${leader.email}`"
            class="list-group-item list-group-item-action p-2 d-flex align-items-center"
            :title="leader.email"
          >
            <span
              class="mr-3 fa fa-fw fa-1x fa-envelope"
              aria-hidden="true"
            ></span>
            Email
          </a>

          <a
            v-if="leader.assistant_email"
            :href="`mailto:${leader.assistant_email}`"
            class="list-group-item list-group-item-action p-2 d-flex align-items-center"
          >
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
const placeholderSrc =
  'https://www.hillsboroughcounty.org/library/hillsborough/head-shots/placeholder.gif'

export default {
  props: ['leader'],

  computed: {
    joinedTitle() {
      return this.leader.department
        ? [this.leader.title, this.leader.department].join(': ')
        : this.leader.title
    },

    hasImage() {
      return this.leader.image
    },

    imgThumbSrc() {
      return this.hasImage
        ? this.leader.image[0].thumbnails.large.url
        : placeholderSrc
    },

    imgFullSrc() {
      return this.hasImage ? this.leader.image[0].url : placeholderSrc
    },

    imgAlt() {
      return this.leader.imgname
        ? this.leader.name
        : `${this.leader.name} - Not Pictured`
    },
  },
}
</script>
