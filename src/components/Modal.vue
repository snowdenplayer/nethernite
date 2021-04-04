<template>
  <section class="modal">
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="modal__window p-4">
            <div class="packages__item">
              <div class="d-flex align-start justify-content-between flex-wrap flex-column flex-sm-row">
                <div class="packages-item__name">
                  <span class="packages-item__header mr-2">Package name:</span>
                  {{ currentPackage.package.name }}
                </div>
                <div class="packages-item__version">
                  <span class="packages-item__header mr-2">Package version:</span>
                  {{ currentPackage.package.version }}
                </div>
              </div>
              <div class="packages-item__description my-2">
                {{ currentPackage.package.description }}
              </div>
              <div
                  v-if="currentPackage.package.author"
                  class="packages-item__author"
              >
                <span class="packages-item__header mr-2">Author:</span>
                <div v-if="currentPackage.package.author.name">
                  <span class="packages-item__small-header mr-2">Name author:</span>
                  {{ currentPackage.package.author.name }}
                </div>
                <div v-if="currentPackage.package.author.username">
                  <span class="packages-item__small-header mr-2">Username author:</span>
                  {{ currentPackage.package.author["username"] }}
                </div>
                <div v-if="currentPackage.package.author.email">
                  <span class="packages-item__small-header mr-2">Email author:</span>
                  {{ currentPackage.package.author.email }}
                </div>
              </div>
              <div class="packages__item-maintainers">
                <span class="packages-item__header "
                >Maintainers:</span>
                <div class="packages-item__maintainers-info">
                  <div
                      v-for="(maintainer, idx) in currentPackage.package.maintainers"
                      :key="idx"
                      class="my-3">
                    <div v-if="maintainer.name">
                        <span class="packages-item__small-header mr-3"
                        >Maintainer name:</span
                        >{{ maintainer.name }}
                    </div>
                    <div v-if="maintainer.username">
                        <span class="packages-item__small-header mr-3"
                        >Maintainer username:</span
                        >{{ maintainer.username }}
                    </div>
                    <div v-if="maintainer.email">
                        <span class="packages-item__small-header mr-3"
                        >Maintainer email:</span
                        >{{ maintainer.email }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex align-center align-sm-start justify-space-between mt-2 mt-sm-5">
                <div
                    class="packages-item__keywords d-flex flex-wrap">
                    <span
                        class="keywords__item"
                        v-for="(keyword, index) in currentPackage.package.keywords"
                        :key="index"
                    >{{ keyword }}
                    </span>
                </div>
                <div
                    class="packages-item__social justify-end"
                >
                  <a
                      class="packages-item__link"
                      v-for="(link, name) in currentPackage.package.links"
                      :key="name"
                      :href="link"
                      target="_blank"
                  >
                    <v-icon dense color="black">{{
                        setPackageIcon(name)
                      }}</v-icon>
                  </a>
                </div>
              </div>
            </div>
            <button class="modal__btn-close" @click="TOGLE_MODAL">
              <v-icon small color="#4D5058">mdi-close</v-icon>
            </button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import {packagesIcons} from '@/data'

export default {
  name: "Modal",
  computed: {
    ...mapState([
      'currentPackage'
    ])
  },
  methods: {
    ...mapMutations([
      'TOGLE_MODAL'
    ]),
    setPackageIcon(link) {
      return `mdi-${packagesIcons[link]}`;
    }
  }
}
</script>
<style lang="scss">
.modal {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgb(31 37 45 / 70%);
  &__window {
    width: 100%;
    max-width: 700px;
    margin: auto;
    position: relative;
    background: #e3faf6;
  }
  .packages-item {
    &__header {
      font-size: 16px;
      font-weight: bolder;
      color: black;
    }
    &__small-header{
      font-size: 16px;
      font-weight: 400;
      color: gray;
    }
    &__maintainers {
      &-info {
        max-height: 120px;
        overflow-y: scroll;
      }
    }
    &__keywords{
      display: flex;
      .keywords__item{
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px 8px;
        margin: 2px;
      }
    }
  }
  &__btn-close {
    position: absolute;
    right: 5px;
    top: 0;
    z-index: 1;
  }
}
</style>