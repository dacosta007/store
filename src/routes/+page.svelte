<script>
  import toast, { Toaster } from 'svelte-french-toast';
  import HeroSec from "$lib/components/home/HeroSec.svelte";
  import ProductsSect from "$lib/components/home/ProductsSect.svelte";
  import WhyChooseUs from "$lib/components/home/WhyChooseUs.svelte";
  import NewsletterSec from "$lib/components/home/NewsletterSec.svelte";


  let { data } = $props();

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
</script>


<!-- a toast alert -->
<Toaster position="top-center" />

<div class="flex flex-col gap-10 lg:gap-16">
  <!-- Hero section -->
  <HeroSec />

  <!-- Why choose us section -->
  <WhyChooseUs />

  <!-- top/recent products listings -->
  <ProductsSect products={data?.products} />

  <!-- Newsletter subscription -->
  <NewsletterSec {toastFunc} bind:confirmationInfo={confirmationInfo} />
</div>
