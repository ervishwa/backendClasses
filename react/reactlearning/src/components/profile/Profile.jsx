const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
export const Profile = ()=>{
    return(
      <>
      {user.name}
      <img src={user.imageUrl} alt="" style={{height : user.imageSize , width : user.imageSize}}/>
      </>
    )
}