const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Запускаем сервер, если файл запускается напрямую
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app; // Экспортируем приложение для тестирования

