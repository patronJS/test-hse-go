<template>
  <section>
    <div
      class="
        p-4
        text-xs text-blue-300
        shadow
        rounded
        border border-gray-100
        mb-6
      "
    >
      <h2 class="text-gray-700 text-md mb-2 font-bold">Test №1</h2>
      Задание №1 (знание CSS) <br />
      Есть SVG изображение логотипа HSE. (P.S. учесть что контейнер может менять
      размер - сейчас его размер 288*288px, масшрабировать логотипы не нужно)
      <br />
      1) Расположить расположить по центру согласно фоновому изображению<br />
      2) Добавить еще 2 логотипа и разместить согласно фоновому изображению.
    </div>

    <div
      class="
        w-72
        h-72
        mx-auto
        my-8
        shadow-lg
        border-gray-100 border
        relative
        bg-white
        z-10
      "
    >
      <!-- Start box coding  -->
      <img width="30" src="/img/logoHSE.svg" alt="hse" />
      <!-- End box coding  -->
      <img
        src="/img/bg-t1.png"
        alt="bg"
        class="
          absolute
          pointer-events-none
          hue-rotate-180
          top-0
          left-0
          w-full
          h-full
          object-cover
          opacity-30
          -z-10
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Test №1',
  },
};
</script>
