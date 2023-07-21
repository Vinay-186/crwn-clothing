import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories,
)

export const selectCurrentCategoryMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        const new_items = items.map((item) => ({...item, price : item.price * 20}));
        acc[title.toLowerCase()] = new_items;
        return acc;
      }, {}),  
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading,
);