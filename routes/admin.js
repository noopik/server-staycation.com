const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple } = require('../middleware/multer'); // deklarasikan multer

router.get('/dashboard', adminController.viewDashboard);
// endpoint category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

//endpoint bank
router.get('/bank', adminController.viewBank);
router.post('/bank', upload, adminController.addBank); // menggunakan multer
router.put('/bank', upload, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

//endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editView);
router.delete('/item/:id/delete', adminController.deleteItem);

//endpoint detail item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature', upload, adminController.addFeature);
router.put('/item/update/feature', upload, adminController.editFeature);

router.get('/booking', adminController.viewBooking);

module.exports = router;