<section>
  <div class="grid-one">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="grid-two">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</section>

<style>
  section {
    height: 100%;
    width: 100%;
  }

  div {
    /* width: 100px; */
    height: 100px;
    border: 1px solid yellow;
  }

  .grid-one {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 100px 0;
  }
  
  .grid-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 100px 0;
  }
  
  .grid-one div {
    background-color: pink;
    z-index: 10;
    transform: skewY(-20deg);
    
  }
  
  .grid-two div {
    background-color: purple;
    z-index: 1;
    transform: skewY(20deg);
  }
</style>