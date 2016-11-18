!-- v-cloak hides any un-compiled data bindings until the Vue instance is ready. -->

/*<form id="main" v-cloak>

<h1>Services</h1>

<ul>
<!-- Loop through the services array, assign a click handler, and set or
remove the "active" css class if needed -->
<li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{ 'active': service.active}">
    <!-- Display the name and price for every entry in the array .
    Vue.js has a built in currency filter for formatting the price -->
{{service.name}} <span>{{service.price | currency}}</span>
</li>
</ul>

<div class="total">
    <!-- Calculate the total price of all chosen services. Format it as currency. -->
Total: <span>{{total() | currency}}</span>
</div>

</form>*/

var demo = new Vue({
    el: '#main',
    data: {
        // Define the model properties. The view will loop
        // through the services array and genreate a li
        // element for every one of its items.
        services: [
            {
                name: 'Web Development',
                price: 300,
                active:true
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){

            var total = 0;

            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });

            return total;
        }
    }
});
