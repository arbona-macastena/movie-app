import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </LeftCont>
      <RightContWrapper>
        <RightCont>
          <Title>{movie.title}</Title>
          <GenresWrapper>
            {movie.genre_ids.map((x) => {
              const filtered = genres.find((item) => item.id === x);
              if (filtered !== undefined)
                return (
                  <GenresItem key={filtered.id}> {filtered.name}</GenresItem>
                );
            })}
          </GenresWrapper>
          <Overview>{movie.overview}</Overview>
          <ReleaseDate>{movie.release_date}</ReleaseDate>
        </RightCont>
        <Rating>{movie.vote_average}</Rating>
      </RightContWrapper>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    height: 200px;
    overflow: hidden;
  }
`;

const LeftCont = styled.div`
  display: inline-block;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    @media (min-width: 768px) {
      height: 250px;
    }
  }
`;

const RightContWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 1em;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.4em;
  }
`;

const GenresWrapper = styled.div`
  display: flex;
`;

const Overview = styled.div`
  padding: 8px 0 16px 0;

  @media (max-width: 768px) {
    height: 60%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const GenresItem = styled.span`
  color: ${colors.primaryColor};
  padding-right: 4px;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  &:not(:last-child):after {
    content: "|";
    margin-left: 4px;
  }
`;

const ReleaseDate = styled.div`
  color: ${colors.primaryColor};
  font-weight: 100;
  font-size: 0.8em;
`;

const Rating = styled.h4`
  background: ${colors.primaryColor};
  color: white;
  border-radius: 6px;
  padding: 2px 6px;
  height: max-content;
  font-size: 1.2;
  margin: 0;
`;
