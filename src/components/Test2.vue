<template>
  <section>
    <div class="p-4 text-xs text-blue-300 shadow rounded border border-gray-100 mb-6">
      <h2 class="text-gray-700 text-md mb-2 font-bold">Test №2</h2>
      Задание №2 (знание JS-Vue) <br>
      Есть API по адресу "<span
      class="text-red-400 font-bold">https://dummyjson.com/users</span>"
      необходимо получить данные с которыми будем работать. Данные получаем через <span
      class="text-red-400 font-bold">GET</span> запрос по адресу API
      <br>
      1) Вывести данные в представленной таблице <br>
      2) Реализовать сортировку по имени (по возрастанию a..z) <br>
      3) Реализовать сортировку по дате рождения (по возрастанию 0..9) (*)
    </div>

    <div class="mt-8 flex flex-col" v-if="listSorted">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
              <tr>
                <th scope="col"
                    class="py-3.5 select-none pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Full name
                  <span class="text-blue-500 inline-block ml-4 px-2 cursor-pointer"
                        @click="sortBy('name')">⤓</span>
                </th>
                <th scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Birthday
                  <span
                    class="text-blue-500 inline-block ml-4 px-2 cursor-pointer" @click="sortBy('date')">⤓</span>
                </th>
                <th scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Email
                </th>
                <th scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  University
                </th>
              </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  Полное имя (Имя+Фамилия)
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Дата
                  рождения (год-месяц-день)
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Email
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Уч.заведение
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  metaInfo: {
    title: 'Test №2',
  },
  data() {
    return {

    }
  },
}
</script>
