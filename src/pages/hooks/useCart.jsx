import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/recipe");
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
