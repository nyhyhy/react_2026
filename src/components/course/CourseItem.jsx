
function CourseItem({ title, description, thumbnail}) {

    return (
        <article className="course">
            <img className="course__img" src={thumbnail} alt="img" />
            <div className="course__body">
            <div className="course__title">{title}</div>
            <div className="course__description">{description}</div>
            </div>
        </article>
    );
}
export default CourseItem;