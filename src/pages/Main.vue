<template>
  <div class="hg-main-page">
    <h1>Props example</h1>
    <div class="flex hg-dropdown-content">
      <base-dropdown v-if="dropdownData" :dropdown-data="dropdownData" @select="selectItem" />
    </div>

    <h1>Slots example</h1>
    <div class="flex hg-dropdown-content">
      <base-dropdown v-if="dropdownData" :custom-button="true" :custom-content="true">
        <!-- Button content -->
        <template v-slot:button>
          <span class="px-2 py-2 border rounded inline-flex items-center text-sm" @click="showDropdown2 = true">
            <span class="mr-2">Dropdown2</span>

            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z" />
            </svg>
          </span>
        </template>

        <!-- Opened dropdown content -->
        <template v-slot:content>
          <a v-for="(item, index) in dropdownData" v-bind:key="`dropdown_${index}`"
            class="flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white"
            href="#" @click="selectItem(item.id)">{{ item.id }}</a>
        </template>
      </base-dropdown>
    </div>
  </div>
</template>

<script>
import BaseDropdown from '@/components/Dropdown';
import dropdownData from '../data.json';

export default {
  name: "Main-page",
  components: {
    BaseDropdown
  },
  data() {
    return {
      dropdownTitle: 'Main',
      dropdownData,
    }
  },
  methods: {
    selectItem(itemID) {
      console.log('itemID: ', itemID)
      this.showDropdown = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/pages/Main.scss'
</style>
