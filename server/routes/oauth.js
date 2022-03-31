const express = require("express")
const passport = require("passport")
const router = express.Router()

router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/'
}),
(req, res) => {
    res.redirect('/')
})

router.get('/naver', passport.authenticate('naver'));
router.get('/naver/callback', passport.authenticate('naver', {
    failureRedirect: '/'
}),
(req, res) => {
    res.redirect('/')
})

router.get('/google', passport.authenticate(('google'), { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/'
}),
(req, res) => {
    res.redirect('/')
})

module.exports = router;
