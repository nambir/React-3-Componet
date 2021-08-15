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
 
  const newIssue = {
    status: 'New', owner: 'Pieta',
    title: 'Completion date should be optional',
  };

class IssueTable extends React.Component {
    constructor() {
      super();
      this.state = { issues: [] };
      setTimeout(() => {
        this.createIssue( Object.assign(newIssue));
      }, 5000);
    }    
    createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.created = new Date();
      const newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({ issues: newIssueList });
    }

    componentDidMount() {
      this.loadData();
    }
  
    loadData() {
      setTimeout(() => {
        this.setState({ issues: initialIssues });
      }, 2000);
    }
  
    render() {
      
      const issueRows = this.state.issues.map(issue =>
        <IssueRow key={issue.id} issue={issue} />
      );
  
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
            {issueRows}
          </tbody>
        </table>
      );
    }
  }
  
class IssueRow extends React.Component {
    render() {
      console.log('Inside IssueRow render');
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

const initialIssues = [
    {
      id: 1, status: 'New', owner: 'Ravan', effort: 5,
      created: new Date('2018-08-15'), due: undefined,
      title: 'Error in console when clicking Add',
    },
    {
      id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
      created: new Date('2018-08-16'), due: new Date('2018-08-30'),
      title: 'Missing bottom border on panel',
    },
  ];
  

 
  const element = <IssueList />;
  
  ReactDOM.render(element, document.getElementById('container'));
  


