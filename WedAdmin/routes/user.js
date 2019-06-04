var express = require('express');
var router = express.Router();
const user_comment = require('../controllers/user');

router.get('/listUser', user_comment.listUser);

router.get('/deleteUser_list', user_comment.deleteUser_list);
router.get('/deleteUser/:id', user_comment.deleteUser);

router.get('/listComment', user_comment.listComment);

router.get('/deleteComment_list', user_comment.deleteComment_list);
router.get('/deleteComment/:id', user_comment.deleteCommentBeReview);

router.get('/reviewComments', user_comment.reviewComments);
router.get('/review/:id', user_comment.review);
router.get('/delete/:id', user_comment.delete);

module.exports = router;