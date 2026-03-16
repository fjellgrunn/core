# @fjell/core - Agentic Guide

## Purpose

Core Item/Key framework and base abstractions used by higher-level Fjell libraries.

This guide is optimized for AI-assisted code generation and integration workflows.

## Documentation

- **[Usage Guide](./usage.md)** - API-oriented usage patterns and model-safe examples
- **[Integration Guide](./integration.md)** - Architecture placement, composition rules, and implementation guidance

## Key Capabilities

- Provides item factories and coordinate creation helpers
- Defines shared dictionaries, operation contracts, and event abstractions
- Supplies reusable primitives consumed by @fjell/lib and providers

## Installation

```bash
npm install @fjell/core
```

## Public API Highlights

- `IQFactory`, `IFactory`, and `AItemService`
- `createCoordinate` and dictionary exports
- Shared errors, operations, and event exports
