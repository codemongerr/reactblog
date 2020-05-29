import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import View from "./View";
import { CURRENT_PAGE_KEY } from '../utils/constants';
import { scrollToTop, setLocalStorageItem } from '../utils/helper';

function Pagination({ page, hidePrevBtn, hideNextBtn, onClick }) {

  const handlePrevPage = () => {
    const prevPage = page + 1;
    onClick(prevPage);
    setLocalStorageItem(CURRENT_PAGE_KEY, prevPage);
    scrollToTop();
  }

  const handleNextPage = () => {
    const nextPage = page - 1;
    onClick(nextPage);
    setLocalStorageItem(CURRENT_PAGE_KEY, nextPage);
    scrollToTop();
  }

  return (
    <View as="footer">
      <View className="btn-group mb-5">
        {!hidePrevBtn && (
          <Button
            className="btn btn-outline-primary rounded-pill mr-3"
            onClick={handlePrevPage}
          >
            &#8592; previous posts
          </Button>
        )}
        {!hideNextBtn && (
          <Button
            className="btn btn-outline-primary rounded-pill"
            onClick={handleNextPage}
          >
            next posts &#8594;
          </Button>
        )}
      </View>
    </View>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  hidePrevBtn: PropTypes.bool,
  hideNextBtn: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  hidePrevBtn: false,
  hideNextBtn: true
}

export default Pagination;
