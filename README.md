# React Native + Nextjs

# Road Map
- [x] Multiple Language
- [x] Graphql
- [ ] Navigation
- [ ] Theme
## Supported platforms

- Android (React Native 0.65)
- iOS (React Native 0.65)
- Web - Next.js (React Native 0.65)

### Using this repository as a boilerplate

1. Clone the repository: `git@github.com:kietitvn/react-native-universal-monorepo.git`
2. Run yarn install `cd react-native-universal-monorepo && yarn` 

## Available commands

Development and build commands:

- `yarn android`: Start developing the Android app
- `yarn android:start`: Start the metro server for Android/iOS
- `yarn android:studio`: Open the android app on Android Studio
- `yarn ios`: Start developing the iOS app
- `yarn ios:start`: Start the metro server for Android/iOS
- `yarn ios:pods`: Install iOS cocoapods dependencies
- `yarn ios:xcode`: Open the iOS app on XCode
- `yarn next:dev`: Dev the Next.js app
- `yarn next:start`: Start the Next.js app
- `yarn next:build`: Build the Next.js app

Other commands (we use [ultra-runner](https://github.com/folke/ultra-runner) to run these commands on all workspaces): 

- `yarn lint`: Lint each project
- `yarn lint:fix`: Lint + fix each project
- `yarn test`: Run tests of each project
- `yarn typecheck`: Run the TypeScript type-checking on each project

## Known issues

- Error "Can't resolve module React" => reRun Yarn at root folder

- Yarn Classic won't be able to resolve correctly dependencies that have a `peerDependency` on `react-native`.  
See [#22](https://github.com/mmazzarolo/react-native-universal-monorepo/issues/22) for a few workarounds. A fix on the `react-native-monorepo-tools` repo [is on the work](https://github.com/mmazzarolo/react-native-monorepo-tools/issues/9).
