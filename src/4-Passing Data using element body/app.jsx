class IssueList extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h1>Issue Tracker</h1>
          <hr />
          <IssueTable />
        </React.Fragment>
      );
    }
  }
class IssueTable extends React.Component {
    render() {
      const rowStyle = {border: "1px solid silver", padding: 4};
      return (
        <table style={{borderCollapse: "collapse"}}>
          <thead>
            <tr>
              <th style={rowStyle}>ID</th>
              <th style={rowStyle}>Title</th>
            </tr>
          </thead>
          <tbody>
            <IssueRow rowStyle={rowStyle} issue_id={1}> Error in console </IssueRow>
            <IssueRow rowStyle={rowStyle} issue_id={2}> <div>Missing <b>bottom</b> panel</div></IssueRow>
          </tbody>
        </table>
      );
    }
  }
  
  class IssueRow extends React.Component {
    render() {
      const style = this.props.rowStyle;
      return (
        <tr>
          <td style={style}>{this.props.issue_id}</td>
          <td style={style}>{this.props.children}</td>
        </tr>
      );
    }
  }
    
  const element = <IssueList />;
  
  ReactDOM.render(element, document.getElementById('container'));
  