import styled from 'styled-components'
const HomeStyle=styled.div`
.mainContainer{
    display:flex;
}
.plane {
    margin: 20px auto;
    max-width: 300px;
  }
  .busCart{
      height:200px;
      background:white;
      border-radius:7px;
      margin: 20px auto;
      margin-bottom:10px;
      margin-left:10px;


      .Confirm{
          width:100px;
          cursor:pointer;
          padding: 7px;
          line-height: 1.5;
          background:blue;
          border-radius:7px;
          text-align:center;
          color:#fff;
      }
      .selectHeader{
          font-size:20px;
          color:#000;
          opacity:0.8;
      }
  }
  .SelectedSets{
      height:30px;
      width:30px;
      background:#db6928;
      text-align:center;
      margin:2px;
      padding: 5px;
      position: relative;
      border-radius:3px;

  }
  
  ol {
    list-style :none;
    padding: 0;
    margin: 0;
  }  
  .seats {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;  
  }
  
  .seat {
    display: flex;
    flex: 0 0 14.28571428571429%;
    padding: 5px;
    position: relative;  
    &:nth-child(3) {
      margin-right: 14.28571428571429%;
    }
    input[type=checkbox] {
      position: absolute;
      opacity: 0;
    }
    input[type=checkbox]:checked {
      + label {
        background: #db6928;      
        -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
        animation-duration: 300ms;
        animation-fill-mode: both;
      }
    }
    input[type=checkbox]:disabled {
      + label {
        background: #dddddd;
        text-indent: -9999px;
        overflow: hidden;
        &:after {
          content: "X";
          text-indent: 0;
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translate(-50%, 0%);
        }
        &:hover {
          box-shadow: none;
          cursor: not-allowed;
        }
      }
    }
    label {    
      display: block;
      position: relative;    
      width: 100%;    
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.5rem;
      padding: 4px 0;
      background: #c5b0b2;
      border-radius: 5px;
      animation-duration: 300ms;
      animation-fill-mode: both;
      
      &:before {
        content: "";
        position: absolute;
        width: 75%;
        height: 75%;
        top: 1px;
        left: 50%;
        transform: translate(-50%, 0%);
        background: rgba(255,255,255,.4);
        border-radius: 3px;
      }
      &:hover {
        cursor: pointer;
      }
      
    }
  }
  
  @-webkit-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }
  
    100% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  
  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
              transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
              transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
              transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      -webkit-transform: scale3d(.95, 1.05, 1);
              transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      -webkit-transform: scale3d(1.05, .95, 1);
              transform: scale3d(1.05, .95, 1);
    }
  
    100% {
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
  }
  
  .rubberBand {
    -webkit-animation-name: rubberBand;
            animation-name: rubberBand;
  }
`;
// const HomeStyle = styled.div `
// .mainContener{
//     background:#fff;
//     margin: 20px auto;
//     width: 60%;
//     border-radius: 7px;
//     position: relative;
//     height: 300px; //calc(100% - 100px);
//     display:flex;

//     -webkit-box-shadow: -3px 3px 9px -5px rgba(0,0,0,0.75);
//     -moz-box-shadow: -3px 3px 9px -5px rgba(0,0,0,0.75);
//     box-shadow: -3px 3px 9px -5px rgba(0,0,0,0.75);

//     .busContener{
//         height:100%;
//         width:60%;

//         .busHeader{
//           color:#bbb;
//           margin:15px 0px;
//         }
//         .busSeats{
//             display:flex;
//             // flex-direction: row;
//             // flex-wrap: nowrap;
//             // justify-content: flex-start;  

//             .busterCards{
//                 height:50px;
//                 width:50px;
//                 background:red;
//             }
//         }
//     }
//     .cardContener{
//         background:yellow;
//         height:100px;
//         width:40%;

//         .cartHeader{
//             color:#bbb;
//             margin:15px 0px;
//         }
//     }
// }
// `;
export default HomeStyle;