export class AppConfig {
    FLW_BASE_URI: string;
    CORS_ORIGIN: string;
    /**
     *
     */
    constructor(cfg: IAppConfig) {
        this.FLW_BASE_URI = cfg.FLW_BASE_URI  
        this.CORS_ORIGIN = cfg.CORS_ORIGIN 

        let missingKeys = [];
        for (let key in cfg) {
            if (cfg[key] == undefined) {
                missingKeys.push(key);
            }
        }
        if(missingKeys.length) {
            console.error(`Missing values for: "${missingKeys}" in config. Update env file`);
            process.exit();
        }
    }
}

interface IAppConfig {
    CORS_ORIGIN: string;
    FLW_BASE_URI: string;
    
}