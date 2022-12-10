<script>
import { customerEmail, customerName, customerPhone, emailIsError, nameIsError, phoneIsError } from "./sharedState";

$:if ($customerName !== "") {
	$nameIsError = false
}
$:if ($customerEmail !== "") {
	$emailIsError = false
}
$:if ($customerPhone !== "") {
	$phoneIsError = false
}

let showComponent = false
window.setTimeout(()=>{showComponent = true}, 0)
</script>

<article class:show={showComponent}>
	<h3>Personal Info</h3>
	<p>Please provide your name, email address, and phone number.</p>
	<form>
		<div>
			<label for="nameInput">Name</label>
			<input type="text" class:error={$nameIsError} id="nameInput" placeholder="e.g. Stephen King" bind:value={$customerName}>
		</div>
		<div>
			<label for="emailInput">Email Address</label>
			<input type="email" class:error={$emailIsError} id="emailInput" placeholder="e.g. stephenking@lorem.com" bind:value={$customerEmail}>
		</div>
		<div>
			<label for="phoneInput">Phone Number</label>
			<input type="number" class:error={$phoneIsError} id="phoneInput" placeholder="e.g. +1 234 567 890" bind:value={$customerPhone}>
		</div>
	</form>
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

p {
	font-size: 16px;
	line-height: 25px;
	color: #9699AA;
	margin-bottom: 22px;
}

form {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

form div {
	display: flex;
	flex-direction: column;
}

label {
	font-size: 12px;
	line-height: 14px;
	color: #022959;
	margin-bottom: 3px;
}

input {
	width: 295px;
	height: 40px;
	border: 1px solid #D6D9E6;
	border-radius: 4px;
	background-color: white;
	padding-inline: 16px;
	font-weight: 500;
	font-size: 15px;
	line-height: 17px;
	color: #022959;
}

input::placeholder {
	color: #9699AA;
}

input:focus {
	outline: 1px solid #483EFF;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	-moz-appearance: textfield;
}

input.error {
	outline: 1px solid #EE374A;
}

@media screen and (min-width: 1366px) {
	h3 {
		font-size: 32px;
		line-height: 37px;
		margin-bottom: 11px;
	}

	p {
		font-size: 16px;
		line-height: 25px;
		margin-bottom: 40px;
	}

	label {
		font-size: 14px;
		line-height: 16px;
		margin-bottom: 8px;
	}

	input {
		width: 450px;
		height: 48px;
		border-radius: 8px;
		font-size: 16px;
		line-height: 25px;
	}
}
</style>