<script>
import checkMarkImg from "../assets/images/icon-checkmark.svg"
import { customizableProfileAddOnIsAdded, largerStoreAddOnIsAdded, monthlyIsSelected, onlineServiceAddOnIsAdded } from "./sharedState";
</script>

<article>
	<h3>Pick add-ons</h3>
	<p class="description">Add-ons help enhance your gaming experience.</p>
	<div class="addOnContainer">
		<button class="addOnOption" class:selected={$onlineServiceAddOnIsAdded} on:click={()=>{$onlineServiceAddOnIsAdded = !$onlineServiceAddOnIsAdded}}>
			<div class="checkBox" class:selected={$onlineServiceAddOnIsAdded}>
				<img src={checkMarkImg} alt="">
			</div>
			<div class="info">
				<strong>Online service</strong>
				<p>Access to multiplayer games</p>
			</div>
			{#if $monthlyIsSelected}
				<p class="price">+$1/mo</p>
			{:else}
				<p class="price">+$10/yr</p>
			{/if}
		</button>
		<button class="addOnOption" class:selected={$largerStoreAddOnIsAdded} on:click={()=>{$largerStoreAddOnIsAdded = !$largerStoreAddOnIsAdded}}>
			<div class="checkBox" class:selected={$largerStoreAddOnIsAdded}>
				<img src={checkMarkImg} alt="">
			</div>
			<div class="info">
				<strong>Larger storage</strong>
				<p>Extra 1TB of cloud save</p>
			</div>
			{#if $monthlyIsSelected}
				<p class="price">+$2/mo</p>
			{:else}
				<p class="price">+$20/yr</p>
			{/if}
		</button>
		<button class="addOnOption" class:selected={$customizableProfileAddOnIsAdded} on:click={()=>{$customizableProfileAddOnIsAdded = !$customizableProfileAddOnIsAdded}}>
			<div class="checkBox" class:selected={$customizableProfileAddOnIsAdded}>
				<img src={checkMarkImg} alt="">
			</div>
			<div class="info">
				<strong>Customizable profile</strong>
				<p>Custom theme on your profile</p>
			</div>
			{#if $monthlyIsSelected}
				<p class="price">+$2/mo</p>
			{:else}
				<p class="price">+$20/yr</p>
			{/if}
		</button>
	</div>
</article>

<style>
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


.addOnContainer {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.addOnOption {
	height: 62px;
	background-color: #F8F9FF;
	border: 1px solid #D6D9E6;
	border-radius: 8px;
	cursor: pointer;
	padding-inline:16px;
	display: flex;
	align-items: center;
	gap: 16px;
}

.addOnOption.selected {
	border: 1px solid #483EFF;
}

.checkBox {
	width: 20px;
	height: 20px;
	border: 1px solid #D6D9E6;
	border-radius: 4px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}

.checkBox.selected {
	background-color: #483EFF;
	border: 1px solid #483EFF;
}

.info {
	text-align: left;
}

.info strong {
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #022959;
}

.info p {
	font-size: 12px;
	line-height: 20px;
	color: #9699AA;
}

.price {
	font-size: 12px;
	line-height: 20px;
	color: #483EFF;
	margin-left: auto;
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

	.addOnOption {
		height: 81px;
		padding-inline: 24px;
	}

	.info strong {
		font-size: 16px;
		line-height: 18px;
	}

	.info p {
		font-size: 14px;
	}

	.price {
		font-size: 14px;
	}
}
</style>