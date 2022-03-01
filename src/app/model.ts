import {InjectionToken } from "@angular/core";



export interface Config {
    customerLimit: number,
    appUrl: string
}

export const CONFIG = new InjectionToken<Config>('app.config');