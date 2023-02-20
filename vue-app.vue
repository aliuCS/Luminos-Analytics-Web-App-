import Vue from 'vue';

new Vue({
  el: '#app',
  data: {
    pageViews: 0,
    bounces: 0,
    bounceRate: 0
  },
  created() {
    this.incrementPageViews();
    this.calculateBounceRate();
  },
  methods: {
    incrementPageViews() {
      this.pageViews++;
    },
    incrementBounces() {
      this.bounces++;
    },
    calculateBounceRate() {
      window.addEventListener('beforeunload', () => {
        this.incrementBounces();
        this.bounceRate = Math.round((this.bounces / this.pageViews) * 100);
      });
    }
  }
});
