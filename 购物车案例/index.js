const app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 10,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 20,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 30,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            },
        ],
        checked: []
    },
    computed: {
        totalPrice: function () {
            var prices = 0;
            for (var i = 0; i < this.list.length; i++) {
                prices += this.list[i].price * this.list[i].count;
            }
            return prices.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        },
        checkPrice: function () {
            if(this.checked.length === 0 || this.checked === null) return 0;
            var prices = 0;
            for (var i = 0; i < this.checked.length; i++) {
                for(var j = 0; j < this.list.length; j++) {
                    if(this.checked[i] === this.list[j].id) {
                        // console.log(this.checked[i] + " , " +  this.list[j].id);
                        prices += this.list[j].price * this.list[j].count;
                    }
                }
            }
            return prices.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        handleReduce: function (index) {
            if (this.list.length === 0 || this.list[index].count === 1) return;
            this.list[index].count--;
        },

        handleAdd: function (index) {
            if (this.list.length === 0) return;
            this.list[index].count++;
        },

        handleRemove: function (index) {
            if (this.list.length === 0 || this.list[index] === null) return;
            var delIndex = this.checked.indexOf(this.list[index].id);
            if(delIndex >= 0) {
                this.checked.splice(delIndex, 1);
            }
            this.list.splice(index, 1);
        }
    }
});