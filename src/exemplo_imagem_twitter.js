const TwitterAvatar = props =>
  <img src={'http://avatars.io/twitter/' + props.handle + '/medium'} />

const Profile = ({name, handle}) =>
  <div>
    <h1>{name}</h1>
  <TwitterAvatar handle={handle} />
  </div>

ReactDOM.render(
  <Profile name='Diogo Machado' handle='betterthaboss' />,
  document.getElementById('root'));
