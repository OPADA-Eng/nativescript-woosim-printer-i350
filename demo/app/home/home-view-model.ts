import { Observable } from "tns-core-modules/data/observable";
import { WoosimPrinterI350 } from "nativescript-woosim-printer-i350";
import * as imageSrc from "tns-core-modules/image-source";
import * as Image from "tns-core-modules/ui/image";
import { View } from "tns-core-modules/ui/core/view/view";
import * as fs from "tns-core-modules/file-system"
import * as BitmapFactory from "nativescript-bitmap-factory";
import * as KnownColors from "tns-core-modules/color/known-colors";
export class HomeViewModel extends Observable {
    public printer: WoosimPrinterI350;
    private _printerAddress = "00:15:0E:E6:25:39";
    public textToPrint = "قهوة موكا      2                                  7.5";
    public printerState = "";
    public connectVisible = true;
    public disconnectVisible = false;
    constructor(public page) {
        super();
        this.printer = new WoosimPrinterI350();
        // console.dir(this.printer);
        // console.dir(this.printer.ptrConn.getState());
        console.log(this.printer.isConnected());
    }
    public get printerAddress() {
        return this._printerAddress;
    }
    public set printerAddress(printerAddress: string) {
        this._printerAddress = printerAddress;
    }

    public getBitmapFromView(view: View, totalHeight, totalWidth) {

        let returnedBitmap = android.graphics.Bitmap.createBitmap(
            totalWidth,
            totalHeight,
            android.graphics.Bitmap.Config.RGB_565
        );
        view.layout(0, 0, totalWidth, totalHeight);
        let canvas = new android.graphics.Canvas(returnedBitmap);
        let bgDrawable = view.android.getBackground();
        if (bgDrawable != null) bgDrawable.draw(canvas);
        // else
        // canvas.drawColor(android.Color.WHITE);
        view.android.draw(canvas);
        return returnedBitmap;
    }
    public decreaseBmpSize(bmp) {
        console.log("bitmap before resize", bmp.getByteCount() / 1000000, ' MB');
        let options = new android.graphics.BitmapFactory.Options();
        options.inSampleSize = 2;
        options.inJustDecodeBounds = false;
        let stream = new java.io.ByteArrayOutputStream();
        bmp.compress(
            android.graphics.Bitmap.CompressFormat.PNG,
            1,
            stream
        );
        let compressedBmp = null;
        let byteArray = stream.toByteArray();
        compressedBmp = android.graphics.BitmapFactory.decodeByteArray(
            byteArray,
            0,
            byteArray.length,
            options
        );
        console.log("byteArray: ", byteArray.length)
        if (compressedBmp != null) {
            console.log("bitmap after compress size", compressedBmp.getByteCount() / 1000000, ' MB');
            return compressedBmp;
        }
        else {

            return bmp;
        }
    }
    public screenShot(view) {
        return new Promise((resolve, reject) => {
            try {
                view.android.setDrawingCacheEnabled(true);
                view.android.buildDrawingCache(true);
                setTimeout(() => {
                    let b = view.android.getDrawingCache();
                    var returnedBitmap = null;
                    if (b != null) {
                        returnedBitmap = android.graphics.Bitmap.createBitmap(b);
                        returnedBitmap = this.decreaseBmpSize(returnedBitmap);

                    } else {
                        let scrollView = this.page.getViewById("printArea");
                        let hieght = scrollView.android.getChildAt(0).getHeight();
                        let width = scrollView.android.getChildAt(0).getWidth();
                        returnedBitmap = this.getBitmapFromView(view, hieght, width);
                        returnedBitmap = this.decreaseBmpSize(returnedBitmap);
                    }
                    view.android.setDrawingCacheEnabled(false);
                    // view.android.destroyDrawingCache();
                    resolve(returnedBitmap);

                }, 1000);
            } catch (e) {
                console.log(e);
                reject(null);
            }
        });
    }
    public appendScreenshot(bmp) {
        var source = new imageSrc.ImageSource();
        source.setNativeSource(bmp);
        let image = new Image.Image();
        image.src = source;
        let sView = this.page.getViewById("screenShots");
        if (sView) sView.addChild(image);
    }

    public get2Bitmaps(bmp) {
        let width = bmp.getWidth();
        let height = bmp.getHeight();
        let srcRect = new android.graphics.Rect(0, 0, width, height / 2);
        let desRect = new android.graphics.Rect(0, 0, width, height / 2);
        let topBmp = android.graphics.Bitmap.createBitmap(
            width,
            height / 2,
            android.graphics.Bitmap.Config.ARGB_8888
        );
        let canvas = new android.graphics.Canvas(topBmp);
        canvas.drawBitmap(bmp, srcRect, desRect, null);

        srcRect = new android.graphics.Rect(0, height / 2, width, height);
        desRect = new android.graphics.Rect(0, 0, width, height / 2);
        let bottomBmp = android.graphics.Bitmap.createBitmap(
            width,
            height / 2,
            android.graphics.Bitmap.Config.RGB_565
        );
        canvas = new android.graphics.Canvas(bottomBmp);
        canvas.drawBitmap(bmp, srcRect, desRect, null);

        let bitmaps = [topBmp, bottomBmp];
        console.log("topBmp bitmap size", topBmp.getByteCount() / 1000000, ' MB');
        console.log("bottomBmp bitmap size", bottomBmp.getByteCount() / 1000000, ' MB');
        return bitmaps;
    }

    public getResizedBitmap(bm, newWidth, newHeight) {
        let width = bm.getWidth();
        let height = bm.getHeight();
        let scaleWidth = newWidth / width;
        let scaleHeight = newHeight / height;
        // CREATE A MATRIX FOR THE MANIPULATION
        let matrix = new android.graphics.Matrix();
        // RESIZE THE BIT MAP
        matrix.postScale(scaleWidth, scaleHeight);

        // "RECREATE" THE NEW BITMAP
        let resizedBitmap = android.graphics.Bitmap.createBitmap(
            bm,
            0,
            0,
            width,
            height,
            matrix,
            false
        );
        bm.recycle();
        return resizedBitmap;
    }

    // public screenShot(view) {
    //     view.android.setDrawingCacheEnabled(true);
    //     view.android.buildDrawingCache(true);
    //     var bmp = android.graphics.Bitmap.createBitmap(view.android.getDrawingCache());
    //     view.android.setDrawingCacheEnabled(false);
    //     // var source = new imageSrc.ImageSource();
    //     // source.setNativeSource(bmp);
    //     // let image = new Image.Image();
    //     // image.src = source;
    //     // let sView = this.page.getViewById('screenShots');
    //     // sView.addChild(image);
    //     return bmp;
    // }
    connect() {
        try {
            this.printer.connect(this.printerAddress);
            this.set('printerState', this.printer.ptrConn.getState());
            this.set('connectVisible', false);
            this.set('disconnectVisible', true);
        }
        catch (e) {
            console.log(e);
        }
    }
    public createBmp() {
        return new Promise((resolve, reject) => {

            // create a bitmap with 640x480
            var bmp = BitmapFactory.create(200, 300);

            // work with bitmap and
            // keep sure to free memory
            // after we do not need it anymore
            bmp.dispose(() => {
                // draw an oval with a size of 300x150
                // and start at position x=0, y=75
                // and use
                // "red" as border color and "black" as background color.
                // bmp.drawOval("200x150", "0,75",
                //     KnownColors.Red, KnownColors.Black);

                // draw a circle with a radius of 80
                // at the center of the bitmap (null => default)
                // and use
                // "dark green" as border color           
                bmp.drawCircle(80, null,
                    KnownColors.DarkGreen);

                // draws an arc with a size of 100x200
                // at x=10 and y=20
                // beginning at angle 0 with a sweep angle of 90 degrees
                // and a black border and a yellow fill color    
                // bmp.drawArc("100x200", "10,20",
                //     0, 90,
                //     KnownColors.Black, KnownColors.Yellow);

                // set a yellow point at x=160, y=150
                // bmp.setPoint("160,150", "ff0");

                // draws a line from (0|150) to (300|75)
                // with blue color
                // bmp.drawLine("0,150", "300,75", '#0000ff');

                // writes a text in yellow color
                // at x=100, y=100
                // by using "Roboto" as font
                // with a size of 10
                bmp.writeText("This is a test!", "100,100", {
                    color: KnownColors.Yellow,
                    size: 10,
                    name: "Roboto"
                });

                // console.dir(bmp);
                this.printer.printImg(bmp.nativeObject);
                resolve(bmp.nativeObject);
                // resolve(BitmapFactory.asBitmap(bmp))
            });
        })
    }
    disconnect() {
        this.printer.disconnect();
        this.set('connectVisible', true);
        this.set('disconnectVisible', false);
    }

    printTextFile() {
        let documents = fs.knownFolders.currentApp();

        const file = documents.getFile("Test_Write.txt");

        file.writeText(`
          Sales Receipt

MERCHANT NAME                   woosim coffee
MASTER                          Gil-dong Hong
ADDRESS                         #501, Daerung Techno
                                town 3rd 448,Gasan-dong 
                                Gumcheon-gu Seoul Korea
HELP DESK                       (+82-2)2107-3721

--------------------------------------------------------
Product       Sale                  Price
--------------------------------------------------------
قهوة موكا      2                                  7.5
Cafe latte      1                                  7.0$
Cappuccino      1                                  7.5$
---------------------------------------------------------
Total                                             29.5$
---------------------------------------------------------

                             Thank you!`)
            .then((result) => {
                var myFile = documents.getFile("Test_Write.txt");
                this.printer.printTextFile(myFile);
            }).catch((err) => {
                console.log(err);
            });


    }
    printImg() {
        let view = this.page.getViewById("printArea");
        this.createBmp()
            // this.screenShot(view)
            .then((bmp: any) => {
                if (bmp != null) {
                    // Helpers.startLoading("printing_wait");
                    console.dir(bmp);
                    let width = bmp.getWidth();
                    let hieght = bmp.getHeight();
                    console.log("Width×Height: ", width, hieght);
                    // this.appendScreenshot(bmp)


                }
            }).catch((err) => {
                console.log(err);
            })
    }

    print() {
        // let imageSource = this.screenShot(this.page.getViewById("printArea"));
        // this.printer.printImg("//sdcard//temp//test//Sewoo_bw_m.jpg");
        if (this.textToPrint != '') {
            this.printer.print(this.textToPrint);
        }
        else {
            this.printer.print("Hello World");
        }
    }
}
