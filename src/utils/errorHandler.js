const errorHandler = (error, req, res, next) => {
    if (typeof error === 'string') {
      const errorSplit = error.split(',');
      return res.status(parseInt(errorSplit[0])).json({
        status: false,
        message: errorSplit[1],
      })
    }
  
    return res.status(500).json({
      status: false,
      message: 'internal server error',
      error: error.message,
    })
  }
  
  module.exports = errorHandler;