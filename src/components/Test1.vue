<template>
  <section>
    <div
      class="
        p-4
        text-md text-blue-500
        shadow
        rounded
        border border-gray-100
        mb-6
      "
    >
      <h2 class="text-gray-700 text-md mb-2 font-bold">Test №1</h2>
      Задание №1 (знание CSS) <br />
      Есть SVG изображение логотипа HSE.(<pre class="inline-block text-red-500">&lt;img width=&quot;30&quot; src=&quot;/img/logoHSE.svg&quot; alt=&quot;hse&quot; /&gt;</pre>)
      <br />
      1) Расположить расположить существующий логотип по центру и увеличить в размере (см. фон)<br />
      2) Добавить еще 2 логотипа и разместить согласно фоновому изображению(в верхнем и нижнем левом углу ).
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
