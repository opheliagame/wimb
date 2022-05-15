<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let message 

  const dispatch = createEventDispatcher()

  const openDoor = () => {   
    Array.from(document.querySelectorAll('.door')).forEach(door => {
      door.classList.add('animate-open-door')
    })

    // document.querySelector('.skew').classList.add('animate-open-door')
    setTimeout(() => {
      dispatch('opened')
    }, 2000)
  }

  let doors = new Array(60).fill(null)
  

  onMount(() => {
    doors = doors.map((door) => {
      let prob = Math.random()
      if(prob < 0.7) return 0
      else return 1
    })
    console.log(doors)
  })
</script>

<div class="skew z-50 absolute top-0 h-full w-full grid grid-cols-8 justify-center items-center
        bg-brown-50">

  {#each doors as door}
  {#if door == 1}
  <div class="w-full h-full flex flex-row justify-center items-center">
    <button class="door shadow-lg bg-brown-500 text-brown-100 text-xs w-16 py-10 px-2"
            on:click={openDoor}>
      {message}
    </button>
  </div>
  {:else}
  <div class="shadow-lg bg-brown-50 w-full h-full"></div>
  {/if}
  
  {/each}
</div>

<style>
  .skew {
    min-height: 200%;
    transform: translateX(50%) skewY(20deg) translateX(-50%);
  }
  
  .door {
    /* transform: translateX(-50%) skewY(20deg) translateX(50%); */
    animation-fill-mode: forwards;
    
  }
</style>