export class AppConfig {
    FLW_BASE_URI: string;
    CORS_ORIGIN: string;
    /**
     *
     */
    constructor(cfg: IAppConfig) {
        this.FLW_BASE_URI = cfg.FLW_BASE_URI  
        this.CORS_ORIGIN = cfg.CORS_ORIGIN      
    }
}

interface IAppConfig {
    CORS_ORIGIN: string;
    FLW_BASE_URI: string;
    
}