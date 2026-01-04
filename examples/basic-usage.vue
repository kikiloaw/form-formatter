<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
      FormFormatter Demo
    </h1>
    
    <FormFormatter 
      :sampledata="formFields" 
      :form="formData" 
      :position="false"
      @selectRefsReady="handleRefsReady"
      @triggerCallback="handleCallback"
    />
    
    <div class="mt-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Form Data:
      </h2>
      <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto text-sm">
        {{ JSON.stringify(formData, null, 2) }}
      </pre>
    </div>
    
    <div class="mt-6">
      <button 
        @click="resetForm"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Reset Form
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormFormatter from '../src/FormFormatter.vue';

const formData = ref({
  name: '',
  email: '',
  age: '',
  category: '',
  gender: '',
  interests: [],
  notifications: false,
  description: '',
  birthDate: '',
  documents: [],
  f138: true,
  f137: false,
  psa: false,
  student_year: ''
});

const formFields = [
  // Basic fields
  {
    type: 'text',
    label: 'Full Name',
    model: 'name',
    placeholder: 'Enter your full name',
    required: true,
    min: 2,
    max: 100,
    callback: 'sample_callback',
  },
  {
    type: 'text',
    label: 'Email',
    model: 'email',
    placeholder: 'Enter your email address',
    required: true
  },
  {
    type: 'number',
    label: 'Age',
    model: 'age',
    placeholder: 'Enter your age',
    min: 18,
    max: 120,
    required: true
  },
  
  // Select field
  {
    type: 'select',
    label: 'Category',
    model: 'category',
    options: [
      { value: 'student', text: 'Student' },
      { value: 'professional', text: 'Professional' },
      { value: 'entrepreneur', text: 'Entrepreneur' },
      { value: 'other', text: 'Other' }
    ],
    required: true
  },
  
  // Radio field
  {
    type: 'radio',
    label: 'Gender',
    model: 'gender',
    options: [
      { value: 'male', text: 'Male' },
      { value: 'female', text: 'Female' },
      { value: 'other', text: 'Other' }
    ],
    color: 'blue',
    required: true
  },
  
  // Checkbox group
  {
    type: 'checkbox-group',
    label: 'Interests',
    model: 'interests',
    options: [
      { value: 'sports', text: 'Sports' },
      { value: 'music', text: 'Music' },
      { value: 'reading', text: 'Reading' },
      { value: 'travel', text: 'Travel' },
      { value: 'cooking', text: 'Cooking' }
    ],
    color: 'green'
  },
  
  // Toggle field
  {
    type: 'toggle',
    label: 'Notifications',
    model: 'notifications',
    placeholder: 'Enable email notifications',
    value: false,
    color: 'purple'
  },
  
  // Grid layout example
  [
    {
      type: 'date',
      label: 'Birth Date',
      model: 'birthDate',
      required: true
    },
    {
      type: 'textarea',
      label: 'Description',
      model: 'description',
      placeholder: 'Tell us about yourself...',
      rows: 3,
      min: 10,
      max: 500
    }
  ],
  
  {
    type: 'file',
    label: 'Documents',
    model: 'documents',
    multiple: true,
    accept: '.pdf,.doc,.docx,.jpg,.png',
    placeholder: 'Upload your documents'
  },
   { type: 'checkbox-group', label: 'Student Year (Exclusive Array)', placeholder: 'default', model: 'student_year', color:'yellow', required: false,
        options: [
            { value: '1', text: 'Male' },
            { value: '2', text: 'Female' }
        ]
    },
  { type: 'checkbox-group', label: 'Freshmen (Separate Models)', placeholder: 'Form 138', model: 'f_group', required: false, color:'green', exclusive: true,
    options:[
        { model:'f138', text:'Form 138' },
        { model:'f137', text:'Form 137' },
        { model:'psa', text:'PSA' }
    ]
  },
];

const handleRefsReady = (refs) => {
  nextTick(() => {
        selectRefs.value = refs;
        // console.log('Select refs:', selectRefs.value);
    });
};

const sample_callback = () => {
    if (selectRefs.value.CampusID) {
    }
};

const handleCallback = (callbackName) => {
  const callbackMap = {
      sample_callback,
    };

    if (callbackMap[callbackName]) {
        callbackMap[callbackName]();
    }
};

const resetForm = () => {
  Object.keys(formData.value).forEach(key => {
    if (Array.isArray(formData.value[key])) {
      formData.value[key] = [];
    } else if (typeof formData.value[key] === 'boolean') {
      formData.value[key] = false;
    } else {
      formData.value[key] = '';
    }
  });
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
