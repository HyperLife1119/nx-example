# core

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test core` to execute the unit tests.

## Nx-Switch Component

The `nx-switch` component is a new addition to the core package, providing a toggle switch that integrates with Angular forms through the `NG_VALUE_ACCESSOR`. This component allows for two-way data binding and is fully compatible with Angular's reactive forms.

### Features

- Two-way data binding with `ngModel`
- Integration with Angular's `FormControl`
- Supports `NG_VALUE_ACCESSOR` for custom form control integration

### Usage

To use the `nx-switch` component, simply add it to your template:

```html
<nx-switch [(ngModel)]="yourModelVariable"></nx-switch>
```

Ensure you have imported `FormsModule` or `ReactiveFormsModule` in your module to support form functionalities.
