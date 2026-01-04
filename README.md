# FormFormatter

A comprehensive Vue 3 form formatter component that provides a dynamic and responsive way to create forms with multiple field types.

## Features

- 🎯 **Multiple Field Types**: Text, number, date, time, select, radio, checkbox, toggle, file upload, textarea, and hidden fields
- 📱 **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- 🎨 **Customizable Styling**: Multiple color themes and customizable appearance
- 🔧 **Dynamic Forms**: Generate forms from configuration objects
- 📝 **Form Validation**: Built-in HTML5 validation support
- 🌙 **Dark Mode Support**: Automatic dark mode styling
- ♿ **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- 📦 **Vue 3 Compatible**: Built with Vue 3 Composition API

## Installation

```bash
npm install form-formatter@latest
```

## What's New in v1.0.6 (January 5, 2026)

### 🎯 Enhanced Checkbox & Checkbox Group Features

Version 1.0.6 introduces powerful new capabilities for checkbox handling:

#### **1. Automatic Single-Select for `checkbox-group`**
- `checkbox-group` now defaults to **single-selection mode** (like radio buttons)
- No need to add `exclusive: true` - it's automatic!
- Perfect for "select one option" scenarios

#### **2. Individual Model Support**
- Each checkbox option can have its own boolean model
- Simplifies programmatic control with `true`/`false` values
- No more array manipulation needed

#### **3. Per-Option Colors**
- Each checkbox can have its own color theme
- Mix and match colors within the same group

#### **4. Flexible Multi-Select**
- `checkbox` (inline) remains multi-select by default
- Set `exclusive: false` on `checkbox-group` for multi-select mode

#### **5. Smart Multi-Select Radio**
- Want Multi-Select Radios? Just use `type: 'radio'` with individual models!
- Automatically enables multi-select and unchecking while keeping the round radio look

---

## Usage

### Checkbox Usage Examples (v1.0.6+)

#### **Mode 1: Single-Select Checkbox Group (Default)**
Perfect for "choose one" scenarios with checkbox UI:

```javascript
// Configuration
{
    type: 'checkbox-group',
    label: 'Student Year',
    model: 'student_year',
    options: [
        { value: '1', text: 'Freshman', color: 'green' },
        { value: '2', text: 'Sophomore', color: 'blue' },
        { value: '3', text: 'Junior', color: 'yellow' },
        { value: '4', text: 'Senior', color: 'purple' }
    ]
}

// Form Data
const formData = ref({
    student_year: []  // Will contain single value: ['2']
});

// Programmatic Control
formData.value.student_year = ['3'];  // Select Junior
```

#### **Mode 2: Multi-Select Checkbox (Inline)**
For selecting multiple options:

```javascript
// Configuration
{
    type: 'checkbox',
    label: 'Required Documents',
    model: 'documents',
    options: [
        { value: 'Form 138', text: 'Form 138', color: 'green' },
        { value: 'Form 137', text: 'Form 137', color: 'blue' },
        { value: 'PSA', text: 'PSA Birth Certificate', color: 'yellow' }
    ]
}

// Form Data
const formData = ref({
    documents: []  // Can contain multiple: ['Form 138', 'PSA']
});

// Programmatic Control
formData.value.documents = ['Form 138', 'PSA'];  // Select multiple
formData.value.documents.push('Form 137');       // Add one more
```

#### **Mode 3: Individual Boolean Models**
Best for independent checkboxes with simple true/false control:

```javascript
// Configuration
{
    type: 'checkbox',
    label: 'Requirements Checklist',
    options: [
        { model: 'has_form138', text: 'Form 138', color: 'green' },
        { model: 'has_form137', text: 'Form 137', color: 'blue' },
        { model: 'has_psa', text: 'PSA Birth Certificate', color: 'yellow' }
    ]
}

// Form Data
const formData = ref({
    has_form138: false,
    has_form137: false,
    has_psa: false
});

// Programmatic Control (Simple!)
formData.value.has_form138 = true;   // Check Form 138
formData.value.has_psa = true;       // Check PSA
formData.value.has_form137 = false;  // Uncheck Form 137

// Toggle
formData.value.has_form138 = !formData.value.has_form138;
```

#### **Mode 4: Multi-Select Checkbox Group**
Enable multi-select for checkbox-group:

```javascript
{
    type: 'checkbox-group',
    label: 'Interests',
    model: 'interests',
    exclusive: false,  // Enable multi-select
    options: [
        { value: 'sports', text: 'Sports', color: 'green' },
        { value: 'music', text: 'Music', color: 'purple' },
        { value: 'reading', text: 'Reading', color: 'blue' }
    ]
}
```

#### **Mode 5: Smart Multi-Select Radio**
Want the **look of Radio Buttons** (circles) but need **Multi-Select** behavior? 
Simply use `type: 'radio'` with individual models. The component will automatically enable multi-select and unchecking capability while maintaining the round radio appearance.

```javascript
// Configuration
{
    type: 'radio',          // Looks like Radio (Round)
    label: 'Freshmen Requirements',
    options: [
        { model: 'f138', text: 'Form 138', color: 'red' },    // Selectable
        { model: 'f137', text: 'Form 137', color: 'green' },  // Selectable (Multi-Select!)
        { model: 'psa', text: 'PSA', color: 'yellow' }        // Selectable
    ]
}

// Form Data - All independent booleans!
const formData = ref({
    f138: true,   // Checked
    f137: true,   // Checked
    psa: false
});
```

---

### Basic Usage

```vue
<template>
<!--  single column form. see the results-->
  <div class="grid grid-cols-1 gap-5.5 p-6.5 grid-auto-rows-[minmax(100px,_auto)]">
      <FormInput
        :sampledata="sampledata"
        :form="form"
        :parameters="parameters"
        @selectRefsReady="storeSelectRefs"
        @triggerCallback="executeCallback"
      />
  </div>
  <!--  double column form. see the results-->
  <div class="grid grid-cols-2 gap-5.5 p-6.5 grid-auto-rows-[minmax(100px,_auto)]">
    <FormInput
        :sampledata="sampledata"
        :form="form"
        :parameters="parameters"
        @selectRefsReady="storeSelectRefs"
        @triggerCallback="executeCallback"
    />

    <!--  double column form. see the results-->
    <div class="grid grid-cols-3 gap-5.5 p-6.5 grid-auto-rows-[minmax(100px,_auto)]">
      <FormInput
          :sampledata="sampledata"
          :form="form"
          :parameters="parameters"
          @selectRefsReady="storeSelectRefs"
          @triggerCallback="executeCallback"
      />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import FormInput from 'form-formatter';

// Parameters for selects (keeping your exact names)
const parameters = ref({});

const selectRefs = ref({});
const storeSelectRefs = (refs) => {
    nextTick(() => {
        selectRefs.value = refs;
    });
};

const executeCallback = (callbackName) => {
    const callbackMap = {
        checkboxGroupCallback: () => console.log('Checkbox group callback'),
        checkboxCallback: () => console.log('Checkbox callback'),
        radioGroupCallback: () => console.log('Radio group callback'),
        radioCallback: () => console.log('Radio callback'),
        curriculumCallback: () => console.log('Curriculum callback'),
        courseCallback: () => console.log('Course callback'),
        employeeCallback: () => console.log('Employee callback'),
        programCallback: () => console.log('Program callback')
    };
    
    if (callbackMap[callbackName]) {
        callbackMap[callbackName]();
    }
};

const sampledata = ref([
    { type: 'hidden', model: 'id', required: false },

    { type: 'checkbox-group', label: 'for checkbox group', placeholder: 'default', model: 'checkboxGroup1', required: false,  callback: 'checkboxGroupCallback',
        options: [
            { value: '1', text: 'Option 1 with long text description', color: 'teal' },
            { value: '2', text: 'Option 2 with long text description', color: 'teal' },
            { value: '3', text: 'Option 3 with long text description', color: 'teal' },
            { value: '4', text: 'Option 4 with long text description', color: 'teal' },
            { value: '5', text: 'Option 5 with long text description', color: 'teal' },
            { value: '6', text: 'Option 6 with long text description', color: 'teal' },
            { value: '7', text: 'Option 7 with long text description', color: 'teal' },
        ]
    },

    [
        { type: 'checkbox-group', label: 'for checkbox group', placeholder: 'default', model: 'checkboxGroup2', required: false,  callback: 'checkboxGroupCallback',
            options: [
                { value: '1', text: 'Option 1 with long text description', color: 'yellow' },
                { value: '2', text: 'Option 2 with long text description', color: 'yellow' },
                { value: '3', text: 'Option 3 with long text description', color: 'yellow' },
                { value: '4', text: 'Option 4 with long text description', color: 'yellow' },
                { value: '5', text: 'Option 5 with long text description', color: 'yellow' },
                { value: '6', text: 'Option 6 with long text description', color: 'yellow' },
                { value: '7', text: 'Option 7 with long text description', color: 'yellow' },
            ]
        },

        { type: 'toggle', label: 'for toggle', placeholder: 'red', model: 'toggle1', required: false, color:'red', value:'yes' },

    ],

    { type: 'checkbox', label: 'for checkbox', placeholder: 'default', model: 'checkbox1', required: false,  callback: 'checkboxCallback',
        options: [
            { value: '1', text: 'Option 1 with long text description', color: 'green' },
            { value: '2', text: 'Option 2 with long text description', color: 'blue' },
        ]
    },

    [
        { type: 'checkbox', label: 'for checkbox', placeholder: 'default', model: 'checkbox2', required: false,  callback: 'checkboxCallback',
            options: [
                { value: '1', text: 'Option 1 with long text description', color: 'red' },
                { value: '2', text: 'Option 2 with long text description', color: 'red' },
            ]
        },
        { type: 'checkbox', label: 'for checkbox', placeholder: 'default', model: 'checkbox3', required: false,  callback: 'checkboxCallback',
            options: [
                { value: '1', text: 'Option 1 with long text description', color: 'orange' },
                { value: '2', text: 'Option 2 with long text description', color: 'purple' },
            ]
        },
    ],

   [
       { type: 'toggle', label: 'Toggle Option 1', placeholder: 'red', model: 'toggle2', required: false, color:'teal', value:'yes' },
       { type: 'toggle', label: 'Toggle Option 2', placeholder: 'yellow',model: 'toggle3', required: false, color:'yellow', value:'no' },
   ],

    [
        {
            type: 'radio-group',
            model: 'radioGroup1',
            label: 'Radio Group 1',
            required: true,
            callback: 'radioGroupCallback',
            color:'purple',
            options: [
                { value: 'option1', text: 'Option 1 with long text description', color: 'teal' }, // Override parent color
                { value: 'option2', text: 'Option 2 with long text description' },
                { value: 1, text: 'Yes', color: 'green' },
                { value: 0, text: 'No', color: 'red' }
            ]
        },

        {
            type: 'radio-group',
            model: 'radioGroup2',
            label: 'Radio Group 2',
            required: true,
            callback: 'radioGroupCallback',
            color:'orange',
            options: [
                { value: 'option1', text: 'Option 1 with long text description' },
                { value: 'option2', text: 'Option 2 with long text description' },
                { value: 1, text: 'Yes' },
                { value: 0, text: 'No' }
            ]
        },
    ],

    {
        type: 'radio-group',
        model: 'radioGroup3',
        label: 'Radio Group 3',
        required: true,
        callback: 'radioGroupCallback',
        color:'orange',
        options: [
            { value: 'option1', text: 'Option 1 with long text description' },
            { value: 'option2', text: 'Option 2 with long text description' },
            { value: 1, text: 'Yes' },
            { value: 0, text: 'No' }
        ]
    },

    {
        type: 'radio',
        model: 'radio1',
        label: 'Radio Option 1',
        required: true,
        callback: 'radioCallback',
        color:'red',
        options: [
            { value: 'option1', text: 'Option 1 with long text description' },
            { value: 'option2', text: 'Option 2 with long text description' },
            { value: 1, text: 'Yes' },
            { value: 0, text: 'No' }
        ]
    },

    [
        {
            type: 'radio',
            model: 'radio2',
            label: 'Radio Option 2',
            required: true,
            options: [
                { value: 'option1', text: 'Option 1 with long text description', color: 'purple' },
                { value: 'option2', text: 'Option 2 with long text description', color: 'orange' },
                { value: 1, text: 'Custom Option', color: 'teal' },
                { value: 0, text: 'No' },
            ]
        },
    ],

    { type: 'number', model: 'year', label: 'Year', placeholder: 'Enter Year', required: true },

    { type: 'number', model: 'id2', label: 'ID 2', placeholder: 'Enter ID 2', max: 10, required: true },

    { type: 'text', model: 'firstName', label: 'First Name', placeholder: 'Enter First Name', required: true },

    { type: 'text', model: 'middleName', label: 'Middle Name', placeholder: 'Enter Middle Name', required: true },

    { type: 'text', model: 'lastName', label: 'Last Name', placeholder: 'Enter Last Name', required: true },

    { type: 'text', model: 'nameExtension', label: 'Name Extension', placeholder: 'Enter Name Extension', required: true },

    { type: 'date', model: 'birthDate', label: 'Birth Date', required: true },

    { type: 'text', model: 'address', label: 'Address', placeholder: 'Enter Address', required: true },

    { type: 'text', model: 'phoneNumber', label: 'Phone Number', placeholder: 'Enter Phone Number', required: true },

    {
        type: 'select',
        model: 'gender',
        label: 'Gender',
        options: [
            { value: 'Male', text: 'Male' },
            { value: 'Female', text: 'Female' }
        ],
        required: true
    },

    {
        type: 'select',
        model: 'civilStatus',
        label: 'Civil Status',
        options: [
            { value: 'Single', text: 'Single' },
            { value: 'Married', text: 'Married' },
            { value: 'Widowed', text: 'Widowed' },
            { value: 'Divorced', text: 'Divorced' },
            { value: 'Separated', text: 'Separated' }
        ],
        required: true
    },

    { type: 'text', model: 'citizenship', label: 'Citizenship', placeholder: 'Enter Citizenship', required: true },

    { type: 'text', model: 'email', label: 'Email', placeholder: 'Enter Email', required: true },

    { type: 'text', model: 'userEmail', label: 'User Email', placeholder: 'Enter User Email', required: true },

    { type: 'number', model: 'typeId', label: 'Type ID', placeholder: 'Enter Type ID', max: 5, required: true },

    {
        type: 'fahadselect',
        model: 'curriculumId',
        label: 'Curriculum',
        route: 'Curriculum.Select',
        placeholder: '',
        callback: 'curriculumCallback',
        required: true
    },

    { type: 'number', model: 'yearLevel', label: 'Year Level', placeholder: 'Enter Year Level', required: true },

    { type: 'number', model: 'infoId', label: 'Info ID', placeholder: 'Enter Info ID', max: 20, required: true },

    { type: 'number', model: 'region', label: 'Region', placeholder: 'Enter Region', max: 11, required: true },

    { type: 'number', model: 'province', label: 'Province', placeholder: 'Enter Province', max: 11, required: true },

    [
        { type: 'number', model: 'city', label: 'City', placeholder: 'Enter City', max: 11, required: true },

        { type: 'number', model: 'barangay1', label: 'Barangay 1', placeholder: 'Enter Barangay 1', max: 11, required: true },
        { type: 'number', model: 'barangay2', label: 'Barangay 2', placeholder: 'Enter Barangay 2', max: 11, required: true },
        { type: 'number', model: 'barangay3', label: 'Barangay 3', placeholder: 'Enter Barangay 3', max: 11, required: true },
    ],

    [
        {
            type: 'file',
            model: 'attachment1',
            label: 'Upload File 1',
            placeholder: 'Choose a file',
            multiple: true,
            accept: '.jpg,.png,.xls,.xlsx',
            required: true
        },
        {
            type: 'file',
            model: 'attachment2',
            label: 'Upload File 2',
            placeholder: 'Choose a file',
            multiple: true,
            accept: '.jpg,.png,.xls,.xlsx',
            required: true
        },
    ],

    {
        type: 'fahadselect',
        model: 'courseId',
        label: 'Select Course',
        route: 'Course.Select',
        placeholder: 'Choose a Course',
        callback: 'courseCallback',
        required: true
    },
    {
        type: 'fahadselect',
        model: 'employeeId',
        label: 'Select Employee',
        route: 'Employee.Select',
        placeholder: 'Choose an Employee',
        callback: 'employeeCallback',
        required: true
    },
    {
        type: 'fahadselect',
        model: 'programId',
        label: 'Select Program',
        route: 'Course.Select',
        placeholder: 'Choose a Program',
        callback: 'programCallback',
        required: true
    },

    { type: 'toggle', label: 'Toggle Option 3',  placeholder: 'purple',model: 'toggle4', required: false, color:'purple', value:'no' },
    { type: 'toggle', label: 'Toggle Option 4', placeholder: 'green',model: 'toggle5', required: false, color:'green', value:'no' },
    { type: 'toggle', label: 'Toggle Option 5', placeholder: 'teal',model: 'toggle6', required: false, color:'teal', value:'no' },
    { type: 'toggle', label: 'Toggle Option 6', placeholder: 'orange',model: 'toggle7', required: false, color:'orange', value:'no' },
    { type: 'toggle', label: 'Toggle Option 7', placeholder: 'default',model: 'toggle8', required: false, value:'no' },

    // Smart Multi-Select Radio Example (Round Checkboxes)
    {
        type: 'radio', 
        label: 'Freshmen Requirements (Multi-Select)', 
        color: 'yellow',
        options:[
            { value:'Form 138', text:'Form 138', model: 'f138',  color:'red' },
            { value:'Form 137', text:'Form 137', model: 'f137',  color:'green' },
            { value:'PSA', text:'PSA', model: 'psa1', color: 'orange' },
        ]
    },

    // Fixed Color Toggles Example
    { type: 'toggle', label: 'HD', placeholder: 'HD', model: 'hd', required: false, color:'teal', value:1 },
    { type: 'toggle', label: 'TOR(informative)', placeholder: 'TOR(informative)', model: 'tori', required: false, color:'orange', value:1 },
    { type: 'toggle', label: 'TOR(official)', placeholder: 'TOR(official)', model: 'toro', required: false, color:'purple', value:1 },
]);
</script>
```

```vue
<template>
  <FormInput 
    :sampledata="gridFields" 
    :form="formData" 
    :position="false"
  />
</template>

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `sampledata` | Array | Yes | - | Array of field configurations |
| `form` | Object | Yes | - | Reactive form data object |
| `parameters` | Object | No | `{}` | Additional parameters for fields |
| `position` | Boolean | No | `false` | Layout position (false = horizontal, true = vertical) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `selectRefsReady` | `refs` | Emitted when form refs are ready |
| `triggerCallback` | `callbackName` | Emitted when field callbacks are triggered |

## Styling

The component uses Tailwind CSS classes and supports dark mode. You can customize colors using the `color` prop for toggle and radio fields:

- `default` (blue)
- `red`
- `green`
- `purple`
- `teal`
- `yellow`
- `orange`

## Dependencies

- Vue 3.x
- fahad-select (for select components)

## Browser Support

- Modern browsers with ES6+ support
- Vue 3 compatible browsers

## License

MIT


## Support

If you encounter any issues or have questions, please open an issue on GitHub.

### FahadSelect Field

**Note: FahadSelect is specifically designed for Laravel Inertia Vue applications.**

```javascript
{
  type: 'fahadselect',
  model: 'curriculumId',
  label: 'Curriculum',
  route: 'Curriculum.Select',  // Just input the route name
  placeholder: 'Select curriculum',
  callback: 'curriculumCallback',
  required: true,
  multiple: false
}
```

**Key Features:**
- **Route-based**: Simply specify the Laravel route name (e.g., `'Curriculum.Select'`)
- **Laravel Integration**: Automatically handles Laravel backend communication
- **Inertia Compatible**: Works seamlessly with Inertia.js
- **Search & Pagination**: Built-in search and pagination support
- **Multiple Selection**: Support for single or multiple selections
- **Callback System**: Trigger custom functions on selection changes

**Laravel Route Example:**
```php
// In your Laravel routes file
Route::get('/curriculum/select', [CurriculumController::class, 'select'])
    ->name('Curriculum.Select');
```
