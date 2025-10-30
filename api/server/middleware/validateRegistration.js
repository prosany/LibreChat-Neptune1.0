const { isEnabled } = require('@librechat/api');

function validateRegistration(req, res, next) {
  if (req.invite) {
    return next();
  }

  if (isEnabled(process.env.ALLOW_REGISTRATION && !process.env.FORCE_ALLOW_REGISTRATION_BY_API)) {
    next();
  } else {
    return res.status(403).json({
      message: 'Registration is not allowed.',
    });
  }
}

module.exports = validateRegistration;
