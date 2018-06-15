<template>
  <div id="app">

    <nav class="nav" role="navigation" aria-label="Jump to a section">
      <a v-for="(leaders, section) in leadersGroupedBySection" :href="`#${section.replace(/\W/g, '')}`" class="nav-link pr-3" :aria-label="section">
        {{ section }}
      </a>
    </nav>

    <div v-for="(leaders, section) in leadersGroupedBySection" class="py-3">
      <div class="d-flex justify-content-between align-items-center">
        <h3 :id="section.replace(/\W/g, '')">
          {{ section }}
        </h3>
        <a href="#" title="Back to Top">
          <span class="fa fa-chevron-up" aria-label="Back to Top"></span>
        </a>
      </div>
      <div v-for="leader in leaders" is="LeaderCard" :leader="leader"></div>
    </div>

  </div>
</template>

<script>
import GoogleSheetModel from 'google-sheet-model'
import LeaderCard from './components/LeaderCard'
import _ from 'lodash'

export default {
  name: 'app',
  extends: GoogleSheetModel,
  propsData: {
    sheetId: '1X8epq3VYWS7YMvx8fdgTYzzqJ-fxyuK30qlm76Fuad0',
    tableId: 1,
    fields: ['section', 'name', 'title', 'department', 'phone', 'email', 'assistant', 'assistantemail', 'imgsrc']
  },
  components: { LeaderCard },
  computed: {
    leadersGroupedBySection () {
      return _.groupBy(this.instances, 'section')
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
