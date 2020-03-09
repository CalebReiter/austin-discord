const Jimp = require('jimp')

const FONT_PATH = './fonts/SEGOE_32_OUTLINE.fnt'

const textOverlay = async (filepath, text, fontpath=FONT_PATH) => {
    const image = await Jimp.read(filepath);
    const font = await Jimp.loadFont(fontpath);
    image.print(font, 5, 5, {text, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER}, image.getWidth());
    return await image.getBufferAsync(Jimp.AUTO)
};

module.exports = textOverlay;