const express = require('express');
const router = express.Router();
const Testcase = require('../models/Testcase');

// Create a new test case
router.post('/', async (req, res) => {
    try {
        const newTestcase = new Testcase(req.body);
        const savedTestcase = await newTestcase.save();
        res.status(201).json(savedTestcase);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all test cases
router.get('/', async (req, res) => {
    try {
        const testcases = await Testcase.find();
        res.status(200).json(testcases);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a test case
router.put('/:id', async (req, res) => {
    try {
        const updatedTestcase = await Testcase.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedTestcase);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a test case
router.delete('/:id', async (req, res) => {
    try {
        await Testcase.findByIdAndDelete(req.params.id);
        res.status(200).json('Test case deleted');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log('Received POST request:', req.body); // Debug log
    try {
        const newTestcase = new Testcase(req.body);
        const savedTestcase = await newTestcase.save();
        console.log('Saved Test Case:', savedTestcase); // Debug log
        res.status(201).json(savedTestcase);
    } catch (err) {
        console.error('Error saving test case:', err);
        res.status(500).json(err);
    }
});

module.exports = router;
