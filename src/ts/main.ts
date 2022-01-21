import { Iservice } from "../service/Iservice";
import { service } from "../service/service";

window.onload = function () {
    let main = new Main();
    let myService = new service();
    main.start(myService);
};

class Main {
    start = (getInterface: Iservice) => {
        getInterface.GetData();
    }
};