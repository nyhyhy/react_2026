function HeartIconBtn({ifFavorite = false}) {
    // if(!ifFavorite) {
    //     return (
    //         <button className="btn">
    //             <img className="icon-heart" src="/img/heart-icon.svg" />
    //         </button>
    //     );
    // }
    // return (
    //     <button className="btn">
    //         <img className="icon-heart" src="/img/heart-fill-icon.svg" />
    //     </button>
    // )

    return (
        <button className="btn">
            {/* {ifFavorite ? (
                <img className="icon-heart" src="/img/heart-fill-icon.svg" />
            ) : (
                <img className="icon-heart" src="/img/heart-icon.svg" />
            )} */}
            {/* <img className="icon-heart" src={ifFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}  /> */}
            <img className="btn__img" src={ifFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}  />
        </button>
    )
}

 const LinkIconBtn = ( {link} ) => {
    return (
        <a className="btn" href={link} target="_blank" rel="noreferrer">
            <img className="btn__img" src="/img/link-icon.svg" alt="" />
        </a>
    )
 }

function CourseItem({ title, description, thumbnail, ifFavorite, link}) {

    return (
        <article className="course">
            <img className="course__img" src={thumbnail} alt="img" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className="course__icons">
                <HeartIconBtn ifFavorite={ifFavorite}></HeartIconBtn>
                { link && <LinkIconBtn link={link} />}
            </div>
        </article>
    );
}
export default CourseItem;