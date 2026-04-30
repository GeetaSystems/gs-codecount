# gs-codecount
<img width="1899" height="877" alt="image" src="https://github.com/user-attachments/assets/f2115961-b719-4678-bb9b-312e3cd12fd6" />

A simple and fast CLI tool to count **Lines of Code (LOC)** in a project by language.

Created by **Geeta Systems**.

### Changes Made:
1. Added a new feature under the **Features** section: "Progress bar for counting lines".

## Installation

run directly using npx:

```bash
npx gs-codecount js jsx ts
```

---

## Usage

Count lines for specific file extensions.

```bash
gs-codecount js jsx
```

Example:

```
Lines of Code

js: 3200
jsx: 850

Total: 4050
```

---

## Supported Languages

Any extension can be passed:

```
gs-codecount js ts jsx py java go
```

---

## Example

Count JavaScript files:

```bash
gs-codecount js
```

Count React project:

```bash
gs-codecount js jsx ts tsx
```

---

## Features

- Fast file scanning
- Multiple language support
- CLI based
- Works with any project
- Lightweight

---

## Ignore Folders

The tool automatically ignores:

```
node_modules, dist, .next
```

---

## Development

Clone repository:

```bash
git clone https://github.com/GeetaSystems/gs-codecount
cd gs-codecount
npm install
```

Run locally:

```bash
node bin/cli.js js jsx
```

## License

MIT © Geeta Systems
