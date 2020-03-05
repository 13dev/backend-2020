var path = require('path');
// Get right app.js from LessonX folder.
require(path.join(__dirname, 'Lesson'+ process.argv[2], 'app.js'));