<template>
  <div
    v-if="showModal"
    class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      @click="showModal = false"
    ></div>

    <div
      class="modal-container bg-white mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div class="modal-content py-4 text-left px-6">
        <!-- Close modal button -->
        <div class="flex justify-end">
          <button @click="showModal = false" class="modal-close close-button">
            ×
          </button>
        </div>

        <!-- Modal's main content -->
        <!-- Heading -->
        <h2 class="text-2xl font-semibold mb-4">Dynamic Field Settings</h2>

        <!-- Fields -->
        <div
          v-for="(field, index) in fields"
          :key="index"
          class="mb-4 flex flex-row space-x-2"
        >
          <!-- Text Input -->
          <input
            type="text"
            v-model="field.name"
            placeholder="Field Name"
            class="border rounded-md p-2 focus:border-blue-400 focus:ring focus:ring-blue-200"
          />

          <!-- Dropdown Select -->
          <select
            v-model="field.type"
            class="border rounded-md p-2 focus:border-blue-400 focus:ring focus:ring-blue-200"
          >
            <option value="text">Text</option>
            <option value="textarea">Textarea</option>
            <option value="switch">Switch</option>
          </select>

          <!-- Checkbox -->
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              v-model="field.fullWidth"
              class="form-checkbox h-5 w-5 text-blue-600"
            />
            <span class="ml-2">Full Width</span>
          </label>

          <!-- Delete Button -->
          <button
            @click="deleteField(index)"
            class="bg-red-500 text-white rounded-md px-3 py-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>

        <!-- Add Field Button -->
        <button
          @click="addField"
          class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          ADD FIELD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      showModal: false, // Add this line
    };
  },
  computed: mapState(["fields"]),
  methods: {
    ...mapMutations(["setFields"]),
    addField() {
      const newFields = [
        ...this.fields,
        { name: "", type: "text", fullWidth: false },
      ];
      this.setFields(newFields);
    },
    deleteField(index) {
      const newFields = [...this.fields];
      newFields.splice(index, 1);
      this.setFields(newFields);
    },
  },
};
</script>
