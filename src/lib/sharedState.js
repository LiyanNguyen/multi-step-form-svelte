import { writable } from "svelte/store";

export let planSelection = writable("arcade")
export let monthlyIsSelected = writable(true);
export let onlineServiceAddOnIsAdded = writable(false)
export let largerStoreAddOnIsAdded = writable(false)
export let customizableProfileAddOnIsAdded = writable(false)