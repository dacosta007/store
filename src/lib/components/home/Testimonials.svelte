<script>
  // let { testimonials = [] } = $props;

  const testimonials = [
    {
      name: "Adubike J.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwXo2EJkHHiWfZSi5XT7heo0ZltneNfAgzpyM9FHztAmTjBrKYAcC5rUGGA8ENdajY5tykRndbJ2HsElzaHLeZARvJJ5jDeieAxwm8KyQzJG2zxIajWMPuowUW0re_URgZC-oOtXHBA3GQhFKZivzjYFQ96J6dknNaEDGVavo8E9Ly--mGnJHJkejXs3MOgnTp_lTk0wtVhnaWmP5CsoGfp6JPxctsSxs2gl05m2rryAfdBYOMHzXLz0j5Awl955caUq20adhmqbHW",
      rating: 5,
      text: "The Ocean Breeze perfume is my absolute favorite! It's so fresh and lasts all day. I get compliments everywhere I go. Scentify has a customer for life!"
    },
    // Add more testimonials as needed
    {
      name: "Michael B.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcoWrXlN2Ve_m7WNJ8eC8rw5NJ-O3iRmuFgYvoTWsVtNg1q9xOFVjJIazGvDosela-B4tDIkcuVo2bPb7LzzWWXRe_F5LbmSwtCIFdaTy6-YGJdOM-yfOKq0zGujgzsPcTC1MDLoTlY9MjQhwExTAD7_CNQSg6yJAv-Yd-wJdS9VZGr3BjJ4WE5oNWeT0k308BSXVXeAUjpHuvDZMsj62-Qt4e7iNu_h0iEMYtis35u4kK3jLRmmeN7gxMxPTC0-joQWvIGbCkUT1f",
      rating: 4.5,
      text: "I'm in love with the Golden Hour scent. It's warm, inviting, and so unique. The quality is exceptional, and I appreciate the cruelty-free mission."
    },
    {
      name: "Janet R.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDw1XC7sWFe0pOK8RLmfo5yk9BNbixQntU_W5G-w27HYG3ifRyz9lShq43uGCvMeP6nwkU_bTgnYAelJAw-ApMvKGYs-Bk8BWzFnRGbJRXWxmCDbMd_gNjGsi9-FNhwwK4ml74RbkHscfeMMqJIZhk-AExx0l_2r5JM8nIvU7JITTapMr2zWVz3IxPvVI7jFcserXpdv2ppzT1mhALaArifhlhC5RsqtqYZQNqeUdD_SmXI6ksshnMweQcUTwKC4BupYzLSEEbOftB2",
      rating: 5,
      text: "Midnight Bloom is so mysterious and alluring. It's my go-to for evenings out. The packaging is also beautiful, making it a perfect gift"
    }
  ];
  
  /* help generate rating stars */
  function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = '';

    for (let i = 0; i < fullStars; i++) {
      stars += '<span class="lni lni-star-fat text-base"></span>';
    }

    if (halfStar) {
      stars += '<span class="lni lni-star-fat-half-2 text-base"></span>';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '<span class="lni lni-star-sharp-disabled text-base"></span>';
    }

    return stars;
  }
</script>


<!-- Testimonials snippet -->
{#snippet testament(name, img, rating, text)}
  <div class="flex flex-col gap-6 rounded-xl border border-blue-200 bg-white p-6">
    <div class="flex items-center gap-4">
      <img 
        alt="Customer Avatar" 
        class="h-12 w-12 rounded-full object-cover" 
        src={img} 
      />
    
      <div class="flex flex-col">
        <p class="text-text-light font-bold">{name}</p>
        <div class="flex text-primary">
          {@html renderStars(rating)}  
        </div>
      </div>
    </div>

    <p class="text-gray-400 font-body sm:text-base not-sm:text-sm italic">{text}</p>
  </div>
{/snippet}


<div class="flex flex-col not-sm:gap-5 sm:gap-10 px-4 py-10 font-display">
  <div class="flex flex-col gap-4 text-center">
    <h2 class="text-blue-950 tracking-light text-[32px] font-bold leading-tight">
      What Our Customers Say
    </h2>
    
    <p class="text-gray-600 text-base font-normal leading-relaxed max-w-180 mx-auto font-body">
      Hear from our satisfied customers and their experience with our fragrances.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each testimonials as { name, img, rating, text }}
      {@render testament(name, img, rating, text)}
    {/each}
  </div>
</div>