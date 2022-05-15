import { asyncReadable } from 'svelte-async-readable';
import { readable, writable } from 'svelte/store';

const makeBody = async () => {
  let url = 'https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/main';
  let items = await (await fetch(url)).json()
  let ch01 = items.main.map(item => item.quote)
  
  url = 'https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/popCulture'
  items = await (await fetch(url)).json()
  let ch02 = items.popCulture.map(item => item.quote)
  
  url = 'https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/socialMedia'
  items = await (await fetch(url)).json()
  let ch03 = items.socialMedia.map(item => item.quote)
  
  url = 'https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/nsfw'
  items = await (await fetch(url)).json()
  let ch04 = items.nsfw.map(item => item.quote)
  
  url = 'https://api.sheety.co/0a415664d31b034a8a8ca1c9b06f8a40/wimb/legal'
  items = await (await fetch(url)).json()
  let ch05 = items.legal.map(item => item.quote)
  
  let arr = [...ch01, ...ch02, ...ch03, ...ch04, ...ch05]
  return arr
}

// export function createBodyStore() {
//   const { subscribe, update, set } = writable([])

//   return {
//       subscribe,

//       init: async () => {
//         console.log('hello')
//         const body = await makeBody()
//         set(body)
//         return body
//       }
//   }
// }

const body = asyncReadable(writable([]), {
  dataProvider: () => {
    
    return makeBody()
  }
})
body.fetch()
// body.subscribe(value => console.log(value))

export { body }