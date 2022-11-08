const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            },
        ]
    },
    computed: {
        packageStyle: function () {
            return {
                border: 1 + 'px'
            }
        },
        totalPrice: function () {
            var prices = 0;
            for (var i = 0; i < this.list.length; i++) {
                prices += this.list[i].price * this.list[i].count;
            }
            return prices.toString ().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function(index) {
            if(this.list.length === 0 || this.list[index].count === 1) return;
            this.list[index].count--;
        },

        handleAdd: function(index) {
            if(this.list.length === 0) return;
            this.list[index].count++;
        },

        handleRemove: function(index) {
            if(this.list.length === 0 || this.list[index] === null) return;
            this.list.splice(index, 1);
        }
    }
});