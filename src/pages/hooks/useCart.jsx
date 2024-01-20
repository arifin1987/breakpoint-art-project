import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await fetch(
        "https://breakpoint-art-project-server-nlesavpdx-arifin1987.vercel.app/recipe"
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
