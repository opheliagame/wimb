import { readable } from "svelte/store";

const colors = [
  { back: '#8d5524', front: '#ffdbac' }, 
  { back: '#c68642', front: '#ffdbac' }, 
  { back: '#e0ac69', front: '#8d5524' }, 
  { back: '#f1c27d', front: '#8d5524' }, 
  { back: '#ffdbac', front: '#8d5524' }
]
export const skin = readable(colors)