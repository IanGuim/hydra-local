
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
