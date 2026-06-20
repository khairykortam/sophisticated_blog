<script>
  const posts = [
    { href: "/book-1", title: "Animal Farm", summary: '"All Animals are equal, but some animals are more equal than others"' },
  ];
</script>

<main class="book-page">
  <h1 class="page-title">BOOKS</h1>
  <div class="book-list">
    {#each posts as post}
      <article class="card book-item">
        <h2>
          <a href={post.href}>{post.title}</a>
        </h2>
        <p class="summary">{post.summary}</p>
      </article>
    {/each}
  </div>
</main>

<style>
  .book-page {
    background-color: #f0ebe0;
    min-height: calc(100vh - 40px);
    padding: 20px;
  }
  .book-list {
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
  .book-item h2 {
    margin-bottom: 6px;
  }
  .book-item h2 a {
    color: #3b2e26;
    text-decoration: none;
  }
  .book-item h2 a:hover {
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
