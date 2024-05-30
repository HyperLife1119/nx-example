# core

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test core` to execute the unit tests.

## Nx-Switch Component

The `nx-switch` component is a new addition to the core package, now designed as a standalone component. It provides a toggle switch that integrates with Angular forms. This component allows for binding through an Angular `@Input` for the `value` property, enhancing its compatibility and usage flexibility with Angular's reactive forms.

### Features

- Binding with `@Input` for the `value` property
- Integration with Angular's `FormControl`
- Standalone component, no need for importing it into a module

### Usage

To use the `nx-switch` component, simply add it to your template:

```html
<nx-switch [value]="yourModelVariable"></nx-switch>
```

Ensure you have imported `FormsModule` or `ReactiveFormsModule` in your module to support form functionalities.
