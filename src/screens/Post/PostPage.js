import { useState } from "react";
import "./PostPage.css";
import { Button, Upload } from "antd";

const PostPage = () => {

  const [tag, setTag] = useState([]);
  function handleKeyDown(e) {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTag([...tag, value]);
    e.target.value = "";
  }

  function removeTag(index) {
    setTag(tag.filter((el, i) => i !== index));
  }

  return (
    <>
    <aside className="post-ad"></aside>
      <section className="post">
        <Upload
          listType="picture"
          itemRender={(exCom, file) => {
            return <p style={{ textDecoration: "underline" }}>{file.name}</p>;
          }}
          className="dnd"
        >
          <div className="drop">
            <img
              src={require("../../assets/images/upload.png")}
              alt="Drag and Drop"
            />
          </div>
          <p style={{ textAlign: "center" }}>
            Drag and drop files here, or <br />
            <Button
              style={{
                fontSize: "14px",
                margin: "6px",
                color: "black",
                border: "1px solid rgb(151, 151, 151)",
              }}
            >
              click to select files
            </Button>
          </p>
        </Upload>
        <div className="det">
          <div className="post-det">
            <input className="p-ti" type="text" placeholder="Title" />
            <div className="tag-con">
              {tag.map((tag, index) => (
                <div className="tag" key={index}>
                  <span className="text">{tag}</span>
                  <span className="close" onClick={() => removeTag(index)}>
                    <img
                      src={require("../../assets/images/close.png")}
                      height={12}
                      width={12}
                      alt="delete tag"
                    />
                  </span>
                </div>
              ))}
              <input
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Add keywords..."
                className="tags-input"
              />
            </div>
            <button className="post-snd">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
