<template>
    <h1>nadoda elgamela</h1>
    <h2>nadoda katkota</h2>
    <hr/>
    <ul style="list-style: none; display: flex; justify-content: center; gap: 20px;">
      <li>
        <router-link :to="{ name: 'MyLearnings' }"> My learning </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'MyWishlist' }"> My WishList </router-link>
      </li>
    </ul>
    <hr/>
    <div class="container">
      <router-view/>
    </div>
  </template>
  