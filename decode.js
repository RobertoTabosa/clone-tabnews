// String codificada em Base64
const base64String = "aHR0cHM6Ly9jdXJzby5kZXYvd2ViL2Rucy1oNGNrM3I=";

// Decodificando a string
const decodedString = atob(base64String);

console.log(decodedString);
