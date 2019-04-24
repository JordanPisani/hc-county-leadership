<template>
  <GoogleSheetModel v-slot="{ gsheet }" sheet-id="1X8epq3VYWS7YMvx8fdgTYzzqJ-fxyuK30qlm76Fuad0" :table-index="tableIndex" :fields="fields">

    <nav class="nav" role="navigation" aria-label="Jump to a section">
      <a v-for="(leaders, section, i) in leadersGroupedBySection(gsheet.instances)" :key="i" :href="`#${sectionAnchor(section)}`" class="nav-link pr-3" :aria-label="section">
        {{ section }}
      </a>
    </nav>

    <div v-for="(leaders, section, i) in leadersGroupedBySection(gsheet.instances)" :key="i" class="py-4">
      <div class="d-flex justify-content-between align-items-center my-2">
        <h3 :id="sectionAnchor(section)" class="my-0">
          {{ section }}
        </h3>
        <a href="#" title="Back to Top">
          <span class="fa fa-arrow-up" aria-label="Back to Top"></span>
        </a>
      </div>

      <LeaderCard v-for="(leader, i) in leaders" :key="i" :leader="leader"></LeaderCard>
    </div>

  </GoogleSheetModel>
</template>

<script>
import GoogleSheetModel from '@hcflgov/vue-google-sheet-model'
import LeaderCard from './components/LeaderCard'
import _groupBy from 'lodash.groupby'

export default {
  name: 'HcCountyLeadership',
  install (Vue) {
    Vue.mixin({
      components: { HcCountyLeadership: this }
    })
  },
  components: { GoogleSheetModel, LeaderCard },
  methods: {
    leadersGroupedBySection (models) {
      return _groupBy(models, 'section')
    },
    sectionAnchor (section) {
      return section.replace(/\W/g, '')
    }
  },
  computed: {
    tableIndex () {
      return process.env.VUE_APP_GSHEET_TABLE_INDEX
    },
    fields () {
      return ['section', 'name', 'title', 'department', 'phone', 'email', 'assistant', 'assistantemail', 'imgname', 'hasfullimg']
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
