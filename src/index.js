const {app, BrowserWindow, ipcMain, Menu} = require('electron');
const path = require("path");
const robot = require('robotjs')

let min, sec, mlSec

function clickAtInterval(input) {
    setTimeout(() => {
        const time = new Date()
        const botMinutes = time.getMinutes()
        const botSeconds = time.getSeconds()
        const botMls = time.getMilliseconds()
        console.log(`${botMinutes} : ${botSeconds} : ${botMls}`)

        robot.mouseClick('left');
    }, input);
}

function timeRemind(mlsInOneMinute, mlsInOneSecond, mls) {
    const time = new Date()
    const botMinutes = time.getMinutes()
    const botSeconds = time.getSeconds()
    const botMls = time.getMilliseconds()

    console.log(`${botMinutes} : ${botSeconds} : ${botMls}`)

    let realMin = mlsInOneMinute - botMinutes - 1
    let realSec = mlsInOneSecond - botSeconds - 1
    let realMls = mls - botMls

    if (realSec < 0) realSec += 60
    if (realMls < 0) realMls += 1000

    // console.log(`${realMin} : ${realSec} : ${realMls}`)
    const inputMin = (realMin * 60 * 1000)
    const input = (inputMin > 0 ? inputMin : 0) + (realSec * 1000) + realMls
    clickAtInterval(input)
}

function createWindow() {
    const preloadScriptPath = path.join(__dirname, './preload.js')

    let mainWindow = new BrowserWindow({
        width: 600, height: 400, webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: preloadScriptPath
        }
    });

    mainWindow.loadFile('resources/index.html');

    ipcMain.handle('set-min', async function setGoal(_event, value) {
        min = value
    })
    ipcMain.handle('set-sec', async function setGoal(_event, value) {
        sec = value
    })
    ipcMain.handle('set-ml-sec', async function setGoal(_event, value) {
        mlSec = value
    })
    ipcMain.handle('set-click', async function setGoal(_event, value) {
        console.log('click')
        timeRemind(min, sec, mlSec)
    })

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    Menu.setApplicationMenu(Menu.buildFromTemplate([
        {
            label: app.getName(),
            submenu: [
                {
                    label: `Hello`,
                    click: () => console.log("Hello world")
                }
            ]
        }
    ]))
}

app.on('ready', () => {
    createWindow();

    // console.log(robot.getMousePos())
    // robot.moveMouse(100, 100);
    // console.log(robot.getMousePos())
});

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