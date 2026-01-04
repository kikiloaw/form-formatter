# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.6] - 2026-01-05

### Added
- **Exclusive selection mode** for `checkbox` and `checkbox-group` types - allows single-selection behavior (like radio buttons) while maintaining checkbox UI
- Support for **per-option colors** for `checkbox`, `checkbox-group`, `radio`, and `radio-group` - each option can have its own color theme (set `color` property on each option)
- Support for **individual models per option** in checkbox and radio groups - enables boolean-based control instead of array-based/scalar model
- **Smart Multi-Select Radio**: `radio` type now automatically supports multiple selection (behaves like checkboxes) if individual models are provided, while retaining the round radio button appearance
- Automatic exclusive mode detection based on model initialization (scalar vs array)

### Changed
- **BREAKING**: `checkbox-group` is now **automatically exclusive (single-select)** by default
  - To enable multi-select for `checkbox-group`, explicitly set `exclusive: false`
  - `checkbox` (inline) remains multi-select by default
- Improved spacing between radio/checkbox inputs and labels using `gap-4` (1rem/16px) for optimal visual balance
- Switched from margin utilities to flexbox gap for more robust and consistent spacing

### Fixed
- Fixed issue where checkbox groups using boolean values would incorrectly toggle all items sharing the same parent model
- Fixed `checkbox` (inline) type to properly support multi-select mode - checkboxes can now be checked and unchecked normally
- Fixed missing color issues for `toggle`, `checkbox`, and `radio` inputs by implementing robust inline hex color fallbacks for all supported colors (`orange`, `teal`, `purple`, etc), ensuring consistent display regardless of consuming project's Tailwind config

### Features Summary
**Checkbox Group Modes:**
1. **Single-select (default)**: `checkbox-group` automatically allows only one selection
2. **Multi-select**: Set `exclusive: false` to allow multiple selections
3. **Individual models**: Use `model` property on each option for boolean-based control

**Example Configurations:**

```javascript
// Single-select checkbox-group (default behavior)
{
    type: 'checkbox-group',
    label: 'Student Year',
    model: 'student_year',
    options: [
        { value: '1', text: 'Freshman', color: 'green' },
        { value: '2', text: 'Sophomore', color: 'blue' }
    ]
}

// Multi-select checkbox (inline)
{
    type: 'checkbox',
    label: 'Documents',
    model: 'documents',  // Array: ['Form 138', 'PSA']
    options: [
        { value: 'Form 138', text: 'Form 138', color: 'green' },
        { value: 'PSA', text: 'PSA', color: 'yellow' }
    ]
}

// Individual boolean models with custom colors
{
    type: 'checkbox',
    label: 'Requirements',
    options: [
        { model: 'f138', text: 'Form 138', color: 'green' },
        { model: 'f137', text: 'Form 137', color: 'blue' },
        { model: 'psa', text: 'PSA', color: 'yellow' }
    ]
}
// Form data: { f138: true, f137: false, psa: true }
```


## [1.0.0] - 2024-01-XX

### Added
- Initial release of FormFormatter component
- Support for multiple field types:
  - Text input fields
  - Number input fields
  - Date and time pickers
  - Select dropdowns
  - Radio buttons and radio groups
  - Checkboxes and checkbox groups
  - Toggle switches
  - File upload fields
  - Textarea fields
  - Hidden fields
  - Custom FahadSelect integration
- Responsive grid layout system
- Dark mode support
- Multiple color themes for interactive elements
- Form validation support
- File upload handling with base64 conversion
- Dynamic form generation from configuration objects
- Event system for form interactions
- TypeScript support with declaration files

### Features
- Horizontal and vertical layout options
- Customizable field colors and styling
- Built-in accessibility features
- Tailwind CSS integration
- Vue 3 Composition API support
- Plugin system for easy integration

### Technical
- Vue 3 compatibility
- Vite build system
- UMD and ES module builds
- CSS extraction and bundling
- External dependency handling
- NPM package configuration
