import { DefineComponent, PropType } from 'vue';

export interface FormField {
  type: 'text' | 'number' | 'date' | 'time' | 'select' | 'radio' | 'radio-group' | 'checkbox' | 'checkbox-group' | 'toggle' | 'file' | 'textarea' | 'hidden' | 'fahadselect';
  label: string;
  model: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  rows?: number;
  multiple?: boolean;
  accept?: string;
  value?: any;
  color?: 'default' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'orange';
  options?: Array<{ value: any; text: string }>;
  route?: string;
  callback?: string;
  rows?: number;
}

export interface FormFormatterProps {
  sampledata: FormField[] | FormField[][];
  form: Record<string, any>;
  parameters?: Record<string, any>;
  position?: boolean;
}

export interface FormFormatterEmits {
  (e: 'selectRefsReady', refs: Record<string, any>): void;
  (e: 'triggerCallback', callbackName: string): void;
}

declare const FormFormatter: DefineComponent<FormFormatterProps, {}, {}, {}, {}, {}, {}, FormFormatterEmits>;

export default FormFormatter;
