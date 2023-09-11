<template>
  <div class="h-[calc(100%-64px)]">
    <ul
      class="listings-scroll flex flex-col space-y-1 h-full overflow-auto p-2"
    >
      <li v-for="(folder, index) in folders" :key="index">
        <div
          class="flex flex-row items-center rounded-lg justify-between cursor-pointer px-4 h-12 font-medium text-gray-700 hover:bg-gray-200 group relative"
          @click="selectFolder(index)"
          :class="{
            'bg-indigo-600 hover:bg-indigo-600 text-white':
              selectedFolderIndex === index,
          }"
        >
          <div class="">
            {{ folder.name }}
          </div>
          <div class="absolute right-1 hidden group-hover:flex">
            <div class="flex space-x-1">
              <button
                @click="editFolder(index)"
                class="p-2 text-sm hover:bg-white/20 rounded"
              >
                <svg
                  :class="{
                    'fill-white': selectedFolderIndex === index,
                    'fill-black': selectedFolderIndex !== index,
                  }"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2678 3.73223L20.9749 3.02513V3.02513L20.2678 3.73223ZM6.50006 21.0355V22.0355C6.76528 22.0355 7.01963 21.9301 7.20717 21.7426L6.50006 21.0355ZM3.00006 21.0355H2.00006C2.00006 21.5878 2.44778 22.0355 3.00006 22.0355V21.0355ZM3.00006 17.4644L2.29295 16.7573C2.10542 16.9448 2.00006 17.1992 2.00006 17.4644H3.00006ZM17.4393 4.43934C18.0251 3.85355 18.9749 3.85355 19.5607 4.43934L20.9749 3.02513C19.608 1.65829 17.392 1.65829 16.0251 3.02513L17.4393 4.43934ZM19.5607 4.43934C20.1465 5.02513 20.1465 5.97487 19.5607 6.56066L20.9749 7.97487C22.3417 6.60804 22.3417 4.39196 20.9749 3.02513L19.5607 4.43934ZM19.5607 6.56066L5.79295 20.3284L7.20717 21.7426L20.9749 7.97487L19.5607 6.56066ZM6.50006 20.0355H3.00006V22.0355H6.50006V20.0355ZM16.0251 3.02513L2.29295 16.7573L3.70717 18.1715L17.4393 4.43934L16.0251 3.02513ZM2.00006 17.4644V21.0355H4.00006V17.4644H2.00006ZM14.5251 5.93934L18.0607 9.47487L19.4749 8.06066L15.9393 4.52513L14.5251 5.93934Z"
                  />
                </svg>

                <span class="sr-only">Edit</span>
              </button>
              <button
                @click="deleteFolder(index)"
                class="p-2 text-sm hover:bg-white/20 rounded"
              >
                <svg
                  :class="{
                    'stroke-white': selectedFolderIndex === index,
                    'stroke-black': selectedFolderIndex !== index,
                  }"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="sr-only">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["folders", "selectedFolderIndex"],
  methods: {
    selectFolder(index) {
      this.$emit("selectFolder", index);
    },
    addFolder() {
      this.$emit("addFolder");
    },
    editFolder(index) {
      this.$emit("editFolder", index);
    },
    deleteFolder(index) {
      this.$emit("deleteFolder", index);
    },
  },
};
</script>
