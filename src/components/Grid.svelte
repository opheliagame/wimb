<script>
import { chapter01 } from "$stores/chapter01";
import { onMount } from "svelte";

let stanza = []

onMount(async () => {
  


  const res = await fetch('./dummy.json')
  stanza = await res.json()
  
  
})

</script>


<div class="grid-container">
  <div class="grid grid-one">
    {#each stanza as verse, index}
    <div class="verse">{verse} {index}</div>
    {/each}
  </div>
  
  <div class="grid grid-two">
    {#each stanza as verse, index}
    <div class="verse">{verse}</div>
    {/each}
  </div>

  <div class="grid grid-three">
    {#each stanza as verse, index}
    <div class="verse">{verse}</div>
    {/each}
  </div>
</div>

<style>

  .grid .verse {
    font-size: 10px;
  }

  .grid-container {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  
  .grid {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .grid-one {
   

    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  
  .grid-one .verse {
    
    transform: translateY(50%) skewY(25deg);
  }

  .grid-two .verse {
    
    transform: translateY(-50%) translateX(-50%) skewY(-30deg);
  }

  .grid-three .verse {
    
    transform: translateY(100%) skewY(-30deg) skewX(45deg);
  }

  .grid-two {

    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    /* transform: skewY(-45deg); */
  }

  .grid-three {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .grid-one .verse {
    /* transform:  translateY(0) translateX(50%) rotateY(30deg) translateX(-50%); */
  }

  .verse {
    font-size: 0.4rem;
    min-height: 100px;
    max-height: 200px;
    border: 1px solid black;
    background-color: white;
  
    /* grid-column-end: span 1; */
    /* background-size: 30%; */
    /* background-color: plum; */
    /* transform: rotate(45deg); */
    /* padding-bottom: 86.66%; */
  }



</style>