<script setup lang="ts">
import BaseTitle from "@/components/base/BaseTitle.vue";
import BaseInput from "@/components/base/BaseInput.vue";
</script>

<template>
  <BaseTitle title="Bienvenue" />
  <div class="text-purple-light font-light">
    <p>Connectez-vous avec votre adresse mail ci-dessous</p>
    <p>Pas encore de compte ? Inscrivez-vous</p>
  </div>
  <div class="flex flex-col gap-5 mt-5">
    <BaseInput placeholder="Entrer votre email" type="email" />
    <BaseInput placeholder="Entrer votre mot de passe" type="password" />
  </div>
</template>
