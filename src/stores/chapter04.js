import { derived, readable, writable } from 'svelte/store';

import { body } from './body'

export const chapter04 = derived(body, $body => {
  let len = Math.floor($body.length/5)
  return $body.slice(len*3, len*4)
});