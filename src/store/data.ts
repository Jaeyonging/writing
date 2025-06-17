import { create } from "zustand";

interface FetchDataState {
  data: any; 
  setData: (newData: any) => void;
  resetData: () => void;
}

const useFetchDataStore = create<FetchDataState>((set) => ({
  data: [], 
  setData: (newData) => set({ data: newData }),
  resetData: () => set({ data: [] }),
}));

export default useFetchDataStore;
