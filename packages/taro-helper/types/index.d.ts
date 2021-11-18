import createBabelRegister from "./babelRegister";
declare interface helper{
    createBabelRegister: typeof createBabelRegister;
    resolveMainFilePath(p: string, ext?: string[]): string;
    resolveScriptPath(p: string): string;
    JS_EXT: string[];
    TS_EXT: string[];
    SCRIPT_EXT: string[];
    getModuleDefaultExport: (exports: any) => any;
};
declare const helper: helper
// @ts-ignore
export = helper

