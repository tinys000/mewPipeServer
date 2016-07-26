var videos = require('../controller/videos.js');

app.get('/videos/', videos.getAll);
app.get('/video/:hash', videos.getByHash);
app.get('/videos/best/', videos.getByView);

app.post('/video/upload/', videos.addVideo);

app.put('/video/:hash', videos.update);

app.delete('/video/:hash', videos.delete);
