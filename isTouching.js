function isTouching(object1,object2){
    if((object1.width/2+object2/2) < (object1.x-object2.x)){
      object1.velocityX=0;
      if(damage>10){
          object2.shapeColor="red";
      }
      else if(damage<10){
        object2.shapeColor="green";
      }
    }
  }