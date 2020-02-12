/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module woosim {
		export module printer {
			export class BuildConfig {
				public static class: java.lang.Class<com.woosim.printer.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module woosim {
		export module printer {
			export class WoosimBarcode {
				public static class: java.lang.Class<com.woosim.printer.WoosimBarcode>;
				public static UPC_A: number;
				public static UPC_E: number;
				public static EAN13: number;
				public static EAN8: number;
				public static CODE39: number;
				public static ITF: number;
				public static CODEBAR: number;
				public static CODE93: number;
				public static CODE128: number;
				public static create2DBarcodeMicroPDF417(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): native.Array<number>;
				public static create2DBarcodeAztec(param0: number, param1: number, param2: number, param3: native.Array<number>): native.Array<number>;
				public static create2DBarcodeDataMatrix(param0: number, param1: number, param2: number, param3: native.Array<number>): native.Array<number>;
				public static create2DBarcodeQRCode(param0: number, param1: number, param2: number, param3: native.Array<number>): native.Array<number>;
				public static create2DBarcodeTruncPDF417(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: native.Array<number>): native.Array<number>;
				public static createGS1Databar(param0: number, param1: number, param2: native.Array<number>): native.Array<number>;
				public static create2DBarcodeMaxicode(param0: number, param1: native.Array<number>): native.Array<number>;
				public static create2DBarcodePDF417(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: native.Array<number>): native.Array<number>;
				public constructor();
				public static createBarcode(param0: number, param1: number, param2: number, param3: boolean, param4: native.Array<number>): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module woosim {
		export module printer {
			export class WoosimCmd {
				public static class: java.lang.Class<com.woosim.printer.WoosimCmd>;
				public static MCU_M16C: number;
				public static MCU_ARM: number;
				public static MCU_RX: number;
				public static CUT_FULL: number;
				public static CUT_PARTIAL: number;
				public static CT_CP437: number;
				public static CT_KATAKANA: number;
				public static CT_CP850: number;
				public static CT_CP860: number;
				public static CT_CP863: number;
				public static CT_CP865: number;
				public static CT_CP852: number;
				public static CT_CP857: number;
				public static CT_CP737: number;
				public static CT_CP866: number;
				public static CT_CP862: number;
				public static CT_CP775: number;
				public static CT_POLISH: number;
				public static CT_ISO8859_15: number;
				public static CT_WIN1252: number;
				public static CT_CP858: number;
				public static CT_CP855: number;
				public static CT_WIN1251: number;
				public static CT_WIN1250: number;
				public static CT_WIN1253: number;
				public static CT_WIN1254: number;
				public static CT_WIN1255: number;
				public static CT_WIN1258: number;
				public static CT_WIN1257: number;
				public static CT_AZERBAIJANI: number;
				public static CT_WIN874: number;
				public static CT_CP720: number;
				public static CT_IRAN_SYSTEM: number;
				public static CT_WIN1256: number;
				public static CT_ARABIC_FARSI: number;
				public static CT_ARABIC_FORMS_B: number;
				public static CT_HINDI_DEVANAGARI: number;
				public static CT_DBCS: number;
				public static FONT_LARGE: number;
				public static FONT_MEDIUM: number;
				public static FONT_SMALL: number;
				public static ALIGN_LEFT: number;
				public static ALIGN_CENTER: number;
				public static ALIGN_RIGHT: number;
				public static openCashDrawer(): native.Array<number>;
				public static printLineFeed(param0: number): native.Array<number>;
				public static PM_setArea(param0: number, param1: number, param2: number, param3: number): native.Array<number>;
				public static SCR_enter(): native.Array<number>;
				public static queryModelName(): native.Array<number>;
				public static setAlignment(param0: number): native.Array<number>;
				public static setPositionFromMark(param0: number): native.Array<number>;
				public static SCR_enterNonSecureMode(): native.Array<number>;
				public static cutPaper(param0: number): native.Array<number>;
				public static resetLineSpace(): native.Array<number>;
				public static initPrinter(): native.Array<number>;
				public constructor();
				public static queryDeviceVersion(): native.Array<number>;
				public static SCR_exitNonSecureMode(): native.Array<number>;
				public static setLeftMargin(param0: number): native.Array<number>;
				public static queryStatus(): native.Array<number>;
				public static setUpsideDown(param0: boolean): native.Array<number>;
				public static setPrintingWidth(param0: number): native.Array<number>;
				public static MSR_doubleTrackMode(): native.Array<number>;
				public static setCodeTable(param0: number, param1: number, param2: number): native.Array<number>;
				public static setTextAlign(param0: number): native.Array<number>;
				public static SMSR_writeData(param0: native.Array<number>, param1: number): native.Array<number>;
				public static PM_printStdMode(): native.Array<number>;
				public static setTabPosition(param0: native.Array<number>): native.Array<number>;
				public static PM_setStdMode(): native.Array<number>;
				public static PM_moveAbsVertical(param0: number): native.Array<number>;
				public static MSR_tripleTrackMode(): native.Array<number>;
				public static PM_setPosition(param0: number, param1: number): native.Array<number>;
				public static setTextStyle(param0: boolean, param1: boolean, param2: boolean, param3: number, param4: number): native.Array<number>;
				public static getTTFcode(param0: number, param1: number, param2: string): native.Array<number>;
				public static setPageMode(): native.Array<number>;
				public static SCR_exit(): native.Array<number>;
				public static MSR_3rdTrackMode(): native.Array<number>;
				public static MSR_exit(): native.Array<number>;
				public static SMSR_enter(): native.Array<number>;
				public static PM_deleteData(): native.Array<number>;
				public static moveRelPosition(param0: number): native.Array<number>;
				public static setLineSpace(param0: number): native.Array<number>;
				public static PM_setDirection(param0: number): native.Array<number>;
				public static MSR_1stTrackMode(): native.Array<number>;
				public static setCharacterSpace(param0: number): native.Array<number>;
				public static printData(): native.Array<number>;
				public static moveAbsPosition(param0: number): native.Array<number>;
				public static MSR_2ndTrackMode(): native.Array<number>;
				public static printDotFeed(param0: number): native.Array<number>;
				public static feedToMark(): native.Array<number>;
				public static PM_moveRelVertical(param0: number): native.Array<number>;
				public static PM_printData(): native.Array<number>;
				public static selectTTF(param0: string): native.Array<number>;
				public static SMSR_exit(): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module woosim {
		export module printer {
			export class WoosimImage {
				public static class: java.lang.Class<com.woosim.printer.WoosimImage>;
				public static printARGBbitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printCompressedBitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static putRGBbitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printCompressedBitmapLandscape(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printStdModeColorBitmap(param0: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static drawBox(param0: number, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
				public static fastPrintBitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static drawLine(param0: number, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
				public static printStdModeBitmap(param0: globalAndroid.graphics.Bitmap): native.Array<number>;
				public constructor();
				public static drawColorBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printRGBbitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printColorBitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap, param5: number): native.Array<number>;
				public static fastPrintRGBbitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printBitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static drawBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printStoredImage(param0: number): native.Array<number>;
				public static printBitmapLandscape(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printColorBitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static printColorBitmapLandscape(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static drawEllipse(param0: number, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
				public static fastPrintARGBbitmap(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static bmp2PrintableImage(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.Bitmap): native.Array<number>;
				public static putARGBbitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap): native.Array<number>;
			}
			export module WoosimImage {
				export class C3 {
					public static class: java.lang.Class<com.woosim.printer.WoosimImage.C3>;
					public toRGB(): number;
					public add(param0: com.woosim.printer.WoosimImage.C3): com.woosim.printer.WoosimImage.C3;
					public sub(param0: com.woosim.printer.WoosimImage.C3): com.woosim.printer.WoosimImage.C3;
					public diff(param0: com.woosim.printer.WoosimImage.C3): number;
					public constructor(param0: number, param1: number, param2: number);
					public clamp(param0: number): number;
					public constructor(param0: number);
					public mul(param0: number): com.woosim.printer.WoosimImage.C3;
				}
			}
		}
	}
}

declare module com {
	export module woosim {
		export module printer {
			export class WoosimService {
				public static class: java.lang.Class<com.woosim.printer.WoosimService>;
				public static BLE_SERVICE: string;
				public static BLE_RX_CHARACTERISTIC: string;
				public static BLE_TX_CHARACTERISTIC: string;
				public static MESSAGE_PRINTER: number;
				public static UNPRESCRIBED: number;
				public static MSR: number;
				public constructor(param0: globalAndroid.os.Handler);
				public clearRcvBuffer(): void;
				public processRcvData(param0: native.Array<number>, param1: number): void;
			}
			export module WoosimService {
				export class ParsingThread {
					public static class: java.lang.Class<com.woosim.printer.WoosimService.ParsingThread>;
					public constructor(param0: com.woosim.printer.WoosimService);
					public run(): void;
				}
				export class Queue {
					public static class: java.lang.Class<com.woosim.printer.WoosimService.Queue>;
					public reset(): void;
					public getByte(): number;
					public constructor(param0: com.woosim.printer.WoosimService, param1: number);
					public remainData(): number;
					public getBytes(param0: number): native.Array<number>;
					public isNotEmpty(): boolean;
					public skipBytes(param0: number): void;
					public add(param0: native.Array<number>, param1: number): void;
				}
			}
		}
	}
}

//Generics information:

