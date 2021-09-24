const express = require('express');
const router = express.Router(); // create multiple paths and keep them by separate files

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title: 'Safe Money Group - El poder de la era digital'});
});

router.get('/courses', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/courses.html'));
    res.render('courses.html', {title: 'Cursos'});
});

router.get('/plans', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/plans.html'));
    res.render('plans.html', {title: 'Planes'});
});

router.get('/contact', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/contact.html'));
    res.render('contact.html', {title: 'Contáctanos'});
});

router.get('/about-us', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/about-us.html'));
    res.render('about-us.html', {title: 'Acerca de nosotros'});
});

router.get('/parcels', (req, res) => {
    //res.sendFile(path.join(__dirname, 'views/parcels.html'));
    res.render('parcels.html', {title: 'Encomiendas'});
});

module.exports = router;