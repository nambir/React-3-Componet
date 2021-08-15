const issueArray = [
    {
      id: 1, status: 'New', owner: 'Ravan', effort: 5,
      created: new Date('2018-08-15'), due: undefined,
      title: 'Error in console',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
      created: new Date('2018-08-16'), due: new Date('2018-08-30'),
      title: 'Missing bottom panel',
    },
  ];
 
class IssueList extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h1>Issue Tracker</h1>
          <IssueTable />
        </React.Fragment>
      );
    }
  }

class IssueTable extends React.Component {
    render() {
      //const issueRows = issueArray.map(issue => <IssueRow key={issue.id} issue={issue} /> );
  
      return (
        <table className="bordered-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Created</th>
              <th>Effort</th>
              <th>Due Date</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {issueArray.map(issue => <IssueRow key={issue.id} issue={issue} /> )}
          </tbody>
        </table>
      );
    }
  }

class IssueRow extends React.Component {
    render() {
      const issue = this.props.issue;
      return (
        <tr>
          <td>{issue.id}</td>
          <td>{issue.status}</td>
          <td>{issue.owner}</td>
          <td>{issue.created.toDateString()}</td>
          <td>{issue.effort}</td>
          <td>{issue.due ? issue.due.toDateString() : ''}</td>
          <td>{issue.title}</td>
        </tr>
      );
    }
  }
      
  const element = <IssueList />;  
  ReactDOM.render(element, document.getElementById('container'));
  