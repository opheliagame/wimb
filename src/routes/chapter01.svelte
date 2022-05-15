<script>
  import Poem from '../components/Poem.svelte'
  import { chapter01 } from '../stores/chapter01' 
  

</script>


<Poem chapter={$chapter01}></Poem>

