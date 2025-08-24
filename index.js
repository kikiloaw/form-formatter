import FormFormatter from './src/FormFormatter.vue';

// Default export
export default FormFormatter;

// Named export
export { FormFormatter };

// Export the component as a plugin for Vue.use()
export const install = (app) => {
    app.component('FormFormatter', FormFormatter);
};

// Auto-install when used with script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use({ install });
}