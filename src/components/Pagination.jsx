import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import View from "./View";
import { scrollToTop, setLocalStorageItem } from '../utils/helper';

function Pagination({ page, hidePrevBtn, hideNextBtn, onClick }) {

  const handlePrevPage = () => {
    const prevPage = page + 1;
    onClick(prevPage);
    setLocalStorageItem('currentPage', prevPage);
    scrollToTop();
  }

  const handleNextPage = () => {
    const nextPage = page - 1;
    onClick(nextPage);
    setLocalStorageItem('currentPage', nextPage);
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
            &#8592; Older
          </Button>
        )}
        {!hideNextBtn && (
          <Button
            className="btn btn-outline-primary rounded-pill"
            onClick={handleNextPage}
          >
            Newest &#8594;
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
