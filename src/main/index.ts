import { BrowserWindow, app, App } from "electron";
import path from "path";

class SampleApp {
  private mainWindow: BrowserWindow | null = null;
  private app: App;
  // private mainURL: string = `file://${__dirname}/index.html`;
  private mainURL: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/index.html"
      : path.join("file://", __dirname, "index.html");

  constructor(app: App) {
    this.app = app;
    this.app.on("window-all-closed", this.onWindowAllClosed.bind(this));
    this.app.on("ready", this.create.bind(this));
    this.app.on("activate", this.onActivated.bind(this));
  }

  private onWindowAllClosed() {
    this.app.quit();
  }

  private create() {
    this.mainWindow = new BrowserWindow({
      width: 800,
      height: 400,
      minWidth: 500,
      minHeight: 200,
      acceptFirstMouse: true,
      titleBarStyle: "hidden"
    });

    this.mainWindow.loadURL(this.mainURL);

    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }

  private onActivated() {
    if (this.mainWindow === null) {
      this.create();
    }
  }
}

// I have no idea if I should be exporting this
export const MyApp: SampleApp = new SampleApp(app);
