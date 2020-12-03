const app = new Vue({
     el: '#app',
     data: {
          title: 'Hello World using Vuejs',
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
          newFruit: ""
     },
     methods: {
          addFruit() {
               this.fruits.push({
                    name: this.newFruit,
                    quantity: 0
               });
          }
     }
});