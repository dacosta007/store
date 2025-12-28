<script>
  let { children } = $props();
</script>

<div class="@container mt-5">
  <div class="@[480px]:p-4">
    <div class="flex min-h-120 flex-col gap-6 not-sm:rounded-xl bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4" data-alt="A luxurious perfume bottle on a dark, elegant background" style='background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl0FXSQUEl-qdzWov0WYkOzTOuszjvRxeJKqWKDv3BXp6t_xPwpkMK1vK6E4OXdGM-6S_nmQ9eUisuYIHWOFyqUprse8yuXgZ6cdi2fEguHg9b7-ix_zL99t8CzRMifpgLf4F7QUayBn12RU6LDN2lzaFLPfVJmtzEtw8VdujSexw832w-ip75clLa_X8yi5K0R4cijOw766vXp_G6aD6H8OzX4psaZywp-OJQZOXadhdatvP62XmO3jpH6EqqRa4Dsdrl3atVIgH8");'>
      <div class="flex flex-col gap-4 text-center font-display">
        <h1 class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
          Discover Your Signature Scent
        </h1>
        <h2 class="text-white/90 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal max-w-2xl mx-auto">
          Explore our curated collection of exquisite perfumes and fragrances, crafted with passion and the finest ingredients.
        </h2>
      </div>

      <div class="flex-wrap gap-4 flex not-sm:w-full sm:justify-center not-sm:flex-col not-sm:items-center font-display">
        <a 
          href="/shop"
          class="
            flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg 
            h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]
            not-sm:w-full
          "
        >
          <span class="truncate">Shop Now</span>
        </a>

        <a 
          href="/shop#new-arrivals" 
          class="
            flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 
            bg-white/20 backdrop-blur-sm text-white text-base font-bold leading-normal tracking-[0.015em] 
            not-sm:w-full  
          "
        >
          <span class="truncate">New Arrivals</span>
        </a>
      </div>
    </div>
  </div>
</div>


<style>
  a[href]:active {
    animation: clickBtnEffect 0.3s ease-in-out;
  }
</style>