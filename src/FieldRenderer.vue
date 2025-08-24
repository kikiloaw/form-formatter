<template>
  <template v-if="field.type === 'hidden'">
    <input
      type="hidden"
      v-model="form[field.model]"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />
  </template>

  <p v-else-if="!field.type" class="text-red-500">Unknown field type</p>

  <div
    v-else
    :class="{
      'flex items-center space-x-3': !position,
      'flex-col': position,
      '': field.type === 'text' // Optional: Keep if text needs special handling, but recommend removing for consistency
    }"
    class="flex-1 flex"
  >
    <label
      :class="{'w-1/4': !position, 'w-full mb-1': position}"
      class="text-sm font-medium text-black dark:text-white"
    >
      {{ field.label }}
    </label>

    <div
      v-if="['radio', 'radio-group', 'checkbox', 'checkbox-group', 'toggle'].includes(field.type)"
      :class="{'w-3/4': !position, 'w-full': position}"
      class="bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
    >
      <!-- Radio (inline) -->
      <ul v-if="field.type === 'radio'" class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li v-for="(option, optIndex) in field.options" :key="option.value" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5">
          <div class="flex items-center ps-4">
            <input
              :id="`${field.model}-${optIndex}`"
              type="radio"
              :value="option.value"
              v-model="form[field.model]"
              :name="field.model"
              :class="color_radio[field.color || 'default']"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="field.callback ? triggerCallback(field.callback) : null"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </li>
      </ul>

      <!-- Radio group (stacked) -->
      <div v-else-if="field.type === 'radio-group'" >
        <div v-for="(option, optIndex) in field.options" :key="option.value" class="flex items-center mb-2">
          <div class="flex items-center ps-4">
            <input
              :id="`${field.model}-${optIndex}`"
              type="radio"
              :value="option.value"
              v-model="form[field.model]"
              :name="field.model"
              :class="color_radio[field.color || 'default']"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="field.callback ? triggerCallback(field.callback) : null"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </div>
      </div>

      <!-- Checkbox (inline) -->
      <ul v-else-if="field.type === 'checkbox'" class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li v-for="(option, optIndex) in field.options" :key="option.value" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5">
          <div class="flex items-center ps-4">
            <input
              type="checkbox"
              :value="option.value"
              :id="`${field.model}-${optIndex}`"
              v-model="form[field.model]"
              :class="color_radio[field.color || 'default']"
              class="rounded-md"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="field.callback ? triggerCallback(field.callback) : null"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </li>
      </ul>

      <!-- Checkbox group (stacked) -->
      <div v-else-if="field.type === 'checkbox-group'">
        <div v-for="(option, optIndex) in field.options" :key="option.value" class="flex items-center mb-">
          <div class="flex items-center ps-4">
            <input
              type="checkbox"
              :value="option.value"
              v-model="form[field.model]"
              :class="color_radio[field.color || 'default']"
              class="rounded-md m-1"
              :id="`${field.model}-${optIndex}`"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="field.callback ? triggerCallback(field.callback) : null"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </div>
      </div>

      <!-- Toggle -->
      <label v-else-if="field.type === 'toggle'" class="inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          class="sr-only peer"
          v-model="form[field.model]"
          :value="field.value"
          :disabled="field.disabled ?? false"
        />
        <div :class="color[field.color || 'default']"></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ field.placeholder }}</span>
      </label>
    </div>

    <FahadSelect
      v-else-if="field.type === 'fahadselect'"
      :ref="el => setSelectRef(el, field.model)"
      v-model="form[field.model]"
      :searchRoute="field.route"
      @triggerChange="triggerCallback(field.callback)"
      :param="parameters[field.model]"
      :placeholder="field.placeholder"
      label="label"
      :multiple="field.multiple ?? false"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />

    <input
      v-else-if="field.type === 'text'"
      type="text"
      v-model="form[field.model]"
      :placeholder="field.placeholder"
      :minlength="field.min"
      :maxlength="field.max"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />

    <input
      v-else-if="field.type === 'date'"
      type="date"
      v-model="form[field.model]"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
      onfocus="this.showPicker()"
    />

    <input
      v-else-if="field.type === 'time'"
      type="time"
      v-model="form[field.model]"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
      onfocus="this.showPicker()"
    />

    <input
      v-else-if="field.type === 'number'"
      type="number"
      v-model="form[field.model]"
      :placeholder="field.placeholder"
      :max="field.max"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />

    <input
      v-else-if="field.type === 'file'"
      type="file"
      :multiple="field.multiple"
      :accept="field.accept"
      @change="(e) => handleFileUpload(e, field.model)"
      :placeholder="field.placeholder"
      class="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />

    <textarea
      v-else-if="field.type === 'textarea'"
      v-model="form[field.model]"
      :placeholder="field.placeholder"
      :minlength="field.min"
      :maxlength="field.max"
      :rows="field.rows"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
    />

    <select
      v-else-if="field.type === 'select'"
      v-model="form[field.model]"
      class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 disabled:cursor-not-allowed dark:disabled:bg-gray-700"
      :class="{'w-3/4': !position, 'w-full': position}"
      :required="field.required"
      :disabled="field.disabled ?? false"
      @change="() => onChange(field.callback)"
      :ref="el => setSelectRef(el, field.model)"
    >
      <option v-for="option in field.options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <p v-else class="text-red-500">Unknown field type: {{ field.type }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import FahadSelect from 'fahad-select'; // Assuming this is available

const props = defineProps({
  field: { type: Object, required: true },
  form: { type: Object, required: true },
  parameters: { type: Object, default: () => ({}) },
  position: { type: Boolean, default: false },
  color: { type: Object, required: true },
  color_radio: { type: Object, required: true },
  setSelectRef: { type: Function, required: true },
  triggerCallback: { type: Function, required: true },
  onChange: { type: Function, required: true },
  handleFileUpload: { type: Function, required: true }
});

// Pass through emits if needed, but since parent handles them, no new emits here
</script>