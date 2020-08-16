var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
    var createScene  = function() {
        var scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3(1, 0.8, 0.8);
        
        var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
        scene.activeCamera.attachControl(canvas);
        
        var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
        
        var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);
        
        var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);
        
        var box = BABYLON.Mesh.CreateBox("box", 3.0, scene);
        box.position = new BABYLON.Vector3(-5, 0, 0); 
        
        var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false);
        
        cylinder.position = new BABYLON.Vector3(5, 0, 0);	
        return scene;
    };
    var scene = createScene();
    engine.runRenderLoop(function() {
    scene.render();
});