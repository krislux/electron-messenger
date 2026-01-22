import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    x: 0,
    y: 0,
  });
  win.removeMenu();

  win.loadURL('https://www.messenger.com/');
}

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed', () => {
  app.quit();
});
