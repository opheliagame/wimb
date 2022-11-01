<script>
	import { body } from "$stores/body";

  let verses, verse = 'where is my body'

  body.subscribe(value => verses = value)

  setInterval(() => {
    let index = Math.floor(Math.random()*verses.length)
    verse = verses[index]

  }, 10000);
  

</script>

<main class="px-6 flex flex-col justify-center align-center h-full w-full">
  <p>{verse}</p>
</main>