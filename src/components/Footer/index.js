import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.primary};
  transition: color 0.8s ease-in-out; /* Smooth color transition on hover */
   @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    font-size: 20px;
  }
`;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(1.2);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out, transform 0.5s ease, scale 0.2s ease; 
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(360deg) scale(2.5); 
  }
`;
const RightsNotice = styled.div`
  color: #fff;
  text-align: center;
  font-size:14px;
  margin-top:10px;
  @media (max-width: 768px) {
   font-size:8px;
  }
`;

const NoticeText = styled.p`
  margin: 0;
`;



function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Dhinesh Kumar Sankar</Logo>

        <SocialMediaIcons>
          <SocialMediaIcon href= "mailto:dhinesh270521@gmail.com" target="display"><EmailIcon/></SocialMediaIcon>
          <SocialMediaIcon href= "http://www.linkedin.com/in/dhineshkumar-sd" target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href= "tel:+91 0123456789" target="display"><PhoneIcon/></SocialMediaIcon>
          <SocialMediaIcon href= "https://wa.me/0123456789" target="display"><WhatsAppIcon /></SocialMediaIcon>
        </SocialMediaIcons>
       
        {/* <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav> */}
        <RightsNotice>
      <NoticeText>Copyright &copy; 2024 | Dhinesh Kumar shankar | All Rights Reserved </NoticeText>
    </RightsNotice>
      </FooterWrapper>
    </FooterContainer>
  );
}
export default Footer;
