<script setup lang="ts">
import background from "@/assets/background.png";
import loginBackground from "@/assets/login_background.png";
import logo from "@/assets/logo.png";
import LoginForm from "@/components/LoginForm/LoginForm.vue";
</script>

<template>
  <div
    class="w-screen h-screen flex items-center justify-center"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <section class="flex flex-col items-center">
      <div>
        <img class="logo" :src="logo" />
      </div>
      <div
        class="dashboard flex justify-around items-center border-rounded-light"
      >
        <div class="login-container flex-1 p-5">
          <LoginForm />
        </div>
        <div
          class="rectangle-background border-rounded-light m-4"
          :style="{ backgroundImage: `url(${loginBackground})` }"
        ></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.logo {
  width: 289px;
  height: 40.63px;
}

.dashboard {
  width: 1100px;
  height: 500px;
  margin-top: 5%;
}

.login-container {
  width: 347px;
}

.rectangle-background {
  width: 502px;
  height: 452px;
}
</style>
