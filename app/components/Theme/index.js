import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import CircularProgress from 'material-ui/CircularProgress';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const style = {
  button: {
    marginRight: 20,
    marginBottom: 20,
  },
  paper: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  }
};

export default class Theme extends React.Component {
  render(){
    return (
      <Container>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6}>
						<Paper style={style.paper}>
							<h2>Buttons</h2>
							<div>
								<FlatButton label="Default" />
								<FlatButton label="Primary" primary={true} />
								<FlatButton label="Secondary" secondary={true} />
								<FlatButton label="Disabled" disabled={true} />
							</div>
							<div>
								<RaisedButton label="Default" style={style.button} />
								<RaisedButton label="Primary" primary={true} style={style.button} />
								<RaisedButton label="Secondary" secondary={true} style={style.button} />
								<RaisedButton label="Disabled" disabled={true} style={style.button} />
							</div>

							<div>
								<FloatingActionButton style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
								<FloatingActionButton mini={true} style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
								<FloatingActionButton secondary={true} style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
								<FloatingActionButton mini={true} secondary={true} style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
								<FloatingActionButton disabled={true} style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
								<FloatingActionButton mini={true} disabled={true} style={style.button}>
									<ContentAdd />
								</FloatingActionButton>
							</div>
						</Paper>
					</Col>
          <Col xs={12} sm={6} md={3} lg={3}>
						<Paper style={style.paper}>
							<h2>Badges</h2>
							<Badge
								badgeContent={4}
								primary={true}>
									<NotificationsIcon />
							</Badge>
							<Badge
								badgeContent={10}
								secondary={true}
								badgeStyle={{top: 12, right: 12}}>
									<IconButton tooltip="Notifications">
										<NotificationsIcon />
									</IconButton>
							 </Badge>
						</Paper>
					</Col>

					<Col xs={12} sm={6} md={3} lg={3}>
						<Paper style={style.paper}>
							<h2>Card</h2>
							<Card>
									<CardHeader
									title="Without Avatar"
									subtitle="Subtitle"
									actAsExpander={true}
									showExpandableButton={true}/>
									<CardActions>
										<FlatButton label="Action1" />
										<FlatButton label="Action2" />
									</CardActions>
									<CardText expandable={true}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
										Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
										Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
									</CardText>
								</Card>
						</Paper>
					</Col>

					<Col xs={12} sm={6} md={3} lg={3}>
						<Paper style={style.paper}>
							<h2>Progress</h2>
							<CircularProgress />
						</Paper>
					</Col>

					<Col xs={12} sm={6} md={6}>
						<Paper style={style.paper}>
							<h2>List</h2>
							<List style={{width: 300}}>
								<Subheader>Nested List Items</Subheader>
								<ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
								<ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
								<ListItem
								primaryText="Inbox"
								leftIcon={<ContentInbox />}
								initiallyOpen={true}
								primaryTogglesNestedList={true}
								nestedItems={[
									<ListItem
										key={1}
										primaryText="Starred"
										leftIcon={<ActionGrade />}/>,
									<ListItem
										key={2}
										primaryText="Sent Mail"
										leftIcon={<ContentSend />}
										disabled={true}
										nestedItems={[
											<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
										]}/>,
									<ListItem
										key={3}
										primaryText="Inbox"
										leftIcon={<ContentInbox />}
										open={false}
										// onNestedListToggle={false}
										nestedItems={[
											<ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
										]}/>,
								 ]}
								/>
							</List>
          	</Paper>
					</Col>

					<Col xs={12} sm={6} md={6}>
						<Paper style={style.paper}>
							<h2>More Lists</h2>
							<List>
                <ListItem
                primaryText="When calls and notifications arrive"
                secondaryText="Always interrupt"/>
              </List>
              <Divider />
              <List>
                <Subheader>Priority Interruptions</Subheader>
                <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                <ListItem primaryText="Messages" rightToggle={<Toggle />} />
              </List>
              <Divider />
              <List>
                <Subheader>Hangout Notifications</Subheader>
                <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
              </List>
						</Paper>
					</Col>

					<Col xs={12} sm={12} md={12}>
						<Paper style={style.paper}>
							<h2>Table</h2>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHeaderColumn>ID</TableHeaderColumn>
										<TableHeaderColumn>Name</TableHeaderColumn>
										<TableHeaderColumn>Status</TableHeaderColumn>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableRowColumn>1</TableRowColumn>
										<TableRowColumn>John Smith</TableRowColumn>
										<TableRowColumn>Employed</TableRowColumn>
									</TableRow>
									<TableRow>
										<TableRowColumn>2</TableRowColumn>
										<TableRowColumn>Randal White</TableRowColumn>
										<TableRowColumn>Unemployed</TableRowColumn>
									</TableRow>
									<TableRow>
										<TableRowColumn>3</TableRowColumn>
										<TableRowColumn>Stephanie Sanders</TableRowColumn>
										<TableRowColumn>Employed</TableRowColumn>
									</TableRow>
									<TableRow>
										<TableRowColumn>4</TableRowColumn>
										<TableRowColumn>Steve Brown</TableRowColumn>
										<TableRowColumn>Employed</TableRowColumn>
									</TableRow>
								</TableBody>
							</Table>
						</Paper>
					</Col>

				</Row>
			</Container>
    );
  }
}

