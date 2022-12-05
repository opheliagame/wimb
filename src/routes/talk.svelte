<script>
	import { body } from "$stores/body";

  let verses, verse = 'where is my body'
  let timer = 1

  let sentence = ''
  let chat

  body.subscribe(value => verses = value)

  const sendMessage = (ev) => {
    let p = document.createElement('p')
    p.innerHTML = sentence

    chat.appendChild(p)
    console.log(sentence)

    const response = verses.find(e => e.includes(sentence))
    console.log("response")
    console.log(response)

    if(response != null) {
      let p2 = document.createElement('p')
    p2.innerHTML = response
    chat.appendChild(p2)
    }

    



    sentence = ''
  }
  

</script>

<main class="flex flex-col h-full p-4">
  <div class="flex-1 grow" bind:this={chat}></div>

  <form on:submit|preventDefault={sendMessage}>
    <input type="text w-full" autofocus bind:value={sentence}>
  </form>
  
</main>