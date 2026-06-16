<script>


const navcomponents = [
    {href: '/',title:'Home'},
    {href:'/blog',title: 'Blog'},
    {href:'/projects', title:'Projects'}
];
</script>
<nav class="sticky-nav">
 <ul>
    {#each navcomponents as navitem }
        <li>
            <a
            href={navitem.href}
            >
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
        right:50%;
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
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.2s ease, background-color 0.2s ease;
        
    }

</style>