const Jimp = require('jimp')
const fs = require('fs');

const FONT_PATH = './fonts/SEGOE_24_OUTLINE.fnt'

const textOverlay = async (filepath, text, fontpath=FONT_PATH) => {
    const image = await Jimp.read(filepath);
    const font = await Jimp.loadFont(fontpath);
    image.print(font, 5, 5, {text, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER}, 464 /* magic number? */);
    return await image.getBufferAsync(Jimp.AUTO)
};

module.exports = textOverlay;