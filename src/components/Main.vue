<template>
  <section class="text-center h-screen flex flex-col justify-center">
    <h2 class="text-blue-600 font-bold text-2xl max-w-screen-sm mx-auto mb-8">
      Практические задания Front-end HSE
    </h2>

    <ul class="space-y-2 font-bold text-xl">
      <li>
        <router-link
          to="test1"
          class="text-sky-600"
          active-class="text-blue-400"
          >Задание №1 (CSS)</router-link
        >
      </li>
      <li>
        <router-link
          to="test2"
          class="text-sky-600"
          active-class="text-blue-400"
          >Задание №2 (JS-Vue)</router-link
        >
      </li>
    </ul>
  </section>
</template>
