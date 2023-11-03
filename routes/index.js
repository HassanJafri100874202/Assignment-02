const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Projects page
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
