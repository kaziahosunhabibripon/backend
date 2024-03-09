const asyncHandlerPromise = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.status || 500).json({
      success: false,
      message: err.message,
    });
    next(err);
  }
};
export { asyncHandlerPromise, asyncHandler };
