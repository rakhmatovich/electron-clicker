const {contextBridge,ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld("API", {
    setMin: (args) => {
        ipcRenderer.invoke('set-min', args)
    },
    setSec: (args) => {
        ipcRenderer.invoke('set-sec', args)
    },
    setMlSec: (args) => {
        ipcRenderer.invoke('set-ml-sec', args)
    },
    setClick: (args) => {
        ipcRenderer.invoke('set-click', args)
    },
})