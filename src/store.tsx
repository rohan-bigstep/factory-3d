import { create } from 'zustand'

export type MainMaterial = 'Fabric' | 'Leather'
export type FrameMaterial = 'Wood' | 'Metal'

interface ConfiguratorState {
  color: string
  mainMaterial: MainMaterial
  frameMaterial: FrameMaterial
  setColor: (color: string) => void
  setMainMaterial: (material: MainMaterial) => void
  setFrameMaterial: (material: FrameMaterial) => void
}

export const useProductStore = create<ConfiguratorState>((set) => ({
  color: '#964B00',
  mainMaterial: 'Fabric',
  frameMaterial: 'Wood',
  setColor: (color: string) => set({ color }),
  setMainMaterial: (mainMaterial: MainMaterial) => set({ mainMaterial }),
  setFrameMaterial: (frameMaterial: FrameMaterial) => set({ frameMaterial })
}))