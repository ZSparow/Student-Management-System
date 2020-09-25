import create from "zustand";

const StudentStore = create((set) => ({
  name: null,
  age: null,
  address: null,
  gender: null,
  data: [],
  isVisible: false,

  setName: (name) => set({ name }),
  setAge: (age) => set({ age }),
  setAddress: (address) => set({ address }),
  setGender: (gender) => set({ gender }),
  setData: (data) => set({ data }),
  setIsVisible: (isVisible) => set({ isVisible }),
}));

export default StudentStore;
