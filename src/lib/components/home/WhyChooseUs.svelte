<script>
  let {  } = $props();

  const featuresList = [
    {
      icon: "lni lni-hand-taking-leaf-1",
      title: "Exquisite Ingredients",
      description: "We source the finest ingredients from around the world to create our signature scents.",
    },
    {
      icon: "lni lni-alarm-1",
      title: "Long-lasting Scents",
      description: "Our perfumes are designed to last, leaving a lasting impression throughout the day.",
    },
    {
      icon: "lni lni-heart",
      title: "Cruelty-Free",
      description: "We are proud to be a cruelty-free brand, committed to ethical and sustainable practices.",
    },
  ];
</script>


<!-- Features snippets -->
{#snippet features(title, description, icon)}
  <div class="flex flex-1 gap-4 rounded-xl border border-blue-200 bg-white p-6 flex-col text-center items-center">
    <div class="text-blue-950">
      <span class="{icon} text-3xl" style="font-size: 32px;"></span>
    </div>

    <div class="flex flex-col gap-1">
      <h2 class="text-gray-900 text-lg font-bold leading-tight">{title}</h2>
      <p class="text-gray-500 text-base font-normal leading-normal font-body">{description}</p>
    </div>
  </div>
{/snippet}


<article class="flex flex-col gap-10 px-4 py-10 @container font-display">
  <header class="flex flex-col gap-4 text-center">
    <h1 class="text-gray-900 tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-180 mx-auto">
      Why Choose <b>Royal Scents</b>?
    </h1>
    <p class="text-gray-700 text-base font-normal leading-relaxed max-w-180 mx-auto font-body">
      We are passionate about crafting unique and high-quality fragrances that tell a story. Our commitment to quality and craftsmanship ensures an unforgettable olfactory experience.
    </p>
  </header>

  <!-- Features Grid of why choose us -->
  <section 
    class="
      grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 p-0 
      not-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
    "
  >
    {#each featuresList as {  title, description, icon }}
      {@render features(title, description, icon)}
    {/each}
  </section>
</article>