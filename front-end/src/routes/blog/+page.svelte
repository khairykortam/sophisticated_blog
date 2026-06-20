<script>
  const posts = [
    { href: "/entry_1", title: "Entry 1", summary: "idk but this is amazing" },
  ];
</script>

<main class="blog-page">
  <h1 class="page-title">BLOG</h1>
  <div class="blog-list">
    {#each posts as post}
      <article class="card blog-item">
        <h2>
          <a href={post.href}>{post.title}</a>
        </h2>
        <p class="summary">{post.summary}</p>
      </article>
    {/each}
  </div>
</main>

<style>
  .blog-page {
    background-color: #f0ebe0;
    min-height: calc(100vh - 40px);
    padding: 20px;
  }
  .blog-list {
    margin-top: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 12px;
  }
  .card {
    background: #fff;
    border: 1px solid #4a3b31;
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
  .blog-item h2 {
    margin-bottom: 6px;
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
</style>
