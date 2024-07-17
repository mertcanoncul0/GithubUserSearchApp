export function UserCardSkeleton() {
  return (
    <div className="skeleton-card">
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            className="skeleton skeleton-circle"
            style={{ width: "70px", height: "70px" }}
          ></div>
          <ul>
            <li
              className="skeleton skeleton-text"
              style={{ width: "150px" }}
            ></li>
            <li
              className="skeleton skeleton-text"
              style={{ width: "100px" }}
            ></li>
            <li
              className="skeleton skeleton-text"
              style={{ width: "120px" }}
            ></li>
          </ul>
        </div>
        <p
          className="skeleton skeleton-text"
          style={{ height: "48px", width: "100%" }}
        ></p>
        <ul className="skeleton-info">
          <li>
            <p className="skeleton skeleton-text" style={{ width: "50px" }}></p>
            <span
              className="skeleton skeleton-text"
              style={{ width: "30px" }}
            ></span>
          </li>
          <li>
            <p className="skeleton skeleton-text" style={{ width: "50px" }}></p>
            <span
              className="skeleton skeleton-text"
              style={{ width: "30px" }}
            ></span>
          </li>
          <li>
            <p className="skeleton skeleton-text" style={{ width: "50px" }}></p>
            <span
              className="skeleton skeleton-text"
              style={{ width: "30px" }}
            ></span>
          </li>
        </ul>
        <ul>
          <li
            className="skeleton skeleton-text"
            style={{ width: "200px" }}
          ></li>
          <li
            className="skeleton skeleton-text"
            style={{ width: "200px" }}
          ></li>
          <li
            className="skeleton skeleton-text"
            style={{ width: "200px" }}
          ></li>
          <li
            className="skeleton skeleton-text"
            style={{ width: "200px" }}
          ></li>
        </ul>
      </div>
    </div>
  )
}
