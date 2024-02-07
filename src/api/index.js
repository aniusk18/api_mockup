const express = require('express');

const emojis = require('./emojis');

const router = express.Router();
const NosisMockupController = require('../Controllers/NosisMockupController');
const CrmBancoMockup = require('../Controllers/CrmBancoMockupController');
const TestMockupController = require('../Controllers/TestMockupController');
const middlewares = require('../middlewares');

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.get('/alive', NosisMockupController.alive);
//Nosis
router.post('/login',NosisMockupController.login);
router.post('/validacion-nosis',NosisMockupController.validacionNosis);
router.post('/evaluacion-nosis',NosisMockupController.evaluacionNosis);
//Crm banco
//router.post('/login',NosisMockupController.login);
//orden de los parametros (path url,middleware,funcion)
router.post('/get-status-case',middlewares.notFoundToken,CrmBancoMockup.statusCase);
router.post('/get-case-dni',middlewares.notFoundToken,CrmBancoMockup.getCaseDni);

//test s1
router.post('/login-test',TestMockupController.login);
router.post('/test-envio-token',middlewares.notFoundToken,TestMockupController.printBodyandHeader);

// router.post('/get-status-case',CrmBancoMockup.statusCase);
// router.post('/get-case-dni',CrmBancoMockup.getCaseDni);


router.use('/emojis', emojis);

module.exports = router;
