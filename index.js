import React from 'react';
import ReactDOM from 'react-dom';
import Vue from 'vue';
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>


var app = new Vue({
    el: '#app',
    data: {
      pageViews: 0,
      bounces: 0,
      bounceRate: 0
    },
    created: function () {
      this.incrementPageViews();
      this.calculateBounceRate();
    },
    methods: {
      incrementPageViews: function () {
        this.pageViews++;
      },
      incrementBounces: function () {
        this.bounces++;
      },
      calculateBounceRate: function () {
        var vm = this;
        window.addEventListener('beforeunload', function () {
          vm.incrementBounces();
          vm.bounceRate = Math.round((vm.bounces / vm.pageViews) * 100);
        });
      }
    }
  });
  