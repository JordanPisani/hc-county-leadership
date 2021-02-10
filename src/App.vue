<template>
  <div>
    <!-- sections -->
    <nav class="nav" role="navigation" aria-label="Jump to a section">
      <a
        v-for="(_, section, i) in leadersGroupedBySection"
        :key="i"
        :href="`#${sectionAnchor(section)}`"
        class="nav-link pr-3"
        :aria-label="section"
      >
        {{ section }}
      </a>
    </nav>

    <!-- leaders -->
    <div
      v-for="(leaders, section, i) in leadersGroupedBySection"
      :key="i"
      class="py-4"
    >
      <div class="d-flex justify-content-between align-items-center my-2">
        <h3 :id="sectionAnchor(section)" class="my-0">
          {{ section }}
        </h3>
        <a href="#" title="Back to Top">
          <span class="fa fa-arrow-up" aria-label="Back to Top"></span>
        </a>
      </div>

      <LeaderCard
        v-for="{ id, fields: leader } in leaders"
        :key="id"
        :leader="leader"
      />
    </div>
  </div>
</template>

<script>
import airtable from './airtable'
// import GoogleSheetModel from '@hcflgov/vue-google-sheet-model'
import LeaderCard from './components/LeaderCard'
import _groupBy from 'lodash.groupby'

export default {
  install(Vue) {
    Vue.prototype.$airtable = airtable
    Vue.mixin({
      components: { HcCountyLeadership: this },
    })
  },

  components: {
    LeaderCard,
  },

  mounted() {
    this.fetchLeaders()
  },

  data: () => ({
    models: [],
  }),

  methods: {
    async fetchLeaders() {
      const { data } = await this.$airtable.get('/leaders', {
        params: {
          view: 'Grid view',
        },
      })

      this.models = data.records
    },

    sectionAnchor(section) {
      return section
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    },
  },

  computed: {
    leadersGroupedBySection() {
      return _groupBy(this.models, 'fields.section')
    },

    fields() {
      return [
        'section',
        'name',
        'title',
        'department',
        'phone',
        'email',
        'assistant',
        'assistantemail',
        'imgname',
        'hasfullimg',
      ]
    },
  },
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
