import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shifatur Rahman</h4>
      <h4>Copyright &copy; 2023 Shifatur</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Shifatur-Rahman" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shifatur-rahman-novel/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:shifaturnovel@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/Shifatur_Rahman/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer