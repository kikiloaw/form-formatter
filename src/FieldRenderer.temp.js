
const handleRadioChange = (event, field, option) => {
    // Handle Individual Models (e.g. { model: 'is_male', value: true })
    if (option.model) {
        // Unset all OTHER options in this field group
        field.options.forEach(opt => {
            if (opt.model && opt.model !== option.model) {
                props.form[opt.model] = false;
            }
        });
        // Ensure current one is set (v-model covers it, but redundancy is safe)
        // props.form[option.model] = option.value; 
    }

    // Trigger Callback if exists
    if (field.callback) {
        props.triggerCallback(field.callback);
    }
};
