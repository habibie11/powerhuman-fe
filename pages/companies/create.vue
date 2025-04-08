<template>
   <section class="py-[70px] flex flex-col items-center justify-center px-4">
      <div class="text-[32px] font-semibold text-dark">Create New Company</div>
      <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
         Company that can bring your team <br />
         growing bigger and bigger
      </p>
      <form @submit.prevent="createCompany" class="w-full card">
         <div class="mb-[2px] mx-auto">
            <img src="/assets/svgs/ric-box.svg" alt="" />
         </div>
         <div class="form-group">
            <label for="" class="text-grey">Name</label>
            <input type="text" class="input-field" v-model="company.name" />
         </div>
         <button type="submit" class="w-full btn btn-primary mt-[14px]">
            Save
         </button>
      </form>
   </section>
</template>
 
 <script>
export default {
   middleware: "auth",
   data() {
      return {
         company: {
            name: "",
         },
      };
   },
   methods: {
      async createCompany() {
         try {
            const response = await this.$axios
               .post("/company", this.company)
               .then((response) => {
                  this.$router.push({
                     name: "companies-id",
                     params: { id: response.data.result.id },
                  });
               });
            console.log("Company created successfully:", response);
         } catch (error) {
            console.error("Error creating company:", error);
         }
      },
   },
};
</script>