import React,{Component} from 'react';
import FooterBlock from './../FooterBlock/footerBlock.js';
import './footer.css';
export default class Footer extends Component{
  render(){
    return(
      <div>
        <FooterBlock />
        <footer className='footer'>
          <div className="footertext">
            &copy;2016-2018 ReactNews版权所有 、  工信部备案： 蜀ICP备15019614号

            <span className="support">技术支持： 小栈程序</span>
          </div>
        </footer>
      </div>

    )
  }
}
