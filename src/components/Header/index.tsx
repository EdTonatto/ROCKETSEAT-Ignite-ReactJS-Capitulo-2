import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoIgnite from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink to="/ROCKETSEAT-Ignite-ReactJS-Capitulo-2">
          <Timer size={24} />
        </NavLink>
        <NavLink to="ROCKETSEAT-Ignite-ReactJS-Capitulo-2/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
