import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  #   query getMovie($id: Int!) {
  {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const parsedID = Number.parseInt(id);
  console.log(parsedID);
  const { loading, data } = useQuery(GET_MOVIE, { variables: { parsedID } });
  console.log(data);
  if (loading) {
    return <span>"loading"</span>;
  }
  if (data && data.movie) {
    return <span>data.movie.title</span>;
  }
};

export default Detail;
