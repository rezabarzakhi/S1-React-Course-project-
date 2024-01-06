function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img
          src={course.imageUrl}
          alt={course.title}
        />
      </div>
      <div className="course-item__detail">
        <CourseCardBody
          description={course.description}
          title={course.title}
          rate={course.rate}
        />
        <CourseCardFooter
          tags={course.tags}
          status={course.status}
        />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ description, title, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseCardFooter({ tags, status }) {
  const startedAt = new Date().toLocaleDateString("en-us", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge badge--secondary">
            {tag}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{startedAt}</div>
        <span
          className={`badge ${
            status == "Active" ? " badge--primary" : status == "Upcoming" ? "badge--danger" : "badge--secondary"
          }`}>
          {status}
        </span>
      </div>
    </div>
  );
}
