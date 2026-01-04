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
          <div class="flex items-center ps-4 gap-4">
            <input
              :id="`${field.model}-${optIndex}`"
              :type="option.model ? 'checkbox' : 'radio'"
              :value="option.value"
              v-model="form[option.model ?? field.model]"
              :name="field.model"

              :style="(option.color === 'orange' || field.color === 'orange') ? 'color: #f97316; --tw-ring-color: #f97316;' : (option.color === 'teal' || field.color === 'teal') ? 'color: #14b8a6; --tw-ring-color: #14b8a6;' : ''"
              :class="[option.model ? 'rounded-full' : '', color_radio[option.color || field.color || 'default']]"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="(e) => handleRadioChange(e, field, option)"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </li>
      </ul>

      <!-- Radio group (stacked) -->
      <div v-else-if="field.type === 'radio-group'" >
        <div v-for="(option, optIndex) in field.options" :key="option.value" class="flex items-center mb-2">
          <div class="flex items-center ps-4 gap-4">
            <input
              :id="`${field.model}-${optIndex}`"
              type="radio"
              :value="option.value"
              v-model="form[option.model ?? field.model]"
              :name="field.model"
              :class="color_radio[option.color || field.color || 'default']"
              :style="(option.color === 'orange' || field.color === 'orange') ? 'color: #f97316; --tw-ring-color: #f97316;' : (option.color === 'teal' || field.color === 'teal') ? 'color: #14b8a6; --tw-ring-color: #14b8a6;' : ''"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="(e) => handleRadioChange(e, field, option)"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </div>
      </div>

      <!-- Checkbox (inline) -->
      <ul v-else-if="field.type === 'checkbox'" class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li v-for="(option, optIndex) in field.options" :key="option.value" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 p-2.5">
          <div class="flex items-center ps-4 gap-4">
            <input
              type="checkbox"
              :value="option.value"
              :id="`${field.model}-${optIndex}`"
              v-model="form[option.model ?? field.model]"
              :style="(option.color === 'orange' || field.color === 'orange') ? 'color: #f97316; --tw-ring-color: #f97316;' : (option.color === 'teal' || field.color === 'teal') ? 'color: #14b8a6; --tw-ring-color: #14b8a6;' : ''"
              :class="[field.rounded ? `rounded-${field.rounded}` : 'rounded-md', color_radio[option.color || field.color || 'default']]"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="(e) => handleCheckboxChange(e, field, option)"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              {{ option.text }}
            </label>
          </div>
        </li>
      </ul>

      <!-- Checkbox group (stacked) -->
      <div v-else-if="field.type === 'checkbox-group'">
        <div v-for="(option, optIndex) in field.options" :key="option.value" class="flex items-center mb-2">
          <div class="flex items-center ps-4 gap-4">
            <input
              type="checkbox"
              :value="option.value"
              v-model="form[option.model ?? field.model]"
              :style="(option.color === 'orange' || field.color === 'orange') ? 'color: #f97316; --tw-ring-color: #f97316;' : (option.color === 'teal' || field.color === 'teal') ? 'color: #14b8a6; --tw-ring-color: #14b8a6;' : ''"
              :class="['m-1', field.rounded ? `rounded-${field.rounded}` : 'rounded-md', color_radio[option.color || field.color || 'default']]"
              :id="`${field.model}-${optIndex}`"
              :required="field.required && optIndex === 0"
              :disabled="field.disabled ?? false"
              @change="(e) => handleCheckboxChange(e, field, option)"
            />
            <label :for="`${field.model}-${optIndex}`" class="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
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
        <div :class="color[field.color || 'default']" :style="getToggleStyle(field)"></div>
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
import { defineProps, defineEmits, onMounted, nextTick } from 'vue';
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

onMounted(() => {
    if (['checkbox', 'checkbox-group'].includes(props.field.type)) {
        if (props.form[props.field.model] === undefined) {
             props.form[props.field.model] = [];
        }
    }
});

// Pass through emits if needed, but since parent handles them, no new emits here
const handleCheckboxChange = (event, field, option) => {
    // 1. Determine if this should be exclusive
    const isModelArray = Array.isArray(props.form[field.model]);
    
    // checkbox-group is ALWAYS exclusive (single-select) unless explicitly set to false
    // checkbox (inline) is multi-select by default unless exclusive is true
    let isExclusive;
    if (field.type === 'checkbox-group') {
        // checkbox-group: exclusive by default, can be disabled with exclusive: false
        isExclusive = field.exclusive !== false;
    } else {
        // checkbox (inline): multi-select by default, can enable exclusive with exclusive: true
        // Also check for scalar model (implicit exclusivity)
        isExclusive = field.exclusive || (!isModelArray && props.form[field.model] !== undefined);
    }

    if (isExclusive) {
        if (event.target.checked) {
            if (option.model) {
                // Separate models (booleans) - exclusive mode
                // Uncheck all OTHER options in this field group
                field.options.forEach(opt => {
                    if (opt.model && opt.model !== option.model) {
                        props.form[opt.model] = false;
                    }
                });
            } else {
                // Single model - exclusive mode
                // If checking a new item:
                if (isModelArray) {
                    // It's an array, but explicitly exclusive -> Force single item array
                    nextTick(() => {
                        props.form[field.model] = [option.value];
                    });
                } else {
                    // It's a scalar -> Just set the value
                    props.form[field.model] = option.value;
                }
            }
        } else {
            // Unchecking in exclusive mode
            if (!option.model) {
                // For array-based or scalar models, clear the value when unchecking
                if (isModelArray) {
                    props.form[field.model] = [];
                } else {
                    props.form[field.model] = '';
                }
            }
            // For separate boolean models, v-model handles it automatically
        }
    }
    // For non-exclusive checkboxes, v-model handles everything automatically

    // 2. Trigger callback if exists
    if (field.callback) {
        props.triggerCallback(field.callback);
    }
};

const handleRadioChange = (event, field, option) => {
    // Handle Individual Models (e.g. { model: 'is_male', value: true })
    if (option.model) {
        // ONLY enforce exclusivity if it's a radio-group OR explicitly set to exclusive.
        // For inline 'radio' with individual models, we allow multi-select (internally checkboxes).
        if (field.type === 'radio-group' || field.exclusive) {
           // Unset all OTHER options in this field group
           field.options.forEach(opt => {
               if (opt.model && opt.model !== option.model) {
                   // Determine what "unchecked" means. Typically false.
                   props.form[opt.model] = false;
               }
           });
        }
    }

    // Trigger Callback if exists
    if (field.callback) {
        props.triggerCallback(field.callback);
    }
};

const isToggleChecked = (field) => {
    const val = props.form[field.model];
    if (Array.isArray(val)) {
        return val.includes(field.value);
    }
    // If field has a specific 'value' prop (like value="yes"), check against it
    if (field.value !== undefined && field.value !== null) {
        return val == field.value; // Loose equality to handle 1 vs "1" or true vs 1
    }
    return !!val;
};

const getToggleStyle = (field) => {
    const color = field.color || 'default';
    // Map of colors to Hex values ( Background, Ring )
    // Using Tailwind 600 for BG (or 500/400 for lighter ones) and 300 for Ring
    const colorMap = {
        orange: { bg: '#f97316', ring: '#fdba74' }, // Orange-500, Orange-300
        teal:   { bg: '#14b8a6', ring: '#5eead4' }, // Teal-500, Teal-300 (Cyan-ish)
        purple: { bg: '#9333ea', ring: '#d8b4fe' }, // Purple-600, Purple-300
        red:    { bg: '#dc2626', ring: '#fca5a5' }, // Red-600, Red-300
        green:  { bg: '#16a34a', ring: '#86efac' }, // Green-600, Green-300
        yellow: { bg: '#facc15', ring: '#fde047' }, // Yellow-400, Yellow-300
        blue:   { bg: '#2563eb', ring: '#93c5fd' }, // Blue-600, Blue-300
        default:{ bg: '#2563eb', ring: '#93c5fd' }  // Blue default
    };

    // If color not in map, return empty (allow tailwind classes to work if any)
    if (!colorMap[color] && color !== 'default') return {};

    const isChecked = isToggleChecked(field);
    const styles = {};
    const theme = colorMap[color] || colorMap.default;

    // Apply Ring Color always (for focus) - Wait, focus ring relies on focus-within or :focus
    // But --tw-ring-color variable is used by the ring utility class.
    styles['--tw-ring-color'] = theme.ring;

    if (isChecked) {
        styles.backgroundColor = theme.bg;
    }
    
    return styles;
};

</script>