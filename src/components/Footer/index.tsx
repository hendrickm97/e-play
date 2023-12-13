import { Container, SectionTitle, Link, Links, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link>RPG</Link>
          <Link>AÇÃO</Link>
          <Link>AVENTURA</Link>
          <Link>ESPORTES</Link>
          <Link>SIMULAÇÃO</Link>
          <Link>ESTRATEGIA</Link>
          <Link>FPS</Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Link>NOVIDADES</Link>
          <Link>PROMOCOES</Link>
          <Link>EM BREVE</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
