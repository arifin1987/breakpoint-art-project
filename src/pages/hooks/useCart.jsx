import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await fetch(
        "https://breakpoint-art-project-server.vercel.app"
      );
      return res.json();
    },
  });

  return [cart, refetch];
};

export default useCart;
