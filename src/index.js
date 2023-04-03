const { app, BrowserWindow } = require("electron");
const path = require("path");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: path.join(__dirname, "assets", "icons", "gdsc_icon.png"),
    width: 800,
    height: 600,
    title: "Website",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
      devTools: false,
    },
    autoHideMenuBar: true,
  });
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Figma Window
  const designWinow = new BrowserWindow({
    icon: path.join(__dirname, "assets", "icons", "gdsc_icon.png"),
    title: "Design Sheet",
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      devTools: false,
    },
    autoHideMenuBar: true,
  });
  // designWinow.loadURL(
  //   "https://www.figma.com/file/5om27XyD5Cidp5FHbqPI1U/GDSC-Webdev-Event---Round-2"
  // );
  designWinow.loadFile(path.join(__dirname, "Design Sheet.pdf"));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
