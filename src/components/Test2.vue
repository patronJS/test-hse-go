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
      <h2 class="text-gray-700 text-md mb-2 font-bold">Test №2</h2>
      Задание №2 <br />
      Есть API endpoints записанные в переменные
      <a class="text-red-400 underline font-bold"  target="_blank" href="https://dummyjson.com/users/?select=firstName,lastName,birthDate">
      getUserEndpoint
      </a>
      и
      <a target="_blank" href="https://dummyjson.com/todos" class="text-red-400 underline font-bold"> getTodosEndpoint </a>
      необходимо получить данные с которыми будем работать. Данные получаем
      через
      <span class="text-red-400 font-bold"> GET </span>
      запросы. (для удобства в зависимостях приложения есть <a class="underline" href="https://github.com/axios/axios" target="_blank">axios</a> либо можно воспользоваться
      <a href="https://learn.javascript.ru/fetch" target="_blank" class="underline">fetch</a>)
      <br />
      <br />
      1) Вывести данные в представленной таблице. Необходимо
      сопоставить-объединить данные Users и Todo (id->userId) из 2х запросов. <br />
      <br />
      2) Реализовать сортировку по имени (только в одну сторону - по возрастанию a..z)(повторный клик
      возвращает дефолтную последовательность которая изначально пришла с сервера)<br />
      <br />
      3) Реализовать сортировку по дате рождения (только по возрастанию 0..9)(повторный
      клик возвращает дефолтную последовательность которая изначально пришла с сервера) (*)
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="
              overflow-hidden
              shadow
              ring-1 ring-black ring-opacity-5
              md:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      py-3.5
                      select-none
                      pl-4
                      pr-3
                      text-left text-xs
                      font-semibold
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    Full name
                    <span
                      class="
                        text-blue-500
                        inline-block
                        ml-4
                        px-2
                        cursor-pointer
                      "
                      >⤓</span
                    >
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-xs
                      font-semibold
                      text-gray-900
                    "
                  >
                    Birthday
                    <span
                      class="
                        text-blue-500
                        inline-block
                        ml-4
                        px-2
                        cursor-pointer
                      "
                      >⤓</span
                    >
                  </th>
                  <th
                    scope="col"
                    class="
                      px-3
                      py-3.5
                      text-left text-xs
                      font-semibold
                      text-gray-900
                    "
                  >
                    One of the ToDo
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr>
                  <td
                    class="
                      whitespace-nowrap
                      py-4
                      pl-4
                      pr-3
                      text-xs
                      font-medium
                      text-gray-900
                      sm:pl-6
                    "
                  >
                    Полное имя (Имя+Фамилия)
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                    Дата рождения (год-месяц-день)
                  </td>
                  <td class="px-3 py-4 text-xs text-gray-500">
                    <div class="max-w-[150px]">
                      Описание одного из TODOs если есть
                    </div>
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
const getUserEndpoint = 'https://dummyjson.com/users/?select=firstName,lastName,birthDate';
const getTodosEndpoint = 'https://dummyjson.com/todos';

export default {
  metaInfo: {
    title: 'Test №2',
  },
};
</script>
