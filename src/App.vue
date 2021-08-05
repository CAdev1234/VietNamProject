<template>
<v-app id="app">
    <router-view></router-view>
</v-app>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
.row {
    margin: 0px !important;
}

/* .v-btn__content {
  justify-content: left;
} */
.regist_btn_style {
    .v-btn__content {
        justify-content: left;
    }
}
.regist_btn_style_right {
    .v-btn__content {
        margin-right: 0px;
    }
}

.home_search {
    .search_input {
        .v-input__slot {
            .v-text-field__slot {
                border-color: white;
                label {
                    color: white;
                }
                input {
                  color: white;
                }
            }
        }
        .v-input__slot::before{
          border-color: white !important;
        }
    }
}
</style>
