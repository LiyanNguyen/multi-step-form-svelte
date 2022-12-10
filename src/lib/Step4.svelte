<script>
import { currentStep, customizableProfileAddOnIsAdded, largerStoreAddOnIsAdded, monthlyIsSelected, onlineServiceAddOnIsAdded, planSelection } from "./sharedState";

let planPrice = 0
let addOnPrice = 0
let totalPrice = 0

// PLAN SELECTION
if ($planSelection === "arcade") {
	planPrice = 9
}

else if ($planSelection === "advanced") {
	planPrice = 12
}

else if ($planSelection === "pro") {
	planPrice = 15
}

// ADD ONS SELECTION
if($onlineServiceAddOnIsAdded) {
	addOnPrice += 1
}

if($largerStoreAddOnIsAdded) {
	addOnPrice += 2
}

if($customizableProfileAddOnIsAdded) {
	addOnPrice += 2
}

if (!$monthlyIsSelected) {
	planPrice = planPrice * 10
	addOnPrice = addOnPrice * 10
}

totalPrice = planPrice + addOnPrice

let showComponent = false
window.setTimeout(()=>{showComponent = true}, 0)
</script>

<article class:show={showComponent}>
	<h3>Finishing up</h3>
	<p class="description">Double-check everything looks OK before confirming.</p>
	<div class="subscription">
		<div class="chosenPlan">
			<div>
				<p>{$planSelection} {#if $monthlyIsSelected}(Monthly){:else}(Yearly){/if}</p>
				<button on:click={()=>{$currentStep = 2}}>Change</button>
			</div>
			<strong>${planPrice}/{#if $monthlyIsSelected}mo{:else}yr{/if}</strong>
		</div>
		<div class="line"></div>
		{#if $onlineServiceAddOnIsAdded}
			<div class="chosenAddOns">
				<p>Online Service</p>
				{#if $monthlyIsSelected}<p>+$1/mo</p>{:else}<p>+$10/yr</p>{/if}
			</div>
		{/if}
		{#if $largerStoreAddOnIsAdded}
			<div class="chosenAddOns">
				<p>Larger Storage</p>
				{#if $monthlyIsSelected}<p>+$2/mo</p>{:else}<p>+$20/yr</p>{/if}
			</div>
		{/if}
		{#if $customizableProfileAddOnIsAdded}
			<div class="chosenAddOns">
				<p>Customizable Profile</p>
				{#if $monthlyIsSelected}<p>+$2/mo</p>{:else}<p>+$20/yr</p>{/if}
			</div>
		{/if}
	</div>
	<div class="totalContainer">
		<p>Total {#if $monthlyIsSelected}(per month){:else}(per year){/if}</p>
		<p class="totalPrice">${totalPrice}/{#if $monthlyIsSelected}mo{:else}yr{/if}</p>
	</div>
</article>

<style>
article {
	transition: 0.3s;
	position: relative;
	right: -10rem;
	opacity: 0;
}
.show {
	opacity: 1;
	right: 0;
}

h3 {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
	color: #022959;
	margin-bottom: 9px;
}

.description {
	font-size: 16px;
	line-height: 25px;
	color: #9699AA;
	margin-bottom: 22px;
}

.subscription {
	background-color: #F8F9FF;
	border-radius: 8px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.chosenPlan {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	color: #022959;
}

.chosenPlan p {
	font-weight: 500;
	line-height: 16px;
	text-transform: capitalize;
}

.chosenPlan button {
	font-size: 14px;
	line-height: 20px;
	text-decoration-line: underline;
	color: #9699AA;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.chosenPlan strong {
	font-weight: 700;
	line-height: 20px;	
}

.line {
	height: 1px;
	background-color: #9699AA;
	mix-blend-mode: normal;
	opacity: 0.2;
}

.chosenAddOns {
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	line-height: 20px;
}

.chosenAddOns p:first-child {
	color: #9699AA;
}

.chosenAddOns p:nth-child(2) {
	color: #022959;
}

.totalContainer {
	display: flex;
	justify-content: space-between;
	padding-top: 24px;
	padding-inline: 16px;
}

.totalContainer p:first-child {
	font-size: 14px;
	line-height: 20px;
	color: #9699AA;
}

.totalPrice {
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	color: #483EFF;
}

@media screen and (min-width: 1366px) {
	h3 {
		font-size: 32px;
		line-height: 37px;
		margin-bottom: 11px;
	}
	
	.description {
		margin-bottom: 35px;
	}

	.subscription {
		gap: 16px;
		padding: 16px 24px 24px 24px;
	}

	.chosenPlan {
		font-size: 16px;
	}

	.chosenPlan p {
		line-height: 18px;
	}

	.chosenPlan button {
		transition: 0.15s;
	}

	.chosenPlan button:hover {
		color: #483EFF;
	}

	.totalContainer {
		padding-inline: 24px;
	}

	.totalPrice {
		font-size: 20px;
	}
}
</style>