import React, { useState } from "react";
import styled, { css } from "styled-components";

import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";
import filterIcon from "../../images/filter-icon.png";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
}) {
  const [toggleFilterIcon, setToggleFilterIcon] = useState(false);

  const handleFilterIcon = () => {
    setToggleFilterIcon(!toggleFilterIcon);
  };

  const categories = [
    {
      _id: 0,
      title: "Select genere(s)",
      list: genres,
    },
    {
      _id: 1,
      title: "Select min.vote",
      list: ratings,
    },
    {
      _id: 2,
      title: "Select language",
      list: languages,
    },
  ];

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
          onChange={searchMovies}
        />
        <SearchBar
          className={toggleFilterIcon ? "visible" : ""}
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
          onChange={searchMovies}
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <FilterIcon onClick={handleFilterIcon}>
          <img src={filterIcon} alt="collapse-non" />
        </FilterIcon>

        <ExpandableFilterWrapper className={toggleFilterIcon ? "visible" : ""}>
          {categories.map(({ title, list }) => (
            <ExpandableFilter title={title} list={list} key={title} />
          ))}
        </ExpandableFilterWrapper>
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;
const ExpandableFilterWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
  &.visible {
    display: block;
  }
`;

const SearchFiltersCont = styled.div`
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
const FilterIcon = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;
