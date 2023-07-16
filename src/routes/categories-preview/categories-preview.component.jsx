import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentCategoryMap } from '../../store/categories/category.selector'
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCurrentCategoryMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
