<script>
  import { enhance } from "$app/forms";

  let { toastFunc, confirmationInfo=$bindable()  } = $props();

  let disabledBtn = $state(false);
  let showBtnLoader = $state(false);
  let showConfirmation = $state(false);

  function handleNewsletter({ formElement, formData, action, cancel, submitter }) {
    disabledBtn = true
    showBtnLoader = true

    // `formElement` is this `<form>` element
		// `formData` is its `FormData` object that's about to be submitted
    if (!formData.get('email')) {
      // also show toast notification
      toastFunc('Please enter a valid email address.', 'error')
      cancel()
      disabledBtn = false
      showBtnLoader = false
      return
    }
		// `action` is the URL to which the form is posted
		// calling `cancel()` will prevent the submission
		// `submitter` is the `HTMLElement` that caused the form to be submitted
    
    return async ({ result, update }) => {
      // button and loading states reset
      disabledBtn = false
      showBtnLoader = false

      let { success, error, title, message } = result.data

      if (result.type === 'failure') {
        confirmationInfo = {
          type: 'error',
          title: 'Subscription Failed',
          message: message ? message : 'There was an issue subscribing you to our newsletter. Please try again later.'
        }

        showConfirmation = true
        
        return
      }

      // show confirmation modal
      confirmationInfo = {
        type: success ? 'success' : 'error',
        title: title ? title : 'Subscription Successful',
        message: message ? message : 'There was an issue subscribing you to our newsletter. Please try again later.'
      }

      showConfirmation = true
    }
  }
</script>


<!-- Confirmation Modal -->
{#if showConfirmation}
  <Confirmation 
    type={confirmationInfo.type} 
    title={confirmationInfo.title} 
    description={confirmationInfo.message} 
    closeFunc={() => showConfirmation = false} 
  />
{/if}

<div class="@container">
  <div class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20 bg-[#221e5a] rounded-xl">
    <header class="flex flex-col gap-2 text-center font-display">
      <h1 class="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-180 mx-auto">
        Join Our Fragrance Community
      </h1>
      <p class="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal max-w-180 mx-auto font-body">
        Subscribe to our newsletter for exclusive offers, new product announcements, and more.
      </p>
    </header>
    
    <div class="flex flex-1 justify-center">
      <form action="?/newsletter" method="post" use:enhance={handleNewsletter} class="flex w-full flex-1 rounded-lg sm:px-0 md:px-30">
        <label class="flex flex-1 not-sm:flex-col not-sm:gap-4 w-full">
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email address" 
            data-newsletter="newsletter-email"
            required 
            class="
              form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 focus:outline-0 
              border-none bg-white focus:border-none placeholder:text-gray-500 px-4 rounded-r-none border-r-0 pr-2 
              not-sm:py-3.5 text-sm not-sm:rounded-r-lg font-normal leading-normal 
            " 
          />
          
          <div class="flex items-center justify-center rounded-r-lg border-none">
            <button 
              type="submit" 
              class="
                btn relative flex min-w-21 max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 
                py-3 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] 
                sm:rounded-l-none not-sm:w-full
              "
              disabled={disabledBtn}
            >
              {#if showBtnLoader}
                <span class="loader py-3 px-6 block w-full"></span>
              {:else}
                <span class="truncate">Subscribe</span>
              {/if}
            </button>
          </div>
        </label>
      </form>
    </div>
  </div>
</div>


<style>
  .btn:active {
    animation: clickEffect 0.1s forwards;
  }
  .btn:disabled {
    animation: none;
  }
  .loader {
    width: 30px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side,#b1bcd8 90%,#0000);
    background: 
      var(--_g) 0%   50%,
      var(--_g) 50%  50%,
      var(--_g) 100% 50%;
    background-size: calc(100%/3) 100%;
    animation: l7 1s infinite linear;
  }
  @keyframes l7 {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
  }
</style>