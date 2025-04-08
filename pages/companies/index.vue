<template>
   <section class="py-[70px] flex flex-col items-center justify-center px-4">
      <div class="text-[32px] font-semibold text-dark">Pilih Perusahaan</div>
      <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
         Team that can bring your company <br />
         growing bigger and bigger
      </p>
      <div class="w-full card">
         <div class="mb-[2px] mx-auto">
            <img src="/assets/svgs/ric-box.svg" alt="" />
         </div>
         <div class="form-group">
            <label for="" class="text-grey">Company Name</label>
            <p v-if="$fetchState.pending">Loading Companies...</p>
            <select
               v-if="companies.data"
               name="companies"
               v-model="selectedCompany"
               class="appearance-none input-field form-icon-chevron_down"
            >
               <option
                  :value="company.id"
                  v-for="company in companies.data.result.data"
                  :key="company.id"
               >
                  {{ company.name }}
               </option>
            </select>
         </div>
         <button
            @click="openCompany"
            type="button"
            class="w-full btn btn-primary mt-[14px]"
         >
            Continue
         </button>
         <div class="text-center">or</div>
         <NuxtLink
            :to="{ name: 'companies-create' }"
            type="button"
            class="w-full btn btn-white border"
         >
            Create Company
         </NuxtLink>
      </div>
   </section>
</template>
 
 <script>
export default {
   // layout: "form",
   middleware: "auth",
   data() {
      return {
         companies: [],
         selectedCompany: null,
      };
   },
   async fetch() {
      try {
         const response = await this.$axios.get("/company");
         this.companies = response;
         console.log("Companies:", response);
      } catch (error) {
         console.error("Error fetching companies:", error);
      }
   },
   methods: {
      openCompany() {
         this.$router.push(`/companies/${this.selectedCompany}`);
      },
   },
};
</script>