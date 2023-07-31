const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    src: 'https://imgur.com/MK3eW3As.jpg'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    src: 'https://imgur.com/mynHUSas.jpg'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism',
     src: 'https://imgur.com/bE7W1jis.jpg'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    src: 'https://imgur.com/IOjWm71s.jpg'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    src: 'https://imgur.com/lrWQx8ls.jpg'
  }];

  
export const Temp = ()=>{
    return(
        <>
        {
            people.map((person)=>{
                return(
                    <div>
                        <img src={person.src} alt="" />
                        <h1>{person.name}</h1>
                        <p>{person.profession}{person.accomplishment}</p>
                    </div>
                )
            })
        }
        </>
    )
}