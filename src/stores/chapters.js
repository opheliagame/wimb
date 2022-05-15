import { readable, writable } from 'svelte/store';

import { body } from './body'


export const chapters = readable(body)