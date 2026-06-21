<script>
  import Entry1 from "./entry_1.svelte";


</script>
<svelte:head>
  <title>Entry1</title>
</svelte:head>
<main class="post">
<div class="post-content">
    <header class="post-header">
    <h1 class="post-title">
    Entry 1
    </h1>
    </header>
    <div class="post-body">
        <p>Sorry, i was so lazy to add a new one here</p>
    </div>
</div>
</main>
<style>
.post {
    margin-bottom: 80px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
}
.post-header {
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #F0EBE0;
}
.post-title {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #3B2E26;
    text-align: left;
}
.post-body {
    line-height: 1.8;
    margin-bottom: 30px;
}
.post-body h2 {
    margin-top: 35px;
    margin-bottom: 15px;
    font-size: 1.8em;
}
.post-body h3 {
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.8em;
}
.post-body p {
    margin-bottom: 20px;
}

</style>
