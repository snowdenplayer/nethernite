<template>
  <b-container fluid>
    <v-row class="d-flex justify-content-center mb-2 mt-2">
      <b-form-input
          size="lg"
          v-model="searchItem"
          placeholder="Find package"
          @input="searchFunction"
          class="col-8"
      />
    </v-row>
    <template v-if="GET_PACKAGES.length">
      <b-table
          v-if="GET_PACKAGES.length"
          id="my-table"
          :items="GET_PACKAGES"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          @row-clicked="showLog"
          style="width: 100%"
      >
        <template #cell(name)="GET_PACKAGES" class="text-center">
          {{ GET_PACKAGES.item.package.name }}
        </template>
        <template #cell(keywords)="GET_PACKAGES" class="text-center">
            <span
                class="packages-item__badge"
                v-for="(keyword, index) in GET_PACKAGES.item.package.keywords"
                :key="index"
            >{{ keyword }}
          </span>
        </template>
        <template #cell(version)="GET_PACKAGES">
          {{ GET_PACKAGES.item.package.version }}
        </template>
        <template #cell(links)="GET_PACKAGES">
          <a
              class="packages-item__link"
              v-for="(link, name) in GET_PACKAGES.item.package.links"
              :key="name"
              :href="link"
              target="_blank"
          >
            <v-icon dense color="black">
              {{ setPackageIcon(name) }}
            </v-icon>
          </a>
        </template>
      </b-table>
      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="d-flex justify-content-center"
      ></b-pagination>
    </template>
    <template v-else>
      <v-row>
        <div class="col-12 empty-data"/>
      </v-row>

    </template>

    <footer
        v-bind="localAttrs"
        :padless="padless"
        class="position-fixed fixed-bottom"
    >
      <b-container class="d-flex align-items-center">
        <img class="portfolio__logo" src="./assets/portfolio.jpg" alt="">
        <div class="portfolio__info ml-5">
          <div class="portfoplio__name">Vladyslav Nahurnyi</div>
          <a class="portfolio__link" href="https://github.com/snowdenplayer">GitHub</a>
        </div>
      </b-container>
    </footer>
    <Modal v-if="MODAL_SHOW"></Modal>
  </b-container>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {debounce} from "@/utils/utils";
import {packagesIcons} from "@/data";
import Modal from "@/components/Modal";

export default {
  name: 'App',
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      searchItem: '',
      fields: [
        {key: 'name', label: 'Name'},
        {key: 'keywords', label: 'Keywords'},
        {key: 'version', label: 'Version'},
        {key: 'links', label: 'Links'},
      ],
      showModal: false
    }
  },
  components: {
    Modal
  },
  computed: {
    ...mapGetters([
      'GET_PACKAGES',
      'MODAL_SHOW'
    ]),
    rows() {
      return this.GET_PACKAGES.length
    },
  },
  methods: {
    ...mapActions([
      'getPackages',
      'showCurrentPackage',
    ]),
    ...mapMutations([
      'TOGLE_MODAL'
    ]),
    searchFunction: debounce(function (e) {
      if (e.length > 1) {
        this.getPackages(e)
      }
    }, 350),
    setPackageIcon(link) {
      return `mdi-${packagesIcons[link]}`;
    },
    async showLog(record) {
      await this.showCurrentPackage(record)
      this.showModal = !this.showModal
    }
  },
}
</script>

<style lang="scss">
.empty-data {
  width: 100%;
  height: 400px;
  background-image: url('./assets/dataEmpty.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

footer {
  background: gray;
  .portfolio__logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .portfolio__info{
    .portfoplio__name{
      font-weight: bolder;
      font-size: 20px;
    }
    .portfolio__link{
      font-size: 16px;
      font-weight: 600;
      color: #e3faf6;
    }
  }
}
</style>
