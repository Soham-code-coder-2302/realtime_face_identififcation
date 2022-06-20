function setup() {
    canvas=createCanvas(400,400)                        
    canvas.center()
    vid=createCapture(VIDEO)
    vid.hide()
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2YnAIJEIA/model.json',modelloaded)  
    }
    
    function draw() {
    image(vid,0,0,400,400)
    classifier.classify(vid,gotresult)
    }
    
    function modelloaded () {
    console.log ("model is loaded")
    }
    
    function gotresult (error,result) {
    if (error) {
    console.log(error)
    }
    else {
    console.log(result)
    
    document.getElementById("result_object_name").innerHTML=result[0].label
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2)
    }
    }