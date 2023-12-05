const { app, BrowserWindow } = require('electron');
const url = require('node:url');
const path = require('node:path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntergration: true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, './dist/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  mainWindow.menuBarVisible = false;
  mainWindow.resizable = false;

  mainWindow.on('close', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
