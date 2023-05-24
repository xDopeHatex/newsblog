import {
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
} from "../constants";

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const getLatestNews = (payload) => ({
  type: GET_LATEST_NEWS,
  payload,
});

export const getPopularNews = (payload) => ({
  type: GET_POPULAR_NEWS,
  payload,
});
