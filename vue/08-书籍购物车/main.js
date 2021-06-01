const app = new Vue({
  el: '#app',
  data: {
    books: [{
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
      {
        id: 2,
        name: '《算法导论2》',
        date: '2002-9',
        price: 185.00,
        count: 1
      },
      {
        id: 3,
        name: '《算法导论3》',
        date: '2003-9',
        price: 285.00,
        count: 1
      },
      {
        id: 4,
        name: '《算法导论4》',
        date: '2004-9',
        price: 385.00,
        count: 1
      }
    ]
  },
  computed: {
    TotalPrice() {
      let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //     totalPrice += this.books[i].count * this.books[i].price;
      // }
      // console.log('TotalPrice computed调用');
        for (const key in this.books) {
            totalPrice+=key.price*key.count;
        }
        return totalPrice;
    },
    // TotalCost(){
    //   return function(index) {
    //     console.log('TotalCost computed调用');
    //     return this.books[index].count * this.books[index].price;
    //    }
    //   }
  },
  methods: {
    add(index) {
      this.books[index].count++;
    },
    sub(index) {
      this.books[index].count--;
    },
    remove(index) {
      this.books.splice(index, 1);
    },
    TotalCost(index) {
      console.log('TotalCost methods');
      return this.books[index].count * this.books[index].price;
    }

  },
  //过滤器定义位置
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }

})