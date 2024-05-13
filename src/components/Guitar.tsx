import type { Guitar } from "../types";
import { CartActions } from "../reducers/cart-reducer";
import { Dispatch } from "react";

type GuitarProps = {
  guitar: Guitar;
  dispatch: Dispatch<CartActions>;
};

const Guitar = ({ guitar, dispatch }: GuitarProps) => {
  const { name, description, image, price } = guitar;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-bolder text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark text-uppercase fw-bold"
          onClick={() =>
            dispatch({ type: "add-to-cart", payload: { item: guitar } })
          }
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Guitar;
