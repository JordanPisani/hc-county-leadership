import { computed, reactive } from "vue";
import airtable from "./airtable";
import _groupby from "lodash.groupby";

export const leaders = reactive<{
  loading: boolean;
  data: Leader[];
}>({
  loading: true,
  data: [],
});

export async function fetchLeaders() {
  leaders.loading = true;
  try {
    const { data } = await airtable.get("/tbl0FblBm4i4Z1MoW", {
      params: {
        view: "Grid view",
      },
    });

    leaders.data = data.records;
  } catch (error) {
    console.error(error);
  } finally {
    leaders.loading = false;
  }
}

export const leaderGroups = computed(() =>
  _groupby(leaders.data, "fields.section"),
);
