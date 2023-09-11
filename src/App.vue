<template>
  <!-- <header class="min-h-[64px] flex items-center border-gray-200 border-b">
    <div class="px-4">
      <div v-if="selectedFolderIndex !== null">
        <h2>{{ folders[selectedFolderIndex].name }} 👌</h2>
      </div>
    </div>
  </header> -->

  <div class="min-h-full flex flex-auto flex-col">
    <div class="flex flex-auto min-w-0">
      <div class="min-w-[290px] bg-white min-h-screen border-r border-gray-200">
        <div
          class="px-4 min-h-[64px] flex items-center justify-between border-gray-200 border-b"
        >
          <div
            v-if="selectedFolderIndex !== null && folders[selectedFolderIndex]"
          >
            <h2 class="text-lg font-bold">
              {{ folders[selectedFolderIndex].name }}
            </h2>
          </div>
          <div class="text-lg font-bold" v-else>Add Folder</div>

          <button @click="addFolder" class="rounded-full hover:bg-gray-100">
            <div class="w-12 h-12 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 13H15M12 10V16M3 17V7C3 5.89543 3.89543 5 5 5H11L13 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z"
                  stroke="#111827"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        <!-- <input
          v-model="searchQuery"
          placeholder="Search folders..."
          class="p-2 border rounded"
        /> -->
        <SideMenu
          :folders="filteredFolders"
          :selectedFolderIndex="selectedFolderIndex"
          @selectFolder="selectFolder"
          @addFolder="addFolder"
          @editFolder="editFolder"
          @deleteFolder="deleteFolder"
        />
      </div>

      <div class="w-screen h-screen">
        <InformationForm
          :folders="folders"
          :currentDetails="currentDetails"
          @updateFolderInformation="handleUpdateFolderInformation"
          :selectedFolderIndex="selectedFolderIndex"
          @editInformation="showEditColumn"
          @addNewInformation="addNewInformation"
          @updateSelectedFolderIndex="selectedFolderIndex = $event"
          @handleUpdateInfo="handleUpdateInfo"
        />
      </div>
    </div>
  </div>
  <DetailsModal :show="showDetailsModal" @close="showDetailsModal = false" />
</template>

<script>
import SideMenu from "./components/SideMenu.vue";
import InformationForm from "./components/InformationForm.vue"; // Import InformationForm component
import DetailsModal from "./components/DetailsModal.vue";

export default {
  components: { SideMenu, InformationForm, DetailsModal },
  data() {
    return {
      selectedFolderIndex: null,
      folders: [],
      searchQuery: "",
      showDetailsModal: false,
      currentDetails: null,
      selectedInfo: null,
    };
  },

  computed: {
    filteredFolders() {
      return this.folders.filter((folder) =>
        folder.name.includes(this.searchQuery)
      );
    },
  },

  watch: {
    folders: {
      deep: true,
      handler(newVal) {
        console.log("folders changed in App.vue:", newVal);
        localStorage.setItem("folders", JSON.stringify(newVal));
      },
    },
    selectedFolderIndex: {
      immediate: true,
      handler() {
        this.selectedInfo = null;
        this.selectedInfoIndex = null;
        this.isDetailSelected = false; // set to false when selectedFolderIndex changes
      },
    },
  },

  created() {
    const savedFolders = localStorage.getItem("folders");
    if (savedFolders) {
      this.folders = JSON.parse(savedFolders);
    }
    this.$store.dispatch("initializeInformation");
  },

  methods: {
    selectFolder(index) {
      this.selectedFolderIndex = index;
      console.log("Selected folder index:", this.selectedFolderIndex);
    },
    addFolder() {
      const name = prompt("Enter folder name:");
      if (name === null || name.trim() === "") {
        console.log("Folder creation cancelled or name was empty.");
        return;
      }
      this.folders.push({ name, information: [] });
      // Automatically select the last folder (newly added)
      this.selectedFolderIndex = this.folders.length - 1;
    },

    editFolder(index) {
      const name = prompt("Edit folder name:", this.folders[index].name);
      if (name !== null) {
        this.folders[index].name = name;
      }
    },
    // In your parent component
    deleteFolder(index) {
      const confirmation = confirm(
        "Are you sure you want to delete this folder?"
      );
      if (confirmation) {
        // Remove the folder's information from localStorage
        const folderName = this.folders[index].name; // Assuming each folder has a 'name' property
        localStorage.removeItem(`folder_${folderName}_information`);

        // Remove the folder from your folders array
        this.folders.splice(index, 1);

        // If the deleted folder is the currently selected folder, reset the selection.
        if (this.selectedFolderIndex === index || this.folders.length === 0) {
          this.selectedFolderIndex = null;

          // If there are no folders left, also remove 'newInfo' from localStorage
          if (this.folders.length === 0) {
            localStorage.removeItem("newInfo");
          }
        }
      }
    },

    // Modal
    openDetails(details) {
      this.currentDetails = details;
      this.showDetailsModal = true;
    },
    updateDetails() {
      this.$emit("update", this.details);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
    addNewInformation(newInfo) {
      console.log("Received New Info in InformationForm.vue: ", newInfo);

      if (this.selectedFolderIndex !== null) {
        this.folders[this.selectedFolderIndex].information.push(newInfo);
      }

      // Reset the selected info
      this.selectedInfoIndex = this.filteredInformation.length - 1;
      this.selectedInfo = this.filteredInformation[this.selectedInfoIndex];
      this.isDetailSelected = true;

      this.$emit("addNewInformation", newInfo);
      this.showModal = false;
    },

    editInformation(info) {
      this.$emit("editInformation", info);
    },
    showEditColumn(info) {
      this.selectedInfo = info;
    },
    handleSelectInfo(info) {
      this.selectedInfo = info;
    },
    handleUpdateInfo(updatedInfo) {
      // Find the folder and information index
      const folderIndex = this.selectedFolderIndex;
      if (folderIndex === null) return;

      const infoIndex = this.folders[folderIndex].information.findIndex(
        (info) => info.id === updatedInfo.id // Use the ID to find the matching information
      );

      if (infoIndex !== -1) {
        // Update the information reactively
        this.$set(
          this.folders[folderIndex].information,
          infoIndex,
          updatedInfo
        );
      } else {
        // If the information doesn't exist (based on ID), add it.
        this.folders[folderIndex].information.push(updatedInfo);
      }
    },

    handleUpdateFolderInformation(updatedFolders) {
      this.folders = updatedFolders;
    },
  },
};
</script>
