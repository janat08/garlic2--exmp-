<template>
  <div class="navBar">
    <div class="ui grid">
<!--  <div class="computer tablet only row"> -->
  <div class="ui inverted fixed menu navbar page grid">
<!--    <a href="" class="brand item">Garlic</a> -->
    <a href="/" class="item">Garlic</a>
    <a href="/auction" class="item">Auction</a>
    <a href="/corporate/list" class="item">Corporate</a>
<!--    <a>{{> loginButtons}}</a>
    {{#if currentUser}}
    <a href="/profile">User profile</a>
    {{/if}} -->
</div>

<div class="ui grid">
  <div class="computer tablet only row">
    <div class="ui inverted fixed menu navbar page grid">
      <a href="" class="brand item">Project Name</a>
      <a href="" class="active item">Home</a>
      <a href="" class="item">About</a>
      <a href="" class="item">Contact</a>
      <div class="right menu">
        <a href="" class="item">Fixed top</a>
      </div>
    </div>
  </div>
  <div class="mobile only row">
      <div class="ui fixed inverted navbar menu">
          <a href="" class="brand item">Project Name</a>
          <div class="right menu open">
              <a href="" class="menu item">
                  <i class="content icon"></i>
              </a>
          </div>
      </div>
      <div class="ui vertical navbar menu">
        <a href="" class="active item">Home</a>
        <a href="" class="item">About</a>
        <a href="" class="item">Contact</a>
        <div class="menu">
          <a href="" class="active item">Default</a>
          <a href="" class="item">Static top</a>
          <a href="" class="item">Fixed top</a>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import {jQuery} from 'meteor/jquery';

export default {
  ready: function() {
    $('.right.menu.open').on("click",function(e){
      e.preventDefault();
      $('.ui.vertical.menu').toggle();
    });
    $('.ui.dropdown').dropdown();
  }
}
</script>

<style scoped>
.widget {
  background: #a0ddc4;
  padding: 12px;
  border-radius: 3px;
  width: 300px;
  border-bottom: solid 1px #40b883;
}

input {
  display: block;
  margin: 4px 0;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 6px 12px;
  border-radius: 3px;
}
</style>
