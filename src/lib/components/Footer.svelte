<script>
 let { } = $props();

  const otherPagesLinks = [
    { title: "All Perfumes", link: "/shop" },
    { title: "New Arrivals", link: "#/shop#new-arrivals" },
    { title: "Best Sellers", link: "#/shop#best-sellers" },
  ];

  const otherContactLinks = [
    { title: "Contact Us", link: "/contact" },
    { title: "FAQ", link: "/contact#faq" },
    { title: "Shipping & Returns", link: "#/shipping-returns" },
  ];

  const socialLinks = [
    { title: "Facebook", link: "#/https://facebook.com/royalscents", icon: "lni lni-facebook" },
    { title: "Instagram", link: "#/https://instagram.com/royalscents", icon: "lni lni-instagram" },
    { title: "WhatsApp", link: "#/https://wa.me/1234567890", icon: "lni lni-whatsapp" },
  ];
</script>


<!-- other page links -->
{#snippet otherPages(title, link)}
  <a class="text-sm hover:text-primary dark:hover:text-secondary" href={link}>{title}</a>
{/snippet}

<!-- contact links -->
{#snippet contactLinks(title, link)}
  <a class="text-sm hover:text-primary dark:hover:text-secondary" href={link}>{title}</a>
{/snippet}

<!-- social media links -->
{#snippet socialMediaLinks(title, link, icon)}
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <a class="text-sm hover:text-primary dark:hover:text-secondary" {title} href={link}>
    <i class={icon} style="font-size: 24px;"></i>
  </a>
{/snippet}


<footer class="mt-16 bg-[#05031a] text-blue-100 border-b-[#8B4513]/20 pt-10 pb-8 px-4 sm:px-6 lg:px-10 font-body">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <!-- Site Info -->
    <div class="flex flex-col gap-4">
      <div class="size size-12">
        <img src="site_logo.png" alt="site logo" class="h-12 w-12 object-contain" />
      </div>
      <h3 class="font-display text-lg font-bold text-gray-900 dark:text-white">Royal Scents</h3>
      <p class="text-sm">Crafting memories, one scent at a time.</p>
    </div>

    <!-- other pages links -->
    <div class="flex flex-col gap-4">
      <h3 class="font-display text-lg font-bold text-gray-900 dark:text-white">Shop</h3>
      {#each otherPagesLinks as { title, link }}
        {@render otherPages(title, link)}
      {/each}
    </div>

    <!-- other contact pages -->
    <div class="flex flex-col gap-4">
      <h3 class="font-display text-lg font-bold text-gray-900 dark:text-white">Support</h3>
      {#each otherContactLinks as { title, link }}
        {@render contactLinks(title, link)}
      {/each}
    </div>
    
    <!-- social media links -->
    <div class="flex flex-col gap-4">
      <h3 class="font-display text-lg font-bold text-gray-900 dark:text-white">Follow Us</h3>
      <div class="flex gap-4">
        {#each socialLinks as { title, link, icon }}
          {@render socialMediaLinks(title, link, icon)}
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-8 pt-8 border-t border-solid border-blue-200 border-secondary/20 text-center text-sm">
    <p>© 2025 Royal Scents. All rights reserved.</p>
  </div>
</footer>