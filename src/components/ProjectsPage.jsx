import React, { Component } from "react";

class ProjectsPage extends Component {
  render() {
    return (
      <div className="ProjectsPage">
        <h1>
          <span className="quotes">"</span>
          PROJECTS
          <span className="quotes">"</span>
        </h1>
        <a
          href="https://devpost.com/software/monitaur?flow%5Bdata%5D%5Binvitation_key%5D=2wafdyh6UyM9bHzrBYgq&flow%5Bname%5D=accept_software_invitation&ref_content=new_user_added_to_software_team&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=invitation_to_join_software_team&utm_medium=email&utm_source=transactional"
          target="blank"
        >
          <h2>Monitaur (2019)</h2>
        </a>
      </div>
    );
  }
}

export default ProjectsPage;
