const app = new Vue({
     el: '#app',
     data: {
          fruits: [{
                    name: 'Apple',
                    quantity: 3
               },
               {
                    name: 'Orange',
                    quantity: 0
               },
               {
                    name: 'Pear',
                    quantity: 6
               },
               {
                    name: 'Bannana',
                    quantity: 8
               }
          ],
          newFruit: "",
          total: 0,
          background: "bg-dark",
          color: false
     },
     methods: {
          addFruit() {
               this.fruits.push({
                    name: this.newFruit,
                    quantity: 0
               });
               this.newFruit = "";
          }
     },
     computed: {
          countFruits() {
               this.total = 0;

               for (fruit of this.fruits) {
                    this.total = this.total + fruit.quantity;
               }

               return this.total;
          }
     }
});