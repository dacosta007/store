import { nanoid, customAlphabet } from "nanoid";
import { Cart } from "./stores/Cart.svelte.js";

// place files you want to import through the `$lib` alias in this folder.
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


/* help generate random strings (i.e: with nanoid module) */
export function genRandomId(customAlphaNumericString, stringLength=6) {
  let randId = ''

  if (customAlphaNumericString === undefined) {
    randId = nanoid(stringLength)
    return randId
  } 

  randId = customAlphabet(customAlphaNumericString, stringLength)

  return randId
}


/* help format currency */
export function formatMoney(amt, notation, compactDisplay, ) {
  const money = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    notation: (notation === undefined) ? 'standard' : 'compact',
    compactDisplay: (compactDisplay === undefined) ? 'short' : 'long',
    maximumFractionDigits: 2
  })

  return money.format(amt)
}


/* help format human readable number figure */
export function formatNumber(num) {
  const formatter = new Intl.NumberFormat('en-US');
  // console.log(formatter.format(1234567.89)); // Output: "1,234,567.89"
  return (!parseFloat(num)) ? 0 : formatter.format(num)
}


/* help format name */
export function formatName(nm) {
  const names = nm.split(' ')
  return { firstName: (names[0]).trim(), lastName: (names[1]).trim() }
}


/* help format time */
export function formatTime(dateTime) {
  const frmtOpts = { 
    // timeZone: 'Africa/Lagos', 
    timeStyle: 'short', 
    hourCycle: 'h23' 
  }
  const timeFormatter = new Intl.DateTimeFormat('en-NG', frmtOpts);

  const formattedTime = timeFormatter.format(dateTime || new Date());

  // console.log(formattedTime); // Example output: "3:45 PM"
  return formattedTime
}


/* help generate rating stars */
export function renderStars(rating) {
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


/* help add product item into cart */
function addToCart(event) {
  const prodtId = parsetInt(event.target.dataset.prodtId)
  
  // add to the 'Cart store' & show toast notification product added
  let checkProdt = Cart.findIndex(prodt => prodtId === prodt?.id) 
  if (checkProdt > -1) return

  // search for the product within the list of products
  let product = productList.find(ele => ele.id === prodtId) 
  Cart.push(product) 
}