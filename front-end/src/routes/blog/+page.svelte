<script>
  const posts = [
    { href: "/entry_1", title: "Entry 1", summary: "idk but this is amazing" },
  ];
</script>

<main>
  <h1 class="page-title">BLOG</h1>
  <div class="blog-list">
    {#each posts as post}
      <article class="blog-item">
        <h2>
          <a href={post.href}>{post.title}</a>
        </h2>
        <p class="summary">{post.summary}</p>
      </article>
    {/each}
  </div>
</main>

<style>
  .blog-list {
    margin-top: 20px;
  }
  .blog-item {
    padding-bottom: 10px;
    border-bottom: 1px solid #f0ebe0;
  }
  .blog-item:last-child {
    border-bottom: none;
  }
  .blog-item h2 {
    margin-bottom: 5px;
  }
  .blog-item h2 a {
    color: #3b2e26;
    text-decoration: none;
  }
  .blog-item h2 a:hover {
    text-decoration: underline;
  }

  .page-title {
    font-size: 3em;
    margin-bottom: 30px;
    color: #3b2e26;
    padding-bottom: 15px;
    text-align: center;
    border-bottom: 3px solid #f0ebe0;
  }
  article {
    border: 2px black solid;
    border-radius: 10px;
    padding-left: 10px;
  }
</style>
