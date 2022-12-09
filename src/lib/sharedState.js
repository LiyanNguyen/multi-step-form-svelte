import { readable, writable } from "svelte/store";

export let currentStep = writable(1);
export let planSelection = writable("arcade")
export let planPrice = readable(0)
export let monthlyIsSelected = writable(true);
export let onlineServiceAddOnIsAdded = writable(false)
export let largerStoreAddOnIsAdded = writable(false)
export let customizableProfileAddOnIsAdded = writable(false)