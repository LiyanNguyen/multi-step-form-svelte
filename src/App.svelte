<script>
  import { once, prevent_default } from "svelte/internal";
import Step1 from "./lib/Step1.svelte";
  let currentStep = 1;
</script>

<main>
  <aside>
    <div class="overAllStep">
      <div class="stepContainer">
        <button class="stepButton" class:selected="{currentStep === 1}" on:click={()=>{currentStep = 1}}>1</button>
        <div class="stepText">
          <p>step 1</p>
          <b>your info</b>
        </div>
      </div>
      <div class="stepContainer">
        <button class="stepButton" class:selected="{currentStep === 2}" on:click={()=>{currentStep = 2}}>2</button>
        <div class="stepText">
          <p>step 2</p>
          <b>select plan</b>
        </div>
      </div>
      <div class="stepContainer">
        <button class="stepButton" class:selected="{currentStep === 3}" on:click={()=>{currentStep = 3}}>3</button>
        <div class="stepText">
          <p>step 3</p>
          <b>add-ons</b>
        </div>
      </div>
      <div class="stepContainer">
        <button class="stepButton" class:selected="{currentStep === 4}" on:click={()=>{currentStep = 4}}>4</button>
        <div class="stepText">
          <p>step 4</p>
          <b>summary</b>
        </div>
      </div>
    </div>
  </aside>
  <div class="formContainer">
    <Step1/>
  </div>
  <footer>
    <button class="previousButton" on:click={()=>{currentStep--}} class:show="{currentStep > 1}">go back</button>
    <button class="nextButton" on:click={()=>{currentStep++}}>next step</button>
  </footer>
</main>

<style>
/* MOBILE FIRST APPROACH */
main {
  position: relative;
  height: 100vh;
}

aside {
  height: 172px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(./assets/images/bg-sidebar-mobile.svg);
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 32px;
}

.overAllStep {
  display: flex;
  gap: 16px;
}

.stepText b,
.stepText p {
  display: none;
}

.stepButton {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: 0.25s;
}

.stepButton.selected {
  border: 1px solid #BEE2FD;
  background-color: #BEE2FD;
  color: #022959;
}

.formContainer {
  padding: 32px 24px;
  width: 343px;
  height: max-content;
  background-color: white;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  border-radius: 10px;
  position: absolute;
  top: 99px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

footer {
  height: 72px;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.previousButton {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #9699AA;
  text-transform: capitalize;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: transparent;
  visibility :hidden;
}

.previousButton.show {
  visibility: visible;
}

.nextButton {
  border: none;
  background-color: #022959;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: white;
  padding: 16px 12px;
  text-transform: capitalize;
  cursor: pointer;
}

@media screen and (min-width: 1366px) {
  main {
    width: 940px;
    height: 600px;
    background-color: white;
    box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
    border-radius: 15px;
    display: flex;
    padding: 16px;
  }

  aside {
    min-width: 274px;
    min-height: 568px;
    background-image: url(./assets/images/bg-sidebar-desktop.svg);
    border-radius: 10px;
    justify-content: initial;
    padding-left: 32px;
    padding-top: 40px;
  }

  .overAllStep {
    flex-direction: column;
    gap: 32px;
  }

  .stepContainer {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .stepContainer b,
  .stepContainer p {
    display: block;
    text-transform: uppercase;
  }

  .stepContainer p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ABBCFF;
  }

  .stepContainer b {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    color: white;
  }

  .stepText {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .formContainer  {
    width: 450px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 56px;
    top: initial;
    right: 0;
    left: initial;
    box-shadow: initial;
    padding: 0;
  }

  footer {
    position: initial;
    margin-top: auto;
    margin-left: 100px;
    margin-bottom: 16px;
    padding: initial;
    width: 450px;
    height: 48px;
  }
  
  .nextButton {
    width: 123px;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    line-height: 18px;
  }
}
</style>