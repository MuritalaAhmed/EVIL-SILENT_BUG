const fs = require('fs');
const axios = require('axios');
const FileType = require('file-type');
const express = require('express');
const { writeExif } = require('./lib/exif'); // Ensure this path is correct
const { ryoroyko } = require('./your-ryoroyko-setup'); // Replace with your actual import

// Set up Express server
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to port 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Send media function
ryoroyko.sendMedia = async (jid, file, filename, caption = '', options = {}) => {
  const { asSticker, packname = global.packname, author = global.author, categories = [] } = options;
  let mtype;
  let mimetype;
  let pathFile;

  if (/audio/.test(options.mimetype)) {
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else if (/video/.test(options.mimetype)) {
    mtype = 'video';
    mimetype = 'video/mp4';
  } else if (/image/.test(options.mimetype)) {
    mtype = 'image';
    mimetype = 'image/jpeg';
  } else {
    mtype = 'document';
    mimetype = options.mimetype || 'application/octet-stream';
  }

  if (asSticker || /webp/.test(mimetype)) {
    let media = { mimetype, data: file };
    pathFile = await writeExif(media, { packname, author, categories });
    mtype = 'sticker';
    mimetype = 'image/webp';
  } else {
    pathFile = file;
  }

  await ryoroyko.sendMessage(jid, { [mtype]: { url: pathFile }, caption, mimetype, fileName: filename, ...options }, { quoted: options.quoted });

  if (pathFile !== file) {
    await fs.promises.unlink(pathFile);
  }
};

// Get file function
ryoroyko.getFile = async (path, asBuffer = false) => {
  let data;
  let filename;

  if (/^data:.*?\/.*?;base64,/i.test(path)) {
    data = Buffer.from(path.split(',')[1], 'base64');
    filename = 'file';
  } else if (/^https?:\/\//.test(path)) {
    const res = await axios.get(path, { responseType: 'arraybuffer' });
    data = Buffer.from(res.data);
    filename = path.split('/').pop();
  } else if (fs.existsSync(path)) {
    data = fs.readFileSync(path);
    filename = path;
  } else {
    throw new Error('Invalid file path');
  }

  const type = await FileType.fromBuffer(data);
  const mime = type ? type.mime : 'application/octet-stream';

  if (asBuffer) return { mime, data, filename };

  return { mime, data, filename };
};

// Get message function
ryoroyko.getMessage = async (key) => {
  try {
    const message = await ryoroyko.loadMessage(key.remoteJid, key.id);
    return message;
  } catch (err) {
    console.error('Error fetching message: ', err);
    return null;
  }
};

// Append text messages function
ryoroyko.appendTextMessage = async (text, chatUpdate) => {
  // Implement based on your application's needs
  // Example placeholder implementation:
  if (chatUpdate && chatUpdate.jid) {
    await ryoroyko.sendMessage(chatUpdate.jid, { text });
  } else {
    console.error('Invalid chat update');
  }
};

// Start ryoroyko
ryoroykoStart();
	  
