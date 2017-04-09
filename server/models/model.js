module.exports = (db, models)=>{
    models.user = db.define("users", {
        id: { type: 'serial', key: true },
        username: String,
        password: String,
        flag: Number,
        createdtime: Date
    });
    models.area = db.define("areas",{
        id: { type: 'serial', key: true },
        name: String,
        areano: String,
        userid: Number,
        createdtime: Date
    });
    models.site = db.define("sites",{
        id: { type: 'serial', key: true },
        areano: String,
        drvno: String,
        name: String,
        userid: Number,
        createdtime: Date
    });

    models.rtcdadt = db.define("rtcdadt",{
        id: { type: 'serial', key: true },
        drvno: String,
        t1: Number,
        t2: Number,
        t3: Number,
        t4: Number,
        t5: Number,
        t6: Number,
        AValve: Number,
        BValve: Number,
        RunMod: String,
        RunStatus: String,
        ErrNum: String,
        createdtime: Date
    });
}
