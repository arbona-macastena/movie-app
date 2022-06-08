import React from "react";
import styled from "styled-components";

import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      totalCount: 0,
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 },
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" },
      ],
    };
  }

  // TODO: Preload and set the popular movies and movie genres when page loads
  componentDidMount() {
    fetcher
      .getPopularMovies()
      .then((response) => {
        const popularMovies = response.data.results;

        this.setState({ results: popularMovies });
      })
      .catch((e) => {
        console.log(e);
      });

    fetcher
      .getMovieGenres()
      .then((response) => {
        const movieGenres = response.data.genres;

        this.setState({ genreOptions: movieGenres });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // TODO: Update search results based on the keyword and year inputs

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
    } = this.state;

    const searchMovies = (keyword) => {
      if (keyword.length >= 3) {
        this.setState({ keyword: keyword });

        fetcher
          .searchMoviesby(keyword)
          .then((response) => {
            const searchMovies = response.data;

            this.setState({
              totalCount: searchMovies.total_results,
              results: searchMovies.results,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>{" "}
        {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        <TotalCount>
          {totalCount > 0 ? totalCount + " Search result" : "Popular movies"}
        </TotalCount>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => searchMovies(keyword)}
          />
        </MovieFilters>
        <MovieResults>
          <MovieList
            movies={
              results.filter((movie) =>
                movie.title
                  .toLowerCase()
                  .includes(this.state.keyword.toLocaleLowerCase())
              ) || []
            }
            genres={genreOptions || []}
          />
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.main`
  padding: 0 35px 35px;
  @media (min-width: 768px) {
    padding: 35px;
  }
`;

const MovieResults = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(100% - 295px);
  }
`;

const MovieFilters = styled.div`
  margin-top: 15px;

  @media (min-width: 768px) {
    width: 280px;
    float: right;
  }
`;

const MobilePageTitle = styled.h1`
  padding-left: 40px;
  line-height: 26px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TotalCount = styled.strong`
  display: block;
`;
