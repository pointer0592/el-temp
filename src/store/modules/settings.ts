import { type Ref, ref, watch } from "vue"
import { defineStore } from "pinia"
import { type LayoutSettings, layoutSettings } from "@/config/layouts"
import { setConfigLayout } from "@/utils/cache/local-storage"

type SettingsStore = {
  // Use a map type to iterate over the keys of the layoutSettings object
  [Key in keyof LayoutSettings]: Ref<LayoutSettings[Key]>
}

type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore("settings", () => {
  /** 状态对象 */
  const state = {} as SettingsStore
  // Traversing the key-value pairs of the layoutSettings object
  for (const [key, value] of Object.entries(layoutSettings)) {
    // Use a type assertion to specify the type of the key, wrap the value in a ref function, and create a reactive variable
    const refValue = ref(value)
    state[key as SettingsStoreKey] = refValue
    // 监听每个响应式变量
    watch(refValue, () => {
      // 缓存
      const settings = _getCacheData()
      setConfigLayout(settings)
    })
  }
  /** Get the data to be cached: convert the state object into a settings object */
  const _getCacheData = () => {
    const settings = {} as LayoutSettings
    for (const [key, value] of Object.entries(state)) {
      // @ts-ignore
      settings[key as SettingsStoreKey] = value.value
    }
    return settings
  }

  return state
})
