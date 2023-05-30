
function Article(props){
    return(
      <div className="article">
          <img className="article-img" src={props.src} alt="" />
          <span className="author-name">By {props.authorName}</span>
        <h3 className="article-heading">{props.heading}</h3>
        <p className="article-preview ">{props.paragraph}...</p>
      </div>
    )
}
export default Article;