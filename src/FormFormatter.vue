<template>
    <template v-for="(item, index) in sampledata" :key="index">
      <div v-if="Array.isArray(item)" :class="`grid grid-cols-${item.length} gap-4`">
        <FieldRenderer
          v-for="(field, subIndex) in item"
          :key="subIndex"
          :field="field"
          :form="form"
          :parameters="parameters"
          :position="position"
          :color="color"
          :color_radio="color_radio"
          :setSelectRef="setSelectRef"
          :triggerCallback="triggerCallback"
          :onChange="onChange"
          :handleFileUpload="handleFileUpload"
        />
      </div>
  
      <FieldRenderer
        v-else
        :field="item"
        :form="form"
        :parameters="parameters"
        :position="position"
        :color="color"
        :color_radio="color_radio"
        :setSelectRef="setSelectRef"
        :triggerCallback="triggerCallback"
        :onChange="onChange"
        :handleFileUpload="handleFileUpload"
      />
    </template>
  </template>
  
  <script setup>
  import { onMounted, nextTick, ref } from 'vue';
  import FahadSelect from 'fahad-select'; // Keep if needed elsewhere
  import FieldRenderer from './FieldRenderer.vue'; // Import the new component
  
  // Props (unchanged)
  const props = defineProps({
    sampledata: { type: Array, required: true },
    form: { type: Object, required: true },
    parameters: { type: Object, default: () => ({}) },
    position: { type: Boolean, default: false }
  });
  
  // color and color_radio (unchanged)
  const color_radio = {
    default: 'w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    red: 'w-5 h-5 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    green: 'w-5 h-5 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    purple: 'w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    teal: 'w-5 h-5 bg-gray-100 border-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    yellow: 'w-5 h-5 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
    orange: 'w-5 h-5 bg-gray-100 border-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:cursor-not-allowed',
  };

  const color = {
    default: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600 peer-disabled:cursor-not-allowed',
    red: 'relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600 dark:peer-checked:bg-red-600 peer-disabled:cursor-not-allowed',
    green: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600 peer-disabled:cursor-not-allowed',
    purple: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-purple-600 peer-disabled:cursor-not-allowed',
    yellow: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400 peer-disabled:cursor-not-allowed',
    teal: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600 dark:peer-checked:bg-cyan-600 peer-disabled:cursor-not-allowed',
    orange: 'relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500 dark:peer-checked:bg-yellow-500 peer-disabled:cursor-not-allowed',
  }
  
  // Emits (unchanged)
  const emit = defineEmits(['selectRefsReady', 'triggerCallback']);
  
  // Refs and methods (unchanged, but now passed to child)
  const selectRefs = ref({});
  const setSelectRef = (el, model) => {
    if (el) selectRefs[model] = el;
  };
  
  onMounted(() => {
    nextTick(() => emit('selectRefsReady', selectRefs));
  });
  
  const onChange = (callbackName) => {
    if (callbackName) emit('triggerCallback', callbackName);
  };
  
  const triggerCallback = (callbackName) => {
    emit('triggerCallback', callbackName);
  };
  
  const handleFileUpload = (event, model) => {
    const files = event.target.files;
    if (!files.length) return;
  
    const filePromises = Array.from(files).map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ name: file.name, size: file.size, type: file.type, content: reader.result });
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(filePromises).then(fileData => {
      props.form[model] = fileData;
      props.form = { ...props.form }; // Trigger reactivity
      console.log('Updated form with file data:', props.form);
    });
  };
  </script>