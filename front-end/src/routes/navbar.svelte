<script>


const navcomponents = [
    {href: '/',title:'Home',img:'/assets/home-icon-silhouette.png'},
    {href:'/blog',title: 'Blog',img:'/assets/blog.png'},
    {href:'/books', title:'Books', img:'/assets/open-book.png'}
];
</script>
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
<nav class="sticky-nav">
 <ul>
    {#each navcomponents as navitem }
        <li>
            <a
            href={navitem.href}
            >
            <img id={navitem.title} src={navitem.img} alt={navitem.title}>
            <span class="nav-tooltip">{navitem.title}</span>
        </a>
        </li>
    {/each}
 </ul>
</nav>

<style>
    .sticky-nav{
        position: fixed;
        bottom:20px;
        left:50%;
        transform: translateX(-50%);
        background-color: #F0EBE0;
        border: 2px solid #4A3B31;
        border-radius: 25px;
        padding: 6px 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0,2);
        z-index: 1100;
    }
      .sticky-nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
   .sticky-nav ul li {
        margin: 0 10px;
        position: relative;
    }
    .sticky-nav ul li a {
        text-decoration: none;
        color: #4A3B31;
        font-family: "Cormorant Garamond", Georgia, serif;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.03em;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        justify-content: center;
        transition: transform 0.2s ease, background-color 0.2s ease;
        
    }
    .sticky-nav ul a img {
        width: 50px;
        aspect-ratio:1;
        display:block;
        transition: opacity 0.2s ease;
    }
    .sticky-nav ul li a:hover,
    .sticky-nav ul li a:focus {
        transform: translateY(-3px) scale(1.1);
    }
    .sticky-nav ul li a:hover img{
        opacity: 0.65;
    }
    

</style>