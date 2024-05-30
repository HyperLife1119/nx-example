# 核心库

这个库是用 [Nx](https://nx.dev) 生成的。

## 运行单元测试

运行 `nx test core` 来执行单元测试。

## Nx-Switch 组件

`nx-switch` 组件是核心包的新添加，现在被设计为一个独立组件。它提供了一个切换开关，可以与 Angular 表单集成。这个组件允许通过 Angular 的 `@Input` 为 `value` 属性进行绑定，增强了它与 Angular 反应式表单的兼容性和使用灵活性。

### 特性

- 通过 `@Input` 为 `value` 属性进行绑定
- 与 Angular 的 `FormControl` 集成
- 独立组件，无需导入到模块中

### 使用方法

要使用 `nx-switch` 组件，只需将其添加到你的模板中：

```html
<nx-switch [value]="yourModelVariable"></nx-switch>
```

确保你已经在你的独立组件中导入了 `FormsModule` 来支持 `ngModel` 指令。
