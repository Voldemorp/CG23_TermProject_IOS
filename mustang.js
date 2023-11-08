window.onload = function init() {
    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Set the background color to white (0xffffff)
    // 뒤에있는 박스는 안개에 덮인 색으로 보임
    // scene.fog = new THREE.Fog('white', 50, 90)

    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 150;
    camera.position.y = 150;
    camera.position.z = 150;

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1 ); // Light color changed to white
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.1); // Light color changed to white
    pointLight.position.set(0, 1000, 1000);
    scene.add(pointLight);

    const loader = new THREE.GLTFLoader();
    loader.load('./model/scene.gltf', function (gltf) {
        const car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);

        const material = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa, // 모델의 머터리얼 색상을 변경
            roughness: 0.75, // 머터리얼 설정 조절 (조명 강도 조절에 도움을 줄 수 있음)
        });

        car.material = material;

        scene.add(gltf.scene);
        animate();
    }, undefined, function (error) {
        console.error(error);
    });

    function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    
}
