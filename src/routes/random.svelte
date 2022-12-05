<script>
	import { body } from "$stores/body";

  let verses, verse = 'where is my body'
  let timer = 1

  body.subscribe(value => verses = value)

  setInterval(() => {
    let index = Math.floor(Math.random()*verses.length)
    verse = verses[index]

  }, 10000);

  setInterval(() => {
    timer += 1
    timer = timer % 10
  }, 1000)
  

</script>

<main class="flex justify-center h-full w-full">
  

  <div class="w-5/6 md:w-1/3 flex flex-col justify-between h-full w-full">
    <div class="justify-self-start flex justify-between w-full pt-4">
      {#each Array(timer) as i}
        <p>.</p>
      {/each}
      {#each Array(10-timer) as i}
        <p>&nbsp;</p>
      {/each}
    </div>

    <p class="justify-self-center">{verse}</p>

    <div class="justify-self-start flex justify-between w-full pb-4">
      {#each Array(10-timer) as i}
        <p>&nbsp;</p>
      {/each}
      {#each Array(timer) as i}
        <p>.</p>
      {/each}
    </div>
  </div>
</main>