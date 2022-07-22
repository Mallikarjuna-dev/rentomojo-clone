/*action*/

import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLEPRODUCT_ERROR,
  GET_SINGLEPRODUCT_LOADING,
  GET_SINGLEPRODUCT_SUCCESS,
} from "./actiontypes";

export const getProducts = (category) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  return axios
    .get(` http://localhost:8080/${category}`)
    .then((res) => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: GET_PRODUCTS_FAILURE });
    });
};

export const getsingleproductapi = (productcategory,id) => (dispatch) => {
  dispatch({type:GET_SINGLEPRODUCT_LOADING})

  axios.get(`http://localhost:8080/${productcategory}/${id}`)
  .then((res) => dispatch({type:GET_SINGLEPRODUCT_SUCCESS, payload:res.data }))
  .then(() => dispatch({type:GET_SINGLEPRODUCT_ERROR}))
}
