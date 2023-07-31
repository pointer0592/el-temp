<script lang="ts" setup>
import { h } from "vue"
import { useTheme } from "@/hooks/useTheme"
import { resetConfigLayout } from "@/utils"
import { ElNotification } from "element-plus"

import zhCn from "element-plus/es/locale/lang/zh-cn"

const { initTheme } = useTheme()


initTheme()


ElNotification({
  title: "Hello",
  type: "success",
  message: h(
    "a",
    { style: "color: teal", target: "_blank", href: "https://github.com/un-pany/v3-admin-vite" },
    "t is not easy to get a star for a small project, if you like this project, please click here to support a star! This is the author's sole motivation" +
    "for continued maintenance (whispers: it's free after all)"
  ),
  duration: 0,
  position: "bottom-right"
})
ElNotification({
  title: "破坏性更新",
  type: "warning",
  message: h(
    "span",
    {
      style: "color: teal; cursor: pointer;",
      onClick: resetConfigLayout
    },
    "Since version 4.1.0 of the platform has added a variety of layout modes, if a white screen occurs for the first time, click here or manually go to the console to clear " +
    "the LocalStorage cache data and refresh the page!"
  ),
  duration: 0,
  position: "bottom-right",
  offset: 150
})
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <router-view />
  </ElConfigProvider>
</template>
