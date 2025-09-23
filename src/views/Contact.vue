<template>
  <div class="container p-6 mx-auto mt-32">
    <div class="flex flex-col gap-6 lg:flex-row">
      <!-- Left Box with Title and Paragraph -->
      <div class="w-full p-6 text-white bg-blue-600 rounded-lg shadow-md lg:w-1/2">
        <h2 class="mb-4 text-5xl font-bold">Join the Fight</h2>
        <p class="text-lg">
          Angel Rivera for Congress. Join the movement to bring positive change to our community. Enter your details below to stay informed and show your support for the campaign.
        </p>
      </div>

      <!-- Right Box with the Form -->
      <div class="w-full p-6 bg-gray-100 rounded-lg bg-dark lg:w-1/2">
        <h3 class="mb-4 text-3xl font-bold">Sign Up</h3>
        <form @submit.prevent="submitForm" class="space-y-[1.05rem]">
          <div>
            <label for="name" class="block text-gray-700">Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              class="w-full px-4 py-2 border rounded-lg text-dark"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              class="w-full px-4 py-2 border rounded-lg text-dark"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label for="subject" class="block text-gray-700">Subject</label>
            <input
              v-model="form.subject"
              type="tel"
              id="subject"
              class="w-full px-4 py-2 border rounded-lg text-dark"
              placeholder="Enter your subject"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
              v-model="form.message"
              type="tel"
              id="message"
              class="w-full h-[80px] px-4 py-2 border rounded-lg text-dark"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            class="px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-white hover:text-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useToast } from "vue-toastification";

export default {
  name: 'AngelForm',
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const toast = useToast();

    const submitForm = () => {
      // Validate form fields
      if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) {
        toast.error("Please fill in all fields.");
        return;
      }

      // Handle form submission
      toast.success(`Thank you, ${form.value.name}! We have received your information.`);

      // Reset form fields
      form.value = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

input:focus {
  outline: none;
  border: none;
}
</style>
