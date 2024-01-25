<script setup lang="ts">
import { leaders, leaderGroups, fetchLeaders } from "./lib/leaders";
import Leader from "./components/Leader.vue";
import _slugify from "slugify";
const slugify = (str: any) =>
  _slugify(str, {
    replacement: "-",
    lower: true,
  });

fetchLeaders();

const containerClass = import.meta.env.DEV
  ? "py-5 container"
  : "container-fluid py-1";
</script>

<template>
  <aside v-if="leaders.loading" class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </aside>

  <article v-else :class="containerClass">
    <nav class="nav" id="top" role="navigation" aria-label="Jump to a section">
      <a
        v-for="(_, section, i) of leaderGroups"
        :key="i"
        :href="`#${slugify(section)}`"
        class="nav-link pr-3"
        >{{ section }}</a
      >
    </nav>

    <section v-for="(_leaders, section, i) in leaderGroups">
      <!-- heading & anchor -->
      <div class="d-flex justify-content-between align-items-center mb-2 mt-5">
        <h3 :id="slugify(section)">
          {{ section }}
        </h3>

        <a href="#top" title="Back to Top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-chevron-bar-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"
            />
          </svg>
        </a>
      </div>

      <!--  -->
      <Leader
        v-for="{ id, fields: leader } in _leaders"
        :key="id"
        :leader="leader"
      />
    </section>
  </article>
</template>
