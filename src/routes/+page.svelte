<script>
  import toast, { Toaster } from 'svelte-french-toast';
  import { Cart } from '$lib/stores/Cart.svelte.js'
  import HeroSec from "$lib/components/home/HeroSec.svelte";
  import ProductsSect from "$lib/components/home/ProductsSect.svelte";
  import Testimonials from "$lib/components/home/Testimonials.svelte";
  import WhyChooseUs from "$lib/components/home/WhyChooseUs.svelte";
  import NewsletterSec from "$lib/components/home/NewsletterSec.svelte";
  import ProductPreview from '$lib/components/ProductPreview.svelte';


  let { data } = $props()

  // svelte-ignore state_referenced_locally
  let { productList } = data

  // help toggle product preview window
  let showPreviewModal = $state('close') // i.e 'open' or 'close'
  let previewInfo = $state({ id: '', imgs: [], name: '', description: '', categories: [], price: '', quantity: 0 })
  
  let confirmationInfo = $state({
    type: '', // 'success' | 'error'
    title: '',
    message: ''
  })

  // help show toast notifications 
  function toastFunc(message, type) {
    if (type === 'error' || type === undefined || type === '') {
      toast.error(message, {
        duration: 6000,
        position: 'top-center',
      })
      return
    }

    toast.success(message, {
      duration: 4000,
      position: 'top-center',
    })
  }

  /* help get product item to be previewed */
  function previewProduct(event) {
    // get the product within list of product listed (i.e: 'productList')
    const productId = parseInt(event.target.dataset.product)
    let product = productList.find(ele => ele.id === productId)
    product.quantity = 1  // set the default quantity (qty) of the product
    
    // set the product detail info for the product to be shown
    previewInfo = product 

    // show preview modal window
    showPreviewModal = 'open'
  }

  /* help add product items into cart */
  function addToCart(event) {
    const prodtId = Number(event.target.dataset.prodtId) 
    
    // check if product ID could be gotten
    if (prodtId === undefined) {
      toast.error('Error: Product Id cannot be accessed/seen', {
        duration: 4000,
        position: 'bottom-center',
      })
      return
    }
    
    console.log(previewInfo)
    // add to the 'Cart store' & show toast notification product added. 
    let checkProdt = Cart.findIndex(prodt => prodtId === prodt?.id) 
    if (checkProdt > -1) return 

    Cart.push(previewInfo)

    // show toast notification.
    toast.success(`${previewInfo?.name ?? 'Product'} Added to cart.`, {
      duration: 4000,
      position: 'bottom-center',
    })

    // close preview window if opened
    showPreviewModal = 'close'
  }
</script>


<!-- a toast alert -->
<Toaster position="top-center" />

<!-- Product preview window -->
{#if showPreviewModal === 'open'}
  <ProductPreview 
    bind:productInfo={previewInfo} 
    closePreviewFunc={() => showPreviewModal = 'close'} 
    addToCartFunc={addToCart} 
  />
{/if}

<div class="flex flex-col gap-10 lg:gap-16">
  <!-- Hero section -->
  <HeroSec />

  <!-- Why choose us section -->
  <WhyChooseUs />

  <!-- top/recent products listings -->
  <ProductsSect products={productList} addToCartFunc={addToCart} previewProdtFunc={previewProduct} /> 

  <!-- Testimonials section -->
  <Testimonials />

  <!-- Newsletter subscription -->
  <NewsletterSec {toastFunc} bind:confirmationInfo={confirmationInfo} />
</div>
