import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/7773744/pexels-photo-7773744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem lpson dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Joseph</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Deserunt officia culpa eiusmod fugiat ut proident reprehenderit nisi
          consequat pariatur esse sunt eiusmod. Velit duis do irure consequat
          aliqua proident fugiat anim et ullamco. Officia officia elit Lorem
          tempor. Aliqua velit elit id labore ad reprehenderit pariatur nostrud.
          Dolore dolore aliqua consectetur in magna anim elit. Ex id occaecat
          sunt fugiat occaecat exercitation sit labore. Incididunt incididunt
          nisi quis elit in. Consequat commodo minim proident eiusmod do quis
          Lorem nulla. Lorem commodo minim ut irure ipsum dolore amet fugiat non
          labore officia ut laborum. Anim id Lorem dolor amet voluptate quis
          mollit adipisicing esse ut do. Labore nostrud exercitation pariatur in
          in cillum reprehenderit ipsum excepteur magna elit. In do consequat
          ullamco sint ullamco consectetur exercitation nostrud. Aute ipsum sunt
          ipsum irure velit consectetur. sunt fugiat occaecat exercitation sit
          labore. Incididunt incididunt nisi quis elit in. Consequat commodo
          minim proident eiusmod do quis Lorem nulla. Lorem commodo minim ut
          irure ipsum dolore amet fugiat non labore officia ut laborum. Anim id
          Lorem dolor amet voluptate quis mollit adipisicing esse ut do. Labore
          nostrud exercitation pariatur in in cillum reprehenderit ipsum
          excepteur magna elit. In do consequat ullamco sint ullamco consectetur
          exercitation nostrud. Aute ipsum sunt ipsum irure velit consectetur.
        </p>
      </div>
    </div>
  );
}
