 import { parse } from "dotenv";
import {dBank_backend} from "../../declarations/dBank_backend";

 window.addEventListener("load", async function(){
    console.log("finidhed");
    const currentAmount =  await dBank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount *100)/100;



 });

 document.querySelector("form").addEventListener("submit",async function(event){
   event.preventDefault();
   //   console.log("submitted");
   const inputAmount = parseFloat(document.getElementById("input-amount").value);
   const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
   await dBank_backend.topUp(inputAmount);
   document.getElementById("value").innerText = Math.random(currentAmount *100)/100;

 });