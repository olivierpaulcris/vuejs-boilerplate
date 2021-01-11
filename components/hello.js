Vue.component('hello', {
      template: `
            <h1 class="my-5">
                  {{title}}
            </h1>
      `,
      data() {
            return {
                  title: 'Hello World using Vuejs'
            }
      }
});