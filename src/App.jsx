import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoreCard from './components/StoreCard'
import NavBar from './components/NavBar'

function App() {
  const locations = [
    {
      title: 'Hoover Hall',
      link: 'https://www.depauw.edu/virtual-tour/location/43/',
      description: 'Hoover Dining Hall is located in the center of campus',
    },
    { 
      title: 'Julian Hall',
      link: ' https://www.depauw.edu/virtual-tour/location/13/',
      description: 'Julian houses classrooms, laboratories and offices for the departments of chemistry, physics and astronomy, geology and environmental geosciences.This is a description of product 2.',
    },
    {
      title: 'Green Center for the Performing Arts',
      link:'https://www.depauw.edu/arts-and-culture/arts/greencenter/',
      description: 'The Green Center Box Office is located in the Great Hall of the Judson and Joyce Green Center for the Performing Arts ',
    },
    {
      title: 'Peeler Art Center',
      link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.depauw.edu/academics/centers/the-richard-e-peeler-art-cente/&ved=2ahUKEwjFuojD4dqIAxWckokEHRESCdMQFnoECDEQAQ&usg=AOvVaw21R_U2j0LeyCqPiieWQEAL ',
      description: 'the Peeler Art Center at DePauw University presents a wide range of exhibitions and related programming in its three spacious galleries.',
    },
    {
      title: 'Memorial Student Union',
      link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.depauw.edu/virtual-tour/location/22/&ved=2ahUKEwi758DP4dqIAxUfDHkGHXoeN8EQFnoECBkQAQ&usg=AOvVaw0wd30krhagNFXaylJSGfVY',
      description: 'The Memorial Student Union Building (UB) serves as a social center, offering recreational opportunities, cultural programs, social events and meeting space.',
      
    },
    {
      title: 'Roy O West',
      link:'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.depauw.edu/libraries/&ved=2ahUKEwjP2o3a4dqIAxWgj4kEHTH3HsAQFnoECDYQAQ&usg=AOvVaw1ibuLc7EnJkhbBx4uksl5_',
      description: 'Discover a transformative learning environment that empowers you to be influential; to make a tangible difference on a global scale.',
    },
    {
      title: 'The Lilly Center',
      link:'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://depauwtigers.com/sports/2022/5/26/facilities-Lilly-PERC.aspx&ved=2ahUKEwiO7eDg4dqIAxXIk4kEHRExDVsQFnoECAkQAQ&usg=AOvVaw1GOpE_9g0X6PlUG0kaF--x',
      description: 'The Lilly Center is the Universitys primary indoor fitness and recreation facility, and serves as the competition home for basketball, swimming and diving',
    },
    {
      title: 'Olin Biological Sciences',
      link:'https://www.depauw.edu/virtual-tour/location/19/',
      description: 'Olin features subject-area laboratories – including anatomy and physiology, animal biology, botany, genetics, environmental sciences and microbiology',
    },
    {
      title: 'First-year Dorms',
      link:'https://www.depauw.edu/studentaffairs/campusliving/clcd/firstyearcommunities/',
      description: 'Housing for first year',
     
    },
    {
      title: 'Rector Village',
      link:'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.depauw.edu/studentaffairs/campusliving/clcd/sophomorecommunities/sophomore-junior-and-senior-communities/&ved=2ahUKEwj8qPCJ4tqIAxUrmokEHTToFfsQFnoECCAQAQ&usg=AOvVaw1x5wGzX7YzcBfEWsqKE79t ',
      description: 'Housing in Rector Village',
    },
  ];


  return (
    <> 
      <NavBar></NavBar>
      <div className='card-collection'>
          {locations.map((location, index) => (
            <StoreCard title = {location.title} description = {location.description} link = {location.link}
            />
          ))}
      </div>

    </>
    
  );
}

export default App
