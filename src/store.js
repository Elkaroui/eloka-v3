import { createStore } from "vuex";

// Generate a unique ID using Date.now() or any other unique ID generation method
const generateNewId = () => Date.now().toString();

export default createStore({
  state: {
    fields: JSON.parse(localStorage.getItem("fields")) || [
      { name: "First Name", type: "text", default: "Elka" },
      { name: "Last Name", type: "text", default: "Zi" },
    ],
  },
  mutations: {
    importFields(state, jsonKeys) {
      const newFields = jsonKeys.map((key) => ({
        name: key,
        type: "text",
        default: "",
      }));
      state.fields = [...state.fields, ...newFields];
    },

    setFields(state, fields) {
      state.fields = fields;
      localStorage.setItem("fields", JSON.stringify(fields));
    },

    setInformation(state, initialInformation) {
      state.information = initialInformation;
    },
    addNewInformation(state, newInfo) {
      state.information.push(newInfo);
      console.log("New information added:", state.information);
    },
    updateInformation(state, updatedInfo) {
      const index = state.information.findIndex(
        (info) => info.id === updatedInfo.id
      );

      if (index !== -1) {
        state.information[index] = updatedInfo;
      } else {
        console.log("ID not found in existing information");
      }
    },
  },
  actions: {
    initializeInformation({ commit }) {
      const initialInformation = [
        {
          id: "1",
          Shop: "Shop1",
          "Coordinates Y": "40",
          Phone: "123456789",
          Website: "https://example1.com",
        },
        {
          id: "2",
          Shop: "Shop2",
          "Coordinates Y": "50",
          Phone: "987654321",
          Website: "https://example2.com",
        },
      ];
      commit("setInformation", initialInformation);
    },

    // Existing addNewInformation action
    addNewInformation({ commit }, newInfo) {
      newInfo.id = generateNewId(); // Assigning a unique ID
      commit("addNewInformation", newInfo);
    },

    // Existing updateInformation action
    updateInformation({ commit }, updatedInfo) {
      commit("updateInformation", updatedInfo);
    },
  },
});
