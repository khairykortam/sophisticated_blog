<script>
const entries = [
{href:'/blog/why-do-we-like-suffering?',title:'why-do-we-like-suffering?'}
]
</script>
<main>
    <h1 class="page-title">BLOG</h1>
    <div class="blog-list">
        
            {#each entries as entry }
            <article class="blog-item">
            <h2>
                <a href="{entry.href}">{entry.title}</a>
            </h2>
        </article>
    {/each}
        
    </div>
</main>

<style>

</style>