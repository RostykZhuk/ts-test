interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
  }
  
  type GroupedProducts = {
    [category: string]: { id: number; name: string; price: number }[];
  };
const  mockedProducts = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Keyboard", category: "Electronics", price: 75 },
    { id: 3, name: "T-Shirt", category: "Apparel", price: 25 },
    { id: 4, name: "Jeans", category: "Apparel", price: 80 },
    { id: 5, name: "Mouse", category: "Electronics", price: 25 }
  ];
  
  function groupProductsByCategory(products: Product[]): GroupedProducts {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push({
        id: product.id,
        name: product.name,
        price: product.price
      });
      return acc;
    }, {} as GroupedProducts);
  }

  const groupedProducts = groupProductsByCategory(mockedProducts);

  console.log(groupedProducts);