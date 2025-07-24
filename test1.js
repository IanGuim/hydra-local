
shape(2).color(1,0,0)
  .add(shape(100).rotate(-90,2))
  .add((noise(2.2).color(0,1)).rotate(angle = 10,5)) .blend(shape(4), 0.02)
  .add(osc(1,0.4,300))
  .out()

voronoi(100, 5, 2)
  .add(shape(4,0.9)
  .mult(osc(3,0.5,1))
  .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5))
  
  .out()



gradient(0.1)
  .color(1,5)
  .repeat(40,40)
  .rotate(360, 5)
  .add(shape(3,0.2, 0.1).color(1).rotate(180, 50))
  .rotate(180,40)
  .add(noise(3,34))
  .modulateScale(osc(2,2,2).kaleid(50).scale(0.5),15,0)  
  .out()


noise(20,2)
  .add(voronoi(45,2))
  .modulateScale(osc(2,2,2),15,0)
  .color(2)
  
  .out()

voronoi(23,9,10)
  .color(0,1)
  .add(noise(122, 5,200).color(0))
  
  .out()
