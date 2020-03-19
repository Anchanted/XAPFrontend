import { mapActions } from 'vuex'

const mixin = {
  methods: {
    ...mapActions({
      saveHistoryList: "searchHistory/saveHistoryList"
    }),

    selectItem (item) {
      if (item.dataType) {
        this.saveHistoryList(item)

        if (item.dataType === 'query') {
          this.$router.push({
            name: 'SearchTop',
            query: {
              q: encodeURIComponent(item.content)
            },
            params: {
              buildingId: this.$route.params.buildingId,
              floorId: this.$route.params.floorId
            }
          })
        } else {
          this.$router.push({
            name: 'Place',
            params: {
              buildingId: item.building ? item.building.id : item.building_id,
              floorId: item.floor ? item.floor.id : item.floor_id,
              type: item.dataType,
              id: item.id,
              itemName: item.name
            }
          })
        }
      }
    },
  }
}

export default mixin
