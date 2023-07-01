function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("modalLoaded")
  }
  function modalLoaded(){
    console.log('Modal Loaded')
  }
  function draw(){
    stroke(0)
    strokeWeight(13)
        if(mouseIsPressed){
          line(pmouseX,pmouseY,mouseX,mouseY)
        }
    }

    function gotResults(error,results){
        if (error) {
            console.error(error)
            
        } else {
           console.log(results) 
           previous_results=""
  function gotResults(error,results){
  if (error) {
    console.error(error)
  } else {
  if((results[0].confidence>0.5)&&(previous_results !=results[0].label)){
    console.log(results)
        }
    }
  
  
  
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3)}
}
}
