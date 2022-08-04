import Category from "../model/category";
import instance from "./instance";


export const getAll = () => {
    return instance.get("/category")
}
export const get = (id) => {
    return instance.get(`/category/${id}`);
}
export const add = (category: Category) => {
    return instance.post("/category", category)
}
export const remove = (id) => {
    return instance.delete(`/category/${id}`);
};
export const update = (category: Category) => {
    return instance.put(`/category/${category.id}`, category);
};