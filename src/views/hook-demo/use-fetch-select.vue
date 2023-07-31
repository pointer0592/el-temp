<script lang="ts" setup>
import { useFetchSelect } from "@/hooks/useFetchSelect"
import { getSelectDataApi } from "@/api/hook-demo/use-fetch-select"

const { loading, options, value } = useFetchSelect({
  api: getSelectDataApi
})
</script>

<template>
  <div class="app-container">
    <h4>This example is a demonstration: get the data needed by the Select component after calling the api
      automatically through the hook and pass it to the Select component</h4>
    <h5>Select example</h5>
    <el-select :loading="loading" v-model="value" filterable>
      <el-option v-for="(item, index) in options" v-bind="item" :key="index" placeholder="Select" />
    </el-select>
    <h5>Select V2 example (if there is too much data, you can choose this component)</h5>
    <el-select-v2 :loading="loading" v-model="value" :options="options" filterable placeholder="Select" />
  </div>
</template>
