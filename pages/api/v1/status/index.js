function status(request, response) {
  response.status(200).json({ chave: "São muitas!" });
}
export default status;
