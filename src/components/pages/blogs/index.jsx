import { useState } from "react";
import { Button } from "../../shared";

const BlogsPage = () => {
  const initialState = {
    title: "",
    subTitle: "",
    description: "",
    author: ""
  };

  const [values, setValues] = useState(initialState);
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState(1);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const newDatas = datas.filter((data) => data.id !== values.id);
      setDatas([...newDatas, values]);
      setIsEdit(false);
    } else {
      setDatas([...datas, { id: id, ...values }]);
      setId((id) => id + 1);
    }
    setValues(initialState);
  };

  const handleEdit = (data) => {
    setIsEdit(true);
    setValues(data);
  };

  const handleDelete = (id) => {
    const newDatas = datas.filter((data) => data.id !== id);
    setDatas(newDatas);
  };

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="">
              <label>Title</label>
              <input
                value={values.title}
                name="title"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label>Subtitle</label>
              <input
                value={values.subTitle}
                name="subTitle"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label>Description</label>
              <textarea
                rows={10}
                cols={20}
                value={values.description}
                name="description"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-10">
              <label>Author</label>
              <input
                value={values.author}
                name="author"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <Button type="submit" title={isEdit ? "Update" : "Save"} />
          </form>
          {/* Results */}
          <div className="col-span-2">
            <h2>Results</h2>
            <div className="">
              <table className="w-full">
                <thead>
                  <tr className="text-left w-full">
                    <th>Id</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data, index) => {
                    return (
                      <tr key={index} className="w-full">
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.subTitle}</td>
                        <td>{data.description}</td>
                        <td>{data.author}</td>
                        <td className="space-x-2">
                          <button
                            className="p-2 border"
                            onClick={() => handleEdit(data)}
                          >
                            Edit
                          </button>
                          <button
                            className="p-2 border bg-red-400"
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
