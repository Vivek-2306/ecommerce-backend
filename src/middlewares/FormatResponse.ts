const formatResponse = (
  statusCodes: number,
  error: boolean = false,
  errorCode: any = null,
  message: string,
  data: any,
) => {
  return { statusCodes, error, errorCode, message, data }
}

export default formatResponse
