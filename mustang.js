window.onload = function init() {
    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 렌더러
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    // 씬
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // 카메라
    // 나중에 가장 마지막 파라미터 300으로 조정 (시야 조정)
    const camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 1000);
    // camera.rotation.x = 125 / 180 * Math.PI;
    // camera.rotation.y = 90 / 180 * Math.PI;
    camera.position.x = 12;
    camera.position.y = 10;
    camera.position.z = -370;

    // 컨트롤
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // 시작 배경 정육면체 생성
    const primaryGeometry = new THREE.BoxGeometry(200, 95, 100); // 크기
    const primaryMaterial = new THREE.MeshBasicMaterial({ // 질감
        color: 0x000000,
        side: THREE.BackSide
    });
    const primaryBackground = new THREE.Mesh(primaryGeometry, primaryMaterial); // 정육면체 생성
    primaryBackground.position.x = 5; 
    primaryBackground.position.y = 42; 
    primaryBackground.position.z = -290;
    scene.add(primaryBackground); // 씬에 추가

    // 에레브 배경 정육면체 생성
    const ereveGeometry = new THREE.BoxGeometry(200, 95, 80); // 크기
    const ereveMaterial = new THREE.MeshBasicMaterial({ // 질감
        color: 0x00ff00,
        side: THREE.BackSide
    });
    const ereveBackground = new THREE.Mesh(ereveGeometry, ereveMaterial); // 정육면체 생성
    ereveBackground.position.x = 5; 
    ereveBackground.position.y = 42; 
    ereveBackground.position.z = -200;
    scene.add(ereveBackground); // 씬에 추가

    // 커닝시티 배경 정육면체 생성
    const kerningGeometry = new THREE.BoxGeometry(200, 95, 65); // 크기
    const kerningMaterial = new THREE.MeshBasicMaterial({ // 질감
        color: 0x0000ff,
        side: THREE.BackSide
    });
    const kerningBackground = new THREE.Mesh(kerningGeometry, kerningMaterial); // 정육면체 생성
    kerningBackground.position.x = 5; 
    kerningBackground.position.y = 42; 
    kerningBackground.position.z = -127;
    scene.add(kerningBackground); // 씬에 추가

     // 엘리니아 배경 정육면체 생성
     const eliniaGeometry = new THREE.BoxGeometry(200, 95, 95); // 크기
     const eliniaMaterial = new THREE.MeshBasicMaterial({ // 질감
         color: 0xff00ff,
         side: THREE.BackSide
     });
     const eliniaBackground = new THREE.Mesh(eliniaGeometry, eliniaMaterial); // 정육면체 생성
     eliniaBackground.position.x = 5; 
     eliniaBackground.position.y = 42; 
     eliniaBackground.position.z = -47;
     scene.add(eliniaBackground); // 씬에 추가

     // 아쿠아로드 배경 정육면체 생성
     const aquaGeometry = new THREE.BoxGeometry(200, 95, 80); // 크기
     const aquaMaterial = new THREE.MeshBasicMaterial({ // 질감
         color: 0xffff00,
         side: THREE.BackSide
     });
     const aquaBackground = new THREE.Mesh(aquaGeometry, aquaMaterial); // 정육면체 생성
     aquaBackground.position.x = 5; 
     aquaBackground.position.y = 42; 
     aquaBackground.position.z = 40;
     scene.add(aquaBackground); // 씬에 추가

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
