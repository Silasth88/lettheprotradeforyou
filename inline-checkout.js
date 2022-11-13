//declare callback function 
function paymentCallback(response) { 
console.log(response); 
}

//sample payment request
 var samplePaymentRequest = {
  merchant_code: "MX007",
   pay_item_id: "101007", 
   txn_ref: "sample_txn_ref_123",
    amount: 10000, 
    currency: 566, // ISO 4217 numeric code of the currency used 
    onComplete: paymentCallback, 
    mode: 'TEST' };
    //call webpayCheckout to initiate the payment 
    window.webpayCheckout(samplePaymentRequest);