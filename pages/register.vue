<template>
   <section class="py-[50px] flex flex-col items-center justify-center px-4">
      <img src="/assets/svgs/logo-type.svg" alt="" />
      <div class="text-[32px] font-semibold text-dark mt-[70px]">Sign Up</div>
      <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
         Manage your employees to achieve <br />
         a bigger goals for your company
      </p>
      <form class="w-full card" @submit.prevent="userRegister">
         <div class="form-group">
            <label for="" class="text-grey">Company Name</label>
            <input type="text" class="input-field" v-model="register.name" />
         </div>
         <div class="form-group">
            <label for="" class="text-grey">Email Address</label>
            <input type="email" class="input-field" v-model="register.email" />
         </div>
         <div class="form-group">
            <label for="" class="text-grey">Password</label>
            <input
               type="password"
               class="input-field"
               v-model="register.password"
            />
         </div>
         <!-- <a href="signin.html" class="w-full btn btn-primary mt-[14px]">
            Continue
         </a> -->
         <button type="submit" class="w-full btn btn-primary mt-[14px]">
            Continue
         </button>
      </form>
   </section>
</template>

<script>
export default {
   data() {
      return {
         register: {
            name: "",
            email: "",
            password: "",
         },
      };
   },
   methods: {
      async userRegister() {
         try {
            const response = await this.$axios.post("/register", this.register);
            // console.log(response);
            try {
               let login = await this.$auth.loginWith("local", {
                  data: {
                     email: this.register.email,
                     password: this.register.password,
                  },
               });
            } catch (error) {
               console.error("Error during login:", error);
            }
         } catch (error) {
            console.error("Register failed", error);
         }
      },
   },
};
</script>