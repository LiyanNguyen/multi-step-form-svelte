<script>
import arcadeImg from "../assets/images/icon-arcade.svg"	
import advanceImg from "../assets/images/icon-advanced.svg"	
import proImg from "../assets/images/icon-pro.svg"	
import { monthlyIsSelected, planSelection } from "./sharedState";
let showComponent = false
window.setTimeout(()=>{showComponent = true}, 0)
</script>

<article class:show={showComponent}>
	<h3>Select your plan</h3>
	<p class="description">You have the option of monthly or yearly billing.</p>
	<div class="optionContainer">
		<button class="boxOption" class:selected="{$planSelection === 'arcade'}" on:click={()=>{$planSelection = "arcade"}}>
			<img src={arcadeImg} alt="">
			<div>
				<strong>Arcade</strong>
				{#if $monthlyIsSelected}
					<p>$9/mo</p>
				{:else}
					<p>$90/yr</p>
					<span>2 months free</span>
				{/if}
			</div>
		</button>
		<button class="boxOption" class:selected="{$planSelection === 'advanced'}" on:click={()=>{$planSelection = "advanced"}}>
			<img src={advanceImg} alt="">
			<div>
				<strong>Advanced</strong>
				{#if $monthlyIsSelected}
					<p>$12/mo</p>
				{:else}
					<p>$120/yr</p>
					<span>2 months free</span>
				{/if}
			</div>
		</button>
		<button class="boxOption" class:selected="{$planSelection === 'pro'}" on:click={()=>{$planSelection = "pro"}}>
			<img src={proImg} alt="">
			<div>
				<strong>Pro</strong>
				{#if $monthlyIsSelected}
					<p>$15/mo</p>
				{:else}
					<p>$150/yr</p>
					<span>2 months free</span>
				{/if}
			</div>
		</button>
	</div>
	<div class="switchContainer">
		<p class:selected={$monthlyIsSelected}>Monthly</p>
		<button class="swtich" on:click={()=>{$monthlyIsSelected = !$monthlyIsSelected}}>
			<div class="circle" class:right={!$monthlyIsSelected}></div>
		</button>
		<p class:selected={!$monthlyIsSelected}>Yearly</p>
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

.optionContainer {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.boxOption {
	padding-inline: 16px;
	background-color: white;
	border: 1px solid #D6D9E6;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	gap: 14px;
	padding-top: 14px;
	padding-bottom: 17px;
}

.boxOption.selected {
	background-color: #F8F9FF;
	border: 1px solid #483EFF;
}

.boxOption div {
	text-align: left;
}

.boxOption strong {
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
	color: #022959;
}

.boxOption p {
	font-size: 14px;
	line-height: 20px;
	color: #9699AA;
}

.boxOption span {
	font-size: 12px;
	line-height: 20px;
	color: #022959;
}

.switchContainer {
	background-color: #F8F9FF;
	border-radius: 8px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	margin-top: 24px;
}

.switchContainer p {
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	color: #9699AA;
	transition: 0.25s;
}

.switchContainer p.selected {
	color: #022959;
}

.swtich {
	width: 38px;
	height: 20px;
	background-color: #022959;
	border-radius: 10px;
	padding-inline: 4px;
	cursor: pointer;
}

.swtich .circle {
	width: 12px;
	height: 12px;
	background-color: white;
	border-radius: 50%;
	transition: 0.25s;
	
}

.swtich .circle.right {
	transform: translateX(14px);
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

	.optionContainer {
		flex-direction: row;
		gap: 18px;
	}

	.boxOption {
		flex-direction: column;
		width: 138px;
		height: 160px;
		justify-content: space-between;
		transition: 0.15s;
	}

	.boxOption:hover {
		border: 1px solid #483EFF;
	}
}
</style>