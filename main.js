import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
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
