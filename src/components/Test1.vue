<template>
  <section>
    <div class="p-4 text-xs text-blue-300 shadow rounded border border-gray-100 mb-6">
      <h2 class="text-gray-700 text-md mb-2 font-bold">Test №1</h2>
      Задание №1 (знание CSS) <br>
      Есть SVG изображение логотипа HSE закодированное в base64 (logoBase64).
      Необходимо вывести 3 логотипа и расставить согласно фоновому изображению.
    </div>

    <div class="w-72 h-72 mx-auto my-8 shadow-lg border-gray-100 border relative bg-white">
      <!-- Start box coding  -->

      <!-- End box coding  -->
      <img src="/img/bg-t1.png" alt="bg" class="absolute pointer-events-none hue-rotate-180 top-0 left-0 w-full h-full object-cover opacity-30">
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Test №1',
  },
  data() {
    return {
      logoBase64: "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMy4yIDUxLjA2Ij48cGF0aCBkPSJNMjguMzUgMjMuNDVjLTEuMDgtLjkzLTIuMjYtMS42Ny0zLjUtMi4yMi40OS0uNDEuOTUtLjg1IDEuMzgtMS4zNCA0LjM3LTUuMDEgMy44My0xMi42LTEuMjEtMTYuOTVBMTIuMTA5IDEyLjEwOSAwIDAgMCAxNy4xIDBIMHY1MS4wNmgzMy4yVjM0LjE0Yy4wMy0zLjk1LTEuNjItNy45LTQuODUtMTAuNjlabS0yLjE5IDIzLjZoLTYuMDRWMzAuMDRoLTcuMDR2MTcuMDJINy4wNFY0aDcuMDRjMy43NSAwIDYuOSAyLjU1IDcuOCA2LjAxaC02Ljc5djRoNi43OWMtLjg5IDMuNDUtNC4wNCA2LTcuNzggNi4wMWgtMy4wM3Y0aDUuMDNjMi4zNCAwIDQuNjkuOCA2LjU5IDIuNDUgMi4yOSAxLjk4IDMuNDYgNC43NiAzLjQ3IDcuNTZ2MTMuMDJaIiBzdHlsZT0iZmlsbDojMDAyZDZlIi8+PC9zdmc+"
    }
  },
}
</script>
<style>
</style>
