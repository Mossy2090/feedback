import Card from "../shared/Card";
import Header from "../Header";
import HomeIconLink from "../HomeIconLink";

function AboutPage() {
  return (
    <div className="div">
      <Header />

      <div className="container">
        <Card>
          <div className="about">
            <h1>About this page</h1>
            <p>
              This is a react App to leave feedback for a product or a service
            </p>
            <p>Version 1.0.0</p>
            <HomeIconLink />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
