import { Fragment } from "react";
import Card from "../Card";
import CourseItem from "./CourseItem";

function CourseListCard({ title, items }) {

    //const [course1, course2, course3] = items;
    let lastIndex = items.length - 1;

    return (
        <>
            <Card title={title}>
                <div className="courses">
                    {/* <CourseItem {...course1} />
                    <CourseItem {...course2} />
                    <CourseItem {...course3} /> */}
                    {/* {items.map((item) => {
                        return <CourseItem {...item} />
                    })} */}
                    {/* {items.map(item => <CourseItem key={item.id} {...item}/> )} */}
                    { items.map((item, index) => (
                        <Fragment key={item.id}>
                            <CourseItem  {...item}/>
                            { index !== lastIndex && <hr className="divider" />}
                        </Fragment>
                    ))}
                 </div>
            </Card>
        </>
    );
}

export default CourseListCard;