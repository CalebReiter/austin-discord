const Jimp = require('jimp')

const FONT_PATH = './fonts/SEGOE_24_OUTLINE.fnt'

const textOverlay = async (filepath, text, fontpath=FONT_PATH) => {
	try {
        const image = await Jimp.read(filepath);
        const font = await Jimp.loadFont(fontpath);
        await image.print(font, 5, 5, {text, alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER}, 464 /* magic number? */);
        return [null, await image.getBufferAsync(Jimp.AUTO)];
    } catch (error) {
    	console.error(error);
    	return [error];
    }
};

export default textOverlay;