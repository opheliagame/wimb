<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { skin } from '../stores/skin'

  const dispatch = createEventDispatcher()

  export let line, id, hidden, gridDiv
  let words = line.split(' ')
  let word = words[Math.floor(Math.random()*words.length)]
  let closed = true
  let lineDiv, wordDiv, container

  const toggle = () => {
    if(line == '') return
    dispatch('selected', { id: id })
    if(!closed) return
    closed = !closed
  }

  function resizeGridItem(){
    let grid = gridDiv
    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let rowSpan = Math.ceil((lineDiv.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    
    
    container.style.gridRowEnd = "span "+rowSpan;
    
  }

  onMount(() => {
    container.style.transform = (id-1) % 2 == 0 ? 'skewY(-20deg)' : 'skewY(20deg)'
    container.height = lineDiv.height

    const randomSkin = $skin[Math.floor(Math.random() * $skin.length)]
    container.style['background-color'] = randomSkin.back
    
    // if(Array.from(container.classList).includes('hidden') == false) {
    //   if(Array.from(content.classList).includes('word') || Array.from(content.classList).includes('line')) {
    //     container.style['color'] = randomSkin.front
    //   }
    // }

    if(closed == true) {
      lineDiv.style['color'] = randomSkin.front
      wordDiv.style['color'] = randomSkin.front
    }
    
  })
  
 
</script>

<div bind:this={container} on:click={toggle} 
  class="{hidden ? 'container flex hidden' :
          line == '' ? 'container flex colored' : 
          'container flex'}">
  <div bind:this={lineDiv} class="{closed ? 'line flex hidden' : 'line flex'}">{line}</div>
  <div bind:this={wordDiv} class="{closed ? 'word flex' : 'word flex hidden'}">{word}</div>
  {line}
</div>

<style>
  div {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
    color: transparent;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
  
  div.container {
    padding: 12px;
  }

  div.word, div.line {
    width: 100%;
    height: 100%;
    padding: 12px;
    position: absolute;

    left: 0;
    top: 0;
    
  }

  div.word {
    font-weight: bold;
  }

  div::selection {
    color: black;
    background-color: white;
  }

  div.hidden {
    /* display: none; */
    visibility: hidden;
  }

  div.colored {
  
    /* background-color: pink; */
  }

  .flex {
    /* box-sizing: border-box;
    border: solid transparent 12px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>