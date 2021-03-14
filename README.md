# find-in-files-with-selection

Like `Find With Selection`, but for "Find in Files". Use this to find your selected text (or current word if there is nothing selected) in your workspace.

## Features

Coming soon

## Settings

Open your [keybindings.json](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization) and add this keybinding:

```json
{
  "key": "cmd+shift+f",
  "command": "extension.findInFilesWithSelection",
  "when": "editorTextFocus && !editorHasMultipleSelections"
}
```

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

### 1.0.0

Initial release

## Development

### Helpful links

- [Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
- [vscode-quick-open-prefill-selection/extension.ts](https://github.com/ColCh/vscode-quick-open-prefill-selection/blob/master/src/extension.ts)
- [How to initiate “findInFiles” with VSCode extension API?](https://stackoverflow.com/questions/56821068/how-to-initiate-findinfiles-with-vscode-extension-api/56821183#)
