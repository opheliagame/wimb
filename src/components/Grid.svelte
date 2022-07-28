<script>
import { chapter01 } from "$stores/chapter01";
import { onMount } from "svelte";



const verses = $chapter01


onMount(() => {
  const options = {
  method: 'GET',
  headers: {Accept: 'application/json', 'Notion-Version': '2022-06-28'}
};

// fetch('https://api.notion.com/v1/databases/525f09a8c0ed4dcb9ca5765989fd26dd', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
})

</script>



<div 
class="grid-one stanza bg-blue-100">
  {#each verses as verse, index}
  
  {#if Math.random() > 1.0}
  <p class="verse bg-yellow-100 p-2">{verse}</p>
  {:else}
  <p class="verse bg-yellow-100 p-2"></p>
  {/if}

  {/each}


</div>

<style>


  .grid-one {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    transform: translateX(50%) rotateX(10deg) translateX(-50%);
  }

  .grid-one .verse {
    transform:  translateY(0) translateX(50%) rotateY(30deg) translateX(-50%);
  }

  .verse {
    font-size: 0.4rem;
    min-height: 200px;
    border: 1px solid black;
  
    grid-column-end: span 1;
    /* background-size: 30%; */
    /* background-color: plum; */
    /* transform: rotate(45deg); */
    /* padding-bottom: 86.66%; */
  }

  
  .verse:nth-child(2n-1) {
    /* transform: translateY(0%) translateX(-50%) skewY(20deg) translateX(50%); */
    /* grid-column-start: auto; */
    
  }

  .verse:nth-child(4n-3) {
    /* transform: translateY(0%) translateX(-50%) skewY(-20deg) translateX(50%); */
    /* grid-column-start: 2; */

  }

</style>