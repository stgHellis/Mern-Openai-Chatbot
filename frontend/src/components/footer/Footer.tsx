import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center", padding: "20px" }}>
          Copyright
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://stghellis.com"}
            >
              stgHellis.com
            </Link>
          </span>
          - Créé par Etienne AKE.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
