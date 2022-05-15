import { derived, readable, writable } from 'svelte/store';
import { body } from './body'

export const chapter01 = derived(body, $body => {
  let len = Math.floor($body.length/5)
  return $body.slice(0, len)
})