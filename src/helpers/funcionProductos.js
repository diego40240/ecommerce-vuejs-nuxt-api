//Producto de Categoria Especifica
export function getEspecificaCategoria(categoria) {
  let url = "";
  if (categoria == "all") {
    url = "https://fakestoreapi.com/products";
  } else {
    url = `https://fakestoreapi.com/products/category/${categoria}`;
  }
  const datos = fetch(url)
    .then((res) => res.json())
    .then((productosCategoria) => productosCategoria);

  return datos;
}

//Categoria
export function getCategorias() {
  const responseCategorias = fetch(
    "https://fakestoreapi.com/products/categories",
  )
    .then((responseCategorias) => responseCategorias.json())
    .then((data) => data);

  return responseCategorias;
}
