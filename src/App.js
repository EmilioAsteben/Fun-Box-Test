import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import defaultPic from './images/default.png';
import disabled from './images/disabled.png';
import defaultHover from './images/defaultHover.png';
import selected from './images/selected.png';
import selectedHover from './images/selectedHover.png';

class App extends Component {

  state = {

  /*  Инициализация состояний для изображений (default, selected и т.д)
  
    Чтобы сделать элемент недоступным для выбора, нужно значение "defaultPic"
    изменить на "disabled"
    */



    CatFood_1: defaultPic ,
    CatFood_2: defaultPic ,
    CatFood_3: defaultPic ,
    

    // Состояния, регулирующие применение hover после ухода с элемента
    SelectOut_1: false ,
    SelectOut_2: false ,
    SelectOut_3: false ,

  }







      //Блок функций, регулирующих события ухода с элемента

       CatFoodOut_1 = () => {
    if(this.state.CatFood_1 !== selected && this.state.CatFood_1 !== disabled ) {
      this.CatFoodUnselect_1();
      
      } else if (this.state.CatFood_1 === selected && this.state.CatFood_1 !== disabled){
        this.setState({SelectOut_1: true})
      }
}

  CatFoodOut_2 = () => {
    if(this.state.CatFood_2 !== selected && this.state.CatFood_2 !== disabled) {
      this.CatFoodUnselect_2()

      } else if (this.state.CatFood_2 === selected && this.state.CatFood_2 !== disabled){
        this.setState({SelectOut_2: true})
      }
      
}


  CatFoodOut_3 = () => {
    if(this.state.CatFood_3 !== selected && this.state.CatFood_3 !== disabled) {
      this.CatFoodUnselect_3()
      } else if (this.state.CatFood_3 === selected && this.state.CatFood_3 !== disabled){
        this.setState({SelectOut_3: true})
      }
      
}



//Блок функций, регулирующих события выбора элемента и его отклонения

  CatFoodSelect_1 = () => {
    

      this.setState ({CatFood_1:selected });

  }

    CatFoodUnselect_1 = () => {
    
      if ( this.state.CatFood_1 !== selectedHover && this.state.CatFood_1 !== disabled) {
      this.setState ({CatFood_1:defaultPic });

    } else if (this.state.CatFood_1 !== disabled) {
      this.setState ({CatFood_1:selected });
  }
      

} 

      CatFoodSelect_2 = () => {
    

      this.setState ({CatFood_2:selected });

  }

    CatFoodUnselect_2 = () => {
    
      if ( this.state.CatFood_2 !== selectedHover && this.state.CatFood_2 !== disabled) {
      this.setState ({CatFood_2:defaultPic });

    } else if (this.state.CatFood_2 !== disabled) {
      this.setState ({CatFood_2:selected });
  }
      

} 
  

    CatFoodSelect_3 = () => {
    

      this.setState ({CatFood_3:selected });

  }

     CatFoodUnselect_3 = () => {
    
      if ( this.state.CatFood_3 !== selectedHover && this.state.CatFood_3 !== disabled) {
      this.setState ({CatFood_3:defaultPic });

    } else if (this.state.CatFood_3 !== disabled) {
      this.setState ({CatFood_3:selected });
  }
      

} 
  
  

  CatFoodChoise_1 = () => {
    if(this.state.CatFood_1 !== selected && this.state.CatFood_1 !== disabled  && this.state.CatFood_1 !== selectedHover)  {
      this.CatFoodSelect_1()
    } else  {
      this.CatFoodUnselectChoise_1()
    }

  } 

  CatFoodUnselectChoise_1 = () => {
    if (this.state.CatFood_1 === selected || this.state.CatFood_1 === selectedHover){
      this.setState({CatFood_1: defaultPic})
      this.setState({SelectOut_1: false})

    } 

  }

   CatFoodChoise_2 = () => {
    if(this.state.CatFood_2 !== selected && this.state.CatFood_2 !== disabled && this.state.CatFood_2 !== selectedHover)  {
      this.CatFoodSelect_2();
    } else  {
      this.CatFoodUnselectChoise_2()
    }

  }

  CatFoodUnselectChoise_2 = () => {
    if (this.state.CatFood_2 === selected || this.state.CatFood_2 === selectedHover){
      this.setState({CatFood_2: defaultPic})
      this.setState({SelectOut_2: false})
    } 

  }

    CatFoodChoise_3 = () => {
    if(this.state.CatFood_3 !== selected && this.state.CatFood_3 !== disabled  && this.state.CatFood_3 !== selectedHover)  {
      this.CatFoodSelect_3()
    } else  {
      this.CatFoodUnselectChoise_3()
    }

  }

  CatFoodUnselectChoise_3 = () => {
    if (this.state.CatFood_3 === selected || this.state.CatFood_3 === selectedHover){
      this.setState({CatFood_3: defaultPic})
      this.setState({SelectOut_3: false})
    } 

  }


//Блок функций, регулирующих события наведения на элемент

  CatFoodHover_1 = () => {
   if ( this.state.SelectOut_1 === false && this.state.CatFood_1 !== selected && this.state.CatFood_1 !== disabled && this.state.CatFood_1 !== selectedHover  ) {
      this.setState ({CatFood_1:defaultHover})
  } else if ( this.state.CatFood_1 === selected && this.state.CatFood_1 !== disabled && this.state.SelectOut_1 === true ) {
    this.setState ({CatFood_1: selectedHover})
  } 

}

  CatFoodHover_2 = () => {
   if ( this.state.SelectOut_2 === false && this.state.CatFood_2 !== selected && this.state.CatFood_2 !== disabled && this.state.CatFood_2 !== selectedHover  ) {
      this.setState ({CatFood_2:defaultHover})
  } else if ( this.state.CatFood_2 === selected && this.state.CatFood_2 !== disabled && this.state.SelectOut_2 === true ) {
    this.setState ({CatFood_2: selectedHover})
  } 

}

   CatFoodHover_3 = () => {
   if ( this.state.SelectOut_3 === false && this.state.CatFood_3 !== selected && this.state.CatFood_3 !== disabled && this.state.CatFood_3 !== selectedHover  ) {
      this.setState ({CatFood_3:defaultHover})
  } else if ( this.state.CatFood_3 === selected && this.state.catFood_3 !== disabled && this.state.SelectOut_3 === true ) {
    this.setState ({CatFood_3: selectedHover})
  } 

}

//Блок функций, регулирующих смену подписей под элементом в зависимости от состояния выбора

UnderImg_1 = () => {
  if (this.state.CatFood_1 === defaultPic || this.state.CatFood_1 === defaultHover ) {

    return (

      <div className = "underImg_1"> Чего сидишь? Порадуй котэ, <span 
           onMouseOver = {() => {this.CatFoodHover_1()}}
           onMouseLeave  = {() => {this.CatFoodOut_1()}}
           onClick     = {() => {this.CatFoodChoise_1(); }}>
      купи.
      </span> 
      </div>
      )

  } else if (this.state.CatFood_1 === selected || this.state.CatFood_1 === selectedHover) {

    return (

      <div className = "underImg_1_selected"> Печень утки разварная с артишоками. </div>
     )

  } else {

    return (

      <div className = "underImg_1_disabled"> Печалька, с фуа-гра закончился. </div>
      )
  }

}

UnderImg_2 = () => {
  if (this.state.CatFood_2 === defaultPic || this.state.CatFood_2 === defaultHover ) {

    return (

      <div  className = "underImg_2"> Чего сидишь? Порадуй котэ, <span 
           onMouseOver = {() => {this.CatFoodHover_2()}}
           onMouseLeave  = {() => {this.CatFoodOut_2()}}
           onClick     = {() => {this.CatFoodChoise_2(); }}>
      купи.
      </span> 
      </div>
      )

  } else if (this.state.CatFood_2 === selected || this.state.CatFood_2 === selectedHover) {

    return (

      <div className = "underImg_2_selected"> Головы щучьи с чесноком да свежайшая сёмгушка. </div>
     )

  } else {

    return (

      <div className = "underImg_2_disabled"> Печалька, с рыбой закончился. </div>
      )
  }

}

UnderImg_3 = () => {
  if (this.state.CatFood_3 === defaultPic || this.state.CatFood_3 === defaultHover ) {

    return (

      <div className = "underImg_3"> Чего сидишь? Порадуй котэ, <span 
           onMouseOver = {() => {this.CatFoodHover_3()}}
           onMouseLeave  = {() => {this.CatFoodOut_3()}}
           onClick     = {() => {this.CatFoodChoise_3(); }}>
      купи.
      </span> 
      </div>
      )

  } else if (this.state.CatFood_3 === selected || this.state.CatFood_3 === selectedHover) {

    return (

      <div className = "underImg_3_selected"> Филе из цыплят с трюфелями в бульоне. </div>
     )

  } else {

    return (

      <div className = "underImg_3_disabled"> Печалька, с курой закончился. </div>
      )
  }

}

//Блок функций, устанавливающих классы для элементов при состоянии disabled

disabled_1 = () => {

  if (this.state.CatFood_1 === disabled) {
    return "disabled"
  }

}

disabled_2 = () => {

  if (this.state.CatFood_2 === disabled) {
    return "disabled"
  }

}

disabled_3 = () => {

  if (this.state.CatFood_3 === disabled) {
    return "disabled"
  }

}





  render() {
    return (

<div className = "wrapper" >
      <h2>Ты сегодня покормил кота?</h2>

      
      
  <div className = "first_description"

           onMouseOver = {() => {this.CatFoodHover_1()}}
           onMouseLeave  = {() => {this.CatFoodOut_1()}}
           onClick     = {() => {this.CatFoodChoise_1(); }}
       >
      <div className = {this.disabled_1()}>
      <h3>с фуа-гра</h3>
      <div className = "description">
      <p><b>10</b> порций</p>
      <p>мышь в подарок</p>
      <div className = "weight_1"> 0,5
      <div>кг</div>
      </div>
     
      </div>
  </div>
      

      <img src={this.state.CatFood_1} alt = "" />
      

      
</div>
{this.UnderImg_1()}
         
  <div className = "second_description"

           onMouseOver = {() => {this.CatFoodHover_2()}}
           onMouseLeave  = {() => {this.CatFoodOut_2()}}
           onClick     = {() => {this.CatFoodChoise_2(); }}
       >
      <div className = {this.disabled_2()}>
      <h3>с рыбой</h3>
      <div className = "description">
      <p><b>40</b> порций</p>
      <p><b>2</b> мыши в подарок</p>
      <div className = "weight_2"> 2
      <div>кг</div>
      </div>
      
      </div>
 </div>
      

      <img src={this.state.CatFood_2} alt = "" />

</div>

      {this.UnderImg_2()}


  <div className = "third_description"

           onMouseOver = {() => {this.CatFoodHover_3()}}
           onMouseLeave  = {() => {this.CatFoodOut_3()}}
           onClick     = {() => {this.CatFoodChoise_3(); }}
       >
      <div className = {this.disabled_3()}>
      <h3 >с курой</h3>
      <div className = "description">
      <p><b>100</b> порций</p>
      <p><b>5</b> мышей в подарок</p>
      <p>заказчик доволен</p>
      <div className = "weight_2"> 5
      <div>кг</div>
      </div>
        
      </div>
 </div>
      

      <img src={this.state.CatFood_3} alt = "" />
</div>

{this.UnderImg_3()}

     

     
        
      </div>
    );
  }
}

export default App;
