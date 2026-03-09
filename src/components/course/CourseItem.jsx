function HeartIconBtn({onClick, isFavorite = false}) {
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

    // function handleFavorite() {
    //     alert(isFavorite ? '좋아요' : '모르겠어요');
    // }

    return (
        // <button className="btn" onClick={onClick}>
        <button className="btn" onClick={(e) => onClick(e)}>
            {/* {isFavorite ? (
                <img className="icon-heart" src="/img/heart-fill-icon.svg" />
            ) : (
                <img className="icon-heart" src="/img/heart-icon.svg" />
            )} */}
            {/* <img className="icon-heart" src={ifFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}  /> */}
            <img className="btn__img" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}  />
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

function CourseItem({ id, title, description, thumbnail, isFavorite, link, onFavorite}) {

    function handleFavorite(e) {
        console.log(e);
        e.stopPropagation();
        //alert(isFavorite ? '좋아요' : '모르겠어요');
        onFavorite(id, !isFavorite);
    }

    function handleItemClick(e) {
        e.stopPropagation();
        //alert('item Click!');
        open(link, '_blank');
    }

    return (
        <article className="course" onClick={handleItemClick}>
            <img className="course__img" src={thumbnail} alt="img" />
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
            <div className="course__icons">
                <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite}></HeartIconBtn>
                { link && <LinkIconBtn link={link} />}
            </div>
        </article>
    );
}
export default CourseItem;