<script>
  import { scale } from "svelte/transition";
  import { DotLottieSvelte } from '@lottiefiles/dotlottie-svelte';
  
  let { title='Confirmation title', type='success' || 'error', description='', closeFunc } = $props()

  let errorTypeIcon = 'https://lottie.host/692964e0-60ac-4b0a-a568-c153d7832621/qT39mRNrvW.lottie'
  let successTypeIcon = 'https://lottie.host/8f47009b-5fba-4bc8-9d7b-3dca03dbaa01/9mf1q4A9jP.lottie'

</script>

<article class="fixed w-full h-dvh z-50 bg-black/65 backdrop-blur-xs flex justify-center items-center left-0 top-0 not-sm:px-2.5">
  <section transition:scale={{ duration: 50 }} class="bg-white rounded-lg border border-gray-200 py-4 px-2 sm:min-w-87.5 not-sm:w-full">
    <header class="flex flex-col justify-center gap-2.5 mb-3">
      <!-- confirmation icon success/failure -->
      <DotLottieSvelte
        src={(type === 'error') ? errorTypeIcon : successTypeIcon} 
        autoplay
      />

      <!-- confirmation title -->
      <h2 
        class="font-semibold capitalize text-center text-lg" 
        class:text-red-500={type === 'error'} 
        class:text-green-400={type === 'success'}
      >
        {title}
      </h2>
    </header>

    <p class="text-base text-gray-600 text-center mb-2.5">
      {description}
    </p>

    <!-- close btn -->
    <footer class="mt-4">
      <button 
        type="button" 
        onclick={closeFunc} 
        class="btn w-full rounded-lg py-3 px-6 bg-cyan-950 text-gray-200 text-center cursor-pointer"
      >
        close
      </button>
    </footer>
  </section>
</article>



<style>
  .btn:active {
    animation: clickEffect 0.1s forwards;
  }
  @keyframes clickEffect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.9);
      opacity: 0.7;
    }
  }
</style>