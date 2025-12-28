<script>
  import { page } from "$app/state";
  import { scale } from "svelte/transition";
  import { Cart } from "$lib/stores/Cart.svelte.js";
  
  let { } = $props();

  const allNavLinks = [
    { title: "Home", link: "/" },
    { title: "Shop", link: "/shop" },
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
  ]

  let currentPage = $derived(page)

  let showDropdownNav = $state(false)

  function closeDropdown(event) {
    if (showDropdownNav === false) return;

    if (showDropdownNav) {
      const dropdownBtn = event.target.closest('[data-dropdown-btn="menu-icon"]');
      const dropdownMenu = event.target.closest('[data-dropdown-menu="menu-dropdown"]');

      if (!dropdownBtn && !dropdownMenu) {
        showDropdownNav = false;
      }
    }
  }
</script>

<svelte:document onclick={closeDropdown} />

<!-- link snippet -->
{#snippet navLink(title, link)}
  <a 
    class="text-blue-950 text-sm font-medium leading-normal py-2 px-2.5 rounded-lg" href="{link}"
    class:is-active={link === currentPage.url.pathname}
  >
    {title}
  </a>
{/snippet}

<nav 
  class="
    fixed top-0 left-0 w-full z-30 bg-white/80 backdrop-blur-sm 
    flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-3 font-display
  "
>
  <div class="flex items-center gap-8">
    <div class="flex items-center gap-4 text-primary dark:text-secondary">
      <!-- site logo -->
      <span class="lni lni-funnel-1 text-2xl"></span>
      <h2 class="not-sm:hidden text-blue-950 text-xl font-bold leading-tight tracking-[-0.015em]">Royal Scents</h2>
    </div>
  </div>
  
  <div class="flex flex-1 justify-end items-center gap-4">
    {#if currentPage?.url?.pathname != '/'}
      <div class="flex items-center gap-2">
        <!-- cart icon -->
        <div class="relative">
          <i class="lni lni-cart-2 cart-icon text-blue-950 rounded-full hover:bg-blue-100 transition-colors hover:cursor-pointer" ></i>
          
          <!-- shows numbers of items in cart -->
          {#if Cart.length > 0}
            <div class="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
              {Cart.length}
            </div>
          {/if}
        </div>
      </div>
    {/if}

    <div class="md:hidden relative">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <i 
        class="lni lni-menu-hamburger-1 menu-icon text-blue-950 rounded-full hover:bg-blue-100 transition-colors hover:cursor-pointer" 
        onclick={() => showDropdownNav = !showDropdownNav} 
        data-dropdown-btn="menu-icon"
      ></i>
      
      {#if showDropdownNav}
        <div 
          class="
            absolute right-0 mt-2 w-48 p-2.5
            bg-white border border-gray-200 rounded-md shadow-lg z-40
          " 
          data-dropdown-menu="menu-dropdown" 
          transition:scale={{ duration: 100 }}
        >
          <div class="flex flex-col gap-1.5">
            {#each allNavLinks as { title, link }}
              <a 
                class="block px-4 py-2 rounded-lg text-blue-950 text-center text-sm font-medium hover:bg-gray-100"
                href="{link}"
                class:is-active={link === currentPage.url.pathname}
              >
                {title}
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>

    <!-- shows nav menu on larger screen -->
    <div class="hidden md:flex items-center gap-9">
      {#each allNavLinks as { title, link }}
        {@render navLink(title, link)}
      {/each}
    </div>
  </div>
</nav>

<style>
  a.is-active {
    background-color: var(--color-blue-950);
    color: var(--color-white);
    font-weight: 600;
  }
  .menu-icon, 
  .cart-icon  {
    font-size: 24px;
    padding: 0.5rem;
    transition: background-color 0.4s ease;

    &:active {
      animation: clickBtnEffect 0.4s linear;
    }

    &:hover {
      background-color: var(--color-blue-100);
    }
  }
</style>