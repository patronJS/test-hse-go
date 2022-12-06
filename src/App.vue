<template>
  <main id="app" class="container mx-auto">
    <div class="flex justify-between items-end mb-4">
      <h1 class="text-lg font-bold">
        <router-link to="/">Test Front-end VUE (HSE)!</router-link>
      </h1>
      <div class="flex flex-nowrap">
        <div class="pr-4 font-bold">Задачи:</div>
        <ul class="flex flex-nowrap space-x-2 font-bold">
          <li>
            <router-link to="test1" class="text-gray-400" active-class="text-blue-400">1</router-link>
          </li>
          <li>
            <router-link to="test2" class="text-gray-400" active-class="text-blue-400">2</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </main>
</template>
<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Тестовые задания Front-End',
    // all titles will be injected into this template
    titleTemplate: '%s | HSE'
  }
}
</script>