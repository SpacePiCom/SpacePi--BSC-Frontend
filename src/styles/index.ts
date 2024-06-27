import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    -moz-tap-highlight-color: transparent;
    -ms-tap-highlight-color: transparent;
  
    /* 滚动条的轨道 */
    &::-webkit-scrollbar-track {
      background-color: #222; /* 滚动条轨道背景颜色 */
      margin:6px 0;
    }

    /* 滚动条 */
    &::-webkit-scrollbar {
      width: 6px; /* 滚动条的宽度 */
      background-color: #111; /* 滚动条的背景颜色 */
    }

    /* 滚动条滑块 */
    &::-webkit-scrollbar-thumb {
      background-color: #fdd333; /* 滑块的背景颜色 */
      border-radius: 6px; /* 滑块的圆角 */
      
    }

    
  }

  .ant-collapse-header{
    align-items: center !important;
  }

  a{
    color:#fff !important;
  }

  .pi-color{
    background-image: linear-gradient(90deg, #fdd333 0%, #faad14 100%);
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  .ant-dropdown{
    padding-top: 26px;
    .ant-dropdown-menu{
      min-width: 10rem;
      padding: 12px 8px;
      margin: 0.125rem 0 0;
      background-color: #413710;
      border-radius: 0 0 8px 8px;
      border-top: 2px solid #fdd333;
      .ant-dropdown-menu-item{
        padding: 12px 22px 12px 22px;
        background-color: #413710 !important;
      }
    }
  }
  .ant-collapse-content-box{
    display: grid;
    gap: 16px;
    height: min-content;
  }
  .title {
    font-size: 26px;
    font-family: EDIX !important;
    color: #fff;
  }
  .eth-color {
    color: #fdd333;
  }
  

  .lang{
    .ant-dropdown-menu{
      max-height: 300px;
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
`

export const W1400 = styled.div`
  max-width: 1400px;
  width: -webkit-fill-available;
  padding: 0 16px;
`

export const P166 = styled.div`
  padding: 0 126px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 0 36px;
  }
`

export const TextContainerBox = styled.div`
  display: grid;
  height: min-content;
  gap: 16px;
`
