# expo-router 58: Stack.Protected renders guarded routes as screens (flash)

Minimal reproduction for an expo-router SDK 58 regression in `Stack.Protected`. The same code on SDK 57 behaves correctly; see the `sdk-57` branch.

Since [expo/expo#47744](https://github.com/expo/expo/pull/47744), a route whose guard is `false` stays registered in the navigator and renders a `<Redirect>`, which calls `router.replace`. In SDK 57 the guarded route was removed from the navigator. That change causes an empty-screen flash when the guard changes.

## Setup

- `main`: expo-router `58.0.30`, expo `58.0.23` (exact versions resolved in `package-lock.json`)
- `sdk-57`: expo-router `57.0.30`, expo `57.0.32` (exact versions resolved in `package-lock.json`)
- Tested on: iPhone 17 Pro Max simulator, iOS 26.5

The session is a boolean in React state. **Sign in** sets it to `true` and **Sign out** sets it to `false`. There is no auth library, storage, or async code, and the handlers make no `router` calls. All navigator options are left at their defaults (no `screenOptions`, `redirectTo`, or `anchor`).

```text
src/app/
├── _layout.tsx          # Stack: (public) guard={!session}, (app) guard={session}
├── (public)/
│   ├── _layout.tsx
│   └── index.tsx        # Sign in button
└── (app)/
    ├── _layout.tsx
    ├── index.tsx        # Sign out button
    └── settings.tsx
```

Both groups have an `index.tsx`. I also tested with the public one renamed, and the behaviour is the same. This is not the redirect loop in [#52072](https://github.com/expo/expo/issues/52072).

## Run

```sh
npm install
npx expo start
```

## Steps

1. Tap **Sign in**, then **Sign out**.

**SDK 58:** the current screen goes empty for about 200ms, with only the root Stack header showing the route name `(app)`. Then `(public)` slides in like a forward push. Signing in does the same in reverse (an empty `(public)` screen, then `(app)` slides in).

**SDK 57:** the screens swap directly, with no empty frame.

## Recordings

<!-- Attach SDK 58 and SDK 57 recordings, plus frame strips. -->

## Related

- [#47744](https://github.com/expo/expo/pull/47744): the change that keeps guarded screens registered and renders them as redirects
- [#51916](https://github.com/expo/expo/issues/51916) / [#51925](https://github.com/expo/expo/pull/51925): same mechanism; duplicate route left in history when a guard turns false with a route below it. #51925 does not cover this repro: the guarded route is at the bottom of the stack.
- [#52072](https://github.com/expo/expo/issues/52072): same mechanism; redirect loop when the fallback URL matches a guarded route
