const apiResponse = (res, statusCode = 200, statusText = "success", message, data = null) => {
    return res.status(statusCode).json({
        status: statusText,
        data: data ?? "null",
        message: message
    })
}

export default apiResponse;
