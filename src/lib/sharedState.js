import { readable, writable } from "svelte/store";

export let currentStep = writable(1);
export let planSelection = writable("arcade")
export let planPrice = readable(0)
export let monthlyIsSelected = writable(true);
export let onlineServiceAddOnIsAdded = writable(false)
export let largerStoreAddOnIsAdded = writable(false)
export let customizableProfileAddOnIsAdded = writable(false)

// STEP 1 FORM
export let customerName = writable("")
export let customerEmail = writable("")
export let customerPhone = writable("")
export let nameIsError = writable(false)
export let emailIsError = writable(false)
export let phoneIsError = writable(false)