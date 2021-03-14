// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.findInFilesWithSelection",
    () => {
      // Get the current editor
      const editor = vscode.window.activeTextEditor;
      if (editor == null) {
        console.log("No active editor!");
        return;
      }

      // Use selection or word under cursor.
      const textRange = !editor.selection.isEmpty
        ? editor.selection
        : editor.document.getWordRangeAtPosition(editor.selection.active);

      // Initiate search
      vscode.commands.executeCommand("workbench.action.findInFiles", {
        query: textRange != null ? editor.document.getText(textRange) : "",
        triggerSearch: true,
        matchWholeWord: true,
        isCaseSensitive: true,
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
