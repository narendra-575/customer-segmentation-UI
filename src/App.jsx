
import Section1 from './componenet/section1/section1'
import Section2 from './componenet/section2/section2'

const App = () => {


  const user = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A software engineer working at a growing technology company, earning a stable income while managing personal expenses and exploring professional growth opportunities.',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1675272833807-fb6d8293210c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A dedicated school teacher earning a regular salary, managing household expenses, supporting her family, and planning savings for future financial security.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A small clothing business owner serving customers and managing daily operations, but struggling to access affordable loans for business expansion.',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1590649917466-06e6e1c3e92d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A freelance professional working with multiple clients, earning through projects but facing financial uncertainty because of irregular monthly income.',
      tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661719962300-6963d242ca50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A domestic worker employed in multiple households, earning daily wages and receiving mostly cash payments, with limited access to financial services.',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661638162972-00ee1c6822d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A healthcare professional working at a private hospital, receiving a fixed salary, managing personal finances, and supporting patients.',
      tag: 'Underserved',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661503290626-323f78a47c09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A street vendor running her own vegetable stall, serving local customers daily, earning through cash transactions, and managing household expenses.',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1714655439633-2dddeecd0694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A home-based beauty professional serving local customers and earning independently, but facing challenges accessing affordable credit and financial support.',
      tag: 'Underbanked',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A private bank employee earning a regular salary, using digital banking services, managing savings, and accessing convenient financial products.',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1664476963433-446068936967?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro: 'A home-based tailor creating customized clothing, earning through customer orders, but having limited access to banking facilities and financial opportunities.',
      tag: 'Underserved',
    }
  ];


  return (
    <div className='hero'>
      <Section1 user={user} />
      <Section2 />
    </div>
  )
}

export default App
