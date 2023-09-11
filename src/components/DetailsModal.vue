<template>
  <div
    v-if="showModal"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black/40"
  >
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all"
      >
        <div
          class="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          ></div>
        </div>

        <div class="p-4 relative">
          <div class="sm:flex sm:items-start">
            <div class="min-w-[480px]">
              <h3
                class="text-3xl text-center font-bold tracking-tight text-gray-900 py-10"
                id="modal-title"
              >
                Add Shop Information
              </h3>
              <div class="mt-2 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <!-- Dynamic Fields -->
                <!-- Dynamic Fields -->
                <div
                  v-for="(field, index) in fields"
                  :key="index"
                  :class="{ 'sm:col-span-2': field.fullWidth }"
                >
                  <label
                    :for="field.name"
                    class="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {{ field.name }}
                  </label>
                  <div class="mt-2.5">
                    <input
                      v-if="field.type === 'text'"
                      v-model="newInfo[field.name]"
                      type="text"
                      :name="field.name"
                      :id="field.name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <textarea
                      v-else-if="field.type === 'textarea'"
                      v-model="newInfo[field.name]"
                      :name="field.name"
                      :id="field.name"
                      rows="4"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    <input
                      v-else-if="field.type === 'switch'"
                      v-model="newInfo[field.name]"
                      type="checkbox"
                      :name="field.name"
                      :id="field.name"
                      class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            @click="saveDetails"
            class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
          >
            Save
          </button>
          <button
            type="button"
            @click="closeModal"
            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="bg-white p-4 rounded">
      <button @click="closeModal">Close</button>
      <div>
        <input v-model="newInfo.name" type="text" placeholder="Name" />
        <input v-model="newInfo.phone" type="text" placeholder="Phone" />
        <button @click="saveDetails">Save</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["showModal", "details"],
  data() {
    return {
      savedInformation: [],
      newInfo: {},
    };
  },
  computed: {
    ...mapState(["fields"]),
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    saveDetails() {
      console.log("New Info before saving: ", this.newInfo);
      // Generate a unique ID for newInfo
      this.newInfo.id = Date.now().toString();
      this.savedInformation.push({ ...this.newInfo });
      this.$emit("saveDetails", this.newInfo);
      localStorage.setItem("newInfo", JSON.stringify(this.newInfo));
      this.newInfo = this.generateNewInfo(); // Reset fields

      // Emit an event to close the modal
      this.$emit("closeModal");
    },

    generateNewInfo() {
      const newInfo = {};
      if (this.fields && this.fields.length > 0) {
        this.fields.forEach((field) => {
          newInfo[field.name] = field.type === "switch" ? false : "";
        });
      }
      return newInfo;
    },
  },
  created() {
    if (this.fields && this.fields.length > 0) {
      this.newInfo = this.generateNewInfo();
    }
  },
};
</script>
