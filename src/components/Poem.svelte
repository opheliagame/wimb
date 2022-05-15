<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import Stanza from './Stanza.svelte';

  const dispatch = createEventDispatcher()
  export let chapter

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  let poemArr = [], hiddenArr = [], selectedArr = [], emptyArr = [], prevSelectedArr = []
  let gridDiv
  let cols = 6

  let pickedArr = [], prevPickedArr = []
  
  onMount(() => {
    emptyArr = new Array(Math.floor(chapter.length)).fill('')
    poemArr = shuffleArray(emptyArr.concat(chapter))
    hiddenArr = new Array(poemArr.length).fill(true)
    selectedArr = new Array(poemArr.length).fill(true)
    prevSelectedArr = [...selectedArr]
  })

  const eqSet = (as, bs) => {
    if (as.size !== bs.size) return false;
    for (var a of as) if (!bs.has(a)) return false;
    return true;
  }

  const handleSelection = (e) => {
    // check if first click
    let selected = selectedArr.filter(v => v == true)
    if(selected.length == selectedArr.length) {
      selectedArr = new Array(poemArr.length).fill(false)
    }

    

    let curr = e.detail.id - 1
    let left = curr - 1
    let right = curr + 1
    let top = curr - cols
    let bottom = curr + cols
    let visible = [curr, left, right, top, bottom]
    selectedArr[curr] = true
    
    pickedArr.push(curr)
    pickedArr = Array.from(new Set(pickedArr))

    if(eqSet(new Set(pickedArr), new Set(prevPickedArr))) {
      console.log(pickedArr)
      console.log(prevPickedArr)
      dispatch('finished')
    }

    prevPickedArr = [...pickedArr]
    

    hiddenArr.forEach((value, index, array) => {
      if (visible.includes(index)) array[index] = false
      else array[index] = true
    })
    hiddenArr[curr] = false
  }

</script>

<section class="h-full w-full py-14" bind:this={gridDiv}>
  {#each poemArr as line, index} 
  
  <Stanza on:selected={handleSelection} 
          hidden={(hiddenArr[index] && !selectedArr[index])} 
          {gridDiv} {line} id={index+1}></Stanza>
  
  {/each}
</section>

<style>
  
  section { 
    
    font-size: 0.8rem;

    background-color: oldlace;
   
    display: grid;
    /* gap: 12px; */
    grid-template-columns: repeat(6, minmax(0, 1fr));
    /* grid-auto-rows: 50px; */
    /* gap: 0.5rem; */
  }
  

  @media (max-width: 599px) { 
    section {
      /* padding: 20% 10px; */
      /* height: 60%; */
      /* width: 1000%; */
      /* overflow-y: hidden; */
      grid-auto-flow: row dense;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      /* grid-template-columns: none; */
    }

    /* section div:nth-child(odd) {
      transform: skewY(-15deg);
    }
    section div:nth-child(even) {
      transform: translateY(100px) skewY(15deg);

      
    } */
  }
</style>