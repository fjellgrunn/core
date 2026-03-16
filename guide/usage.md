# Usage Guide

Comprehensive usage guidance for `@fjell/core`.

## Installation

```bash
npm install @fjell/core
```

## API Highlights

- `IQFactory`, `IFactory`, and `AItemService`
- `createCoordinate` and dictionary exports
- Shared errors, operations, and event exports

## Quick Example

```ts
import { createCoordinate, IFactory } from "@fjell/core";

const coordinate = createCoordinate({
  scope: "widget",
  itemType: ["tenant", "widget"],
});

const factory = new IFactory();
const key = factory.key({ tenantId: "t1", widgetId: "w1" }, coordinate);
```

## Model Consumption Rules

1. Import from the package root (`@fjell/core`) instead of deep-internal paths unless explicitly documented.
2. Keep usage aligned with exported public symbols listed in this guide.
3. Prefer explicit typing at package boundaries so generated code remains robust during upgrades.
4. Keep error handling deterministic and map infrastructure failures into domain-level errors.
5. Co-locate integration wrappers in your app so model-generated code has one canonical entry point.

## Best Practices

- Keep examples and abstractions consistent with existing Fjell package conventions.
- Favor composable wrappers over one-off inline integration logic.
- Add targeted tests around generated integration code paths.
