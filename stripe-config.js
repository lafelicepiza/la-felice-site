/* Stripe publishable key — Stage C1 config gate.
 *
 * EMPTY (the default) = card payments are not live yet: the checkout
 * shows a plain "Card payment — coming soon, pay at pickup" note and
 * no card form is mounted. When the owner finishes connecting Stripe,
 * the key goes here (or the program host serves it via
 * GET /v1/payments/config) and the card form mounts by itself.
 *
 * A publishable key (pk_...) is PUBLIC by design — it ships to every
 * browser. The secret key NEVER appears on the site.
 *
 * The `|| ''` guard lets a host/test inject the key before this file
 * loads without editing it. */
window.LF_STRIPE_PUBLISHABLE_KEY = window.LF_STRIPE_PUBLISHABLE_KEY || '';
