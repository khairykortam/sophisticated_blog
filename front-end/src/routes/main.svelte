<script>
  import { onMount } from "svelte";

  onMount(() => {
    const typedText = document.getElementById("text-about-me");
    const cursor = document.querySelector(".cursor");
    if (typedText && cursor) {
      const textArr = [
        "STEM OCT '28",
        "Competitive Programmer",
        "Curious",
        "Human",
        "Mathematician",
      ];
      let idx = 0;
      let charIndex = 0;

      function type() {
        const current = textArr[idx];
        if (charIndex < current.length) {
          typedText.textContent += current.charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
        } else {
          setTimeout(() => {
            typedText.textContent = "";
            charIndex = 0;
            idx = (idx + 1) % textArr.length;
            type();
          }, 1500);
        }
      }

      type();
    }
  });
</script>

<!-- <body> -->
<main class="home-page">
  <div class="landing">
    <div class="content-wrapper">
      <div class="text">
        <h1>Khairy Qortam</h1>
        <p id="text-about-me-container">
          <span id="text-about-me"></span>
          <span class="cursor"></span>
        </p>
      </div>
      <div class="image">
        <img src="/assets/me.jpeg" alt="sombody" loading="lazy" />
      </div>
    </div>
  </div>
</main>

<!-- </body> -->

<style>
  /* body {
     height: 100%;
    margin: 0;
    padding: 0;
    background-color: #faf9f6;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
        
} */
  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 100px;
  }
  main.home-page {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  h1,
  h2,
  h3 {
    font-family: "Georgia", Times, serif;
    color: #3b2e26;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  .landing img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .landing {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-wrapper {
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
  }
  .text {
    flex: 1;
    text-align: left;
  }
  .text h1 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 3.5em;
  }
  .image {
    flex-shrink: 0;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }
  #text-about-me-container {
    font-size: 1.5em;
  }
  .cursor {
    display: inline-block;
    width: 2px;
    height: 1.1em;
    background-color: #4a3b31;
    margin-left: 3px;
    opacity: 1;
    animation: blink 0.7s infinite;
  }
  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  @media (max-width: 800px) {
    main {
      padding: 0;
      padding-bottom: 75px;
    }
    .content-wrapper {
      flex-direction: column;
      gap: 20px;
      max-width: 90%;
    }
    .text {
      text-align: center;
      order: 2;
    }
    .text h1 {
      font-size: 2.5em;
    }
    #text-about-me-container {
      font-size: 1.2em;
    }
    .image {
      order: 1;
      width: 180px;
      aspect-ratio: 1;
    }
  }
</style>
