<script>
  import { formatMoney } from "$lib";
  import { fade } from "svelte/transition";
  let { productInfo=$bindable(), closePreviewFunc, addToCartFunc } = $props()

  let imgIndx = $state(0)

  let qtyVal = $state(productInfo.quantity || 1)

  function qtyValFunc(event) {
    let incrementBy = parseInt(event.target.dataset.incrementBy)

    // increment/decrement product item quantity
    qtyVal = qtyVal + incrementBy
    
    // check if in case of decrement, value is not less the 1
    if (qtyVal < 1) {
      qtyVal = 1
      productInfo.quantity = qtyVal
      return
    }

    productInfo.quantity = qtyVal
  }

</script>


<!-- product's categories snippet -->
{#snippet prodtCategories(catItem)}
  <span 
    class="
      inline-block px-1.5 py-0.5 not-sm:text-[9px] sm:text-[11px] border border-blue-300 bg-blue-600/20 text-blue-500 
      rounded-lg capitalize
    "
  >
    {catItem}
  </span>
{/snippet}

<!-- image view item snippet -->
{#snippet imgViewItem(img, indx)}
  <div 
    class="snap-start w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl not-sm:rounded-none shadow-lg not-sm:shadow-none" 
    id="img_{indx}"
    data-alt="product img_{indx}" 
    style='background-image: url("{img}");'
  >
  </div>
{/snippet}

<!-- image list item snippet -->
{#snippet imgItem(img, indx)}
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <a href="#img_{indx}" class="decoration decoration-0 inline-block size-10">
    <div 
      class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-10" 
      class:border-2={imgIndx === indx} 
      class:border-accent={imgIndx === indx} 
      data-alt="img item slide" 
      style='background-image: url("{img}");'>
    </div>
  </a>
{/snippet}


<section 
  class="
    fixed z-50 right-0 left-0 top-0 w-full h-dvh not-sm:top-0 flex flex-col sm:justify-center items-center backdrop-blur-sm 
    bg-black/80
  "
>
  <section 
    transition:fade={{ duration: 80 }} 
    class="
      not-sm:w-full sm:w-9/12 not-sm:h-dvh not-sm:overflow-hidden sm:rounded-xl bg-white relative 
      sm:py-3.5 sm:px-3
    "
  >
    <!-- close button -->
    <div class="absolute sm:right-1.5 not-sm:left-1.5 top-2">
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <i 
        class="lni lni-xmark p-0.5 rounded-full cursor-pointer bg-gray-100/20 text-gray-300" style="font-size: 32px;" 
        onclick={closePreviewFunc}
      ></i>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- product images -->
      <div class="flex flex-col gap-4">
        <!-- product img view -->
        <div 
          class="
            grid grid-flow-col auto-cols-[100%] snap-x snap-mandatory scroll-pl-1 overscroll-x-contain 
            overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden 
            scroll-smooth
          "
        >
          {#each productInfo?.imgs as img, indx}
            {@render imgViewItem(img, indx)}
          {/each}
        </div>

        <!-- list of other images -->
        <div class="grid grid-flow-col gap-3 overflow-x-auto not-sm:px-2">
          {#each productInfo?.imgs as img, indx}
            {@render imgItem(img, indx)}
          {/each}
        </div>
      </div>

      <!-- product's info & add to cart btn -->
      <div class="not-sm:h-full overflow-auto not-sm:pb-20 not-sm:px-1">
        <div class="flex flex-col gap-6 not-sm:px-2 prodt-desc">
          <!-- product categories, name, & price -->
          <div class="flex flex-col gap-2">
            <!-- product categories -->
            {#if productInfo?.categories.length > 0}
              <p class="flex gap-1 tracking-wider">
                {#each productInfo?.categories as cat}
                  {@render prodtCategories(cat)}
                {/each}
              </p>
            {/if}
            <!-- product name -->
            <h1 class="text-gray-900 text-4xl not-sm:text-3xl font-black leading-tight tracking-tight">
              {productInfo?.name}
            </h1>
            <!-- product amount -->
            <p class="text-amber-500 text-2xl font-bold leading-tight mt-2 text-accent">
              {formatMoney(productInfo?.price)}
            </p>
          </div>
  
          <div class="">
            <!-- product description -->
            <div class="border-t border-b border-gray-200 py-6">
              <h3 class="text-gray-400 font-semibold mb-3">Description</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{productInfo?.description}</p>          
            </div>
    
            <!-- product quantity -->
            <div class="flex items-center gap-4 mt-3.5 not-sm:pb-10">
              <h3 class="text-gray-400 font-semibold">Quantity</h3>
    
              <div class="flex items-center rounded-lg border border-gray-300">
                <!-- decrement qty btn -->
                <button 
                  type="button" 
                  class="px-3 py-2 text-amber-500 border-r border-gray-300 font-bold hover:bg-gray-100 rounded-l-md transition-colors cursor-pointer" 
                  data-increment-by="-1" 
                  onclick={qtyValFunc}
                >
                  -
                </button>
    
                <!-- total quantity -->
                <input 
                  class="w-12 text-center bg-transparent border-0 text-amber-500 font-bold focus:ring-0" 
                  type="text" 
                  bind:value={qtyVal} 
                />
    
                <!-- increment qty btn -->
                <button 
                  type="button" 
                  class="px-3 py-2 text-amber-500 border-l border-gray-300 font-bold hover:bg-gray-100 rounded-r-md transition-colors cursor-pointer"
                  data-increment-by="1" 
                  onclick={qtyValFunc}
                >
                  +
                </button>
              </div>
            </div>
          </div>
  
          <!-- add to cart button -->
          <div class="not-sm:bg-white not-sm:absolute not-sm:bottom-0 not-sm:w-full left-0 not-sm:p-2">
            <button 
              class="
                w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent 
                bg-amber-500 text-amber-50 text-base font-bold leading-normal tracking-wide shadow-md  
              "
              data-prodt-id="{productInfo?.id}" 
              onclick={addToCartFunc}
            >
             <span class="truncate">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>


<style>
  button:active {
    animation: clickBtnEffect 0.4s ease;
  }

  @media (max-width: 600px) and (max-height: 950px) {
    .prodt-desc {
      height: 200px;
    }
  }
  @media (max-width: 600px) and (max-height: 812px) {
    .prodt-desc {
      height: 177px;
    }
  }

  @media (max-width: 600px) and (max-height: 740px) {
    .prodt-desc {
      height: 150px;
    }
  }

</style>