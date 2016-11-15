(function(Vue, firebase){
  var db = firebase.database();
  var ref = db.ref('app/echo');
  var orders = ref.child('orders');
  var customers = ref.child('customers');
  var payments = ref.child('payments');

  // hardcoded product, this would be obtained from a product list in firebase
  var product = {price: 3.99};
  var productId = 'someProductId';
  new Vue({
    el: '#app',
    data: {
      customer: {
        email: 'foo@bar.io',
        name: 'foo bar'
      },
      payment: {
        details: {
          cvc: '123',
          expiry: '12/23',
          number: '4242424242424242'
        },
        amount: product.price,
        currency: 'gbp',
        type: 'card'
      }
    },
    methods: {
      submit: function(){
        var orderId = orders.push().key;
        var customerId = customers.push().key;
        var paymentId = payments.push().key;
        var customer = this.customer;
        customer.payments = {};
        customer.orders = {};
        customer.orders[orderId] = true;
        customer.payments[paymentId] = true;
        customers.child(customerId).set(customer);

        var payment = this.payment;
        payment.customer = customerId;
        payments.child(paymentId).set(payment);
        var order = {
          customer: customerId,
          payment: paymentId,
          product: productId
        };
        orders.child(orderId).set(order);
      }
    },
  });
})(Vue, firebase);
