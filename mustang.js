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

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1); // Light color changed to white
    scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 0.1); // Light color changed to white
    // pointLight.position.set(0, 1000, 1000);
    // scene.add(pointLight);
    
    //아쿠아로드 노래 재생
    // const backgroundAudio = document.getElementById("AquaRoad_audio");

    // // 오디오 자동 재생 (선택 사항)
    // backgroundAudio.autoplay = true;

    // // 노래가 무한 반복되도록 설정 (선택 사항)
    // backgroundAudio.loop = true;

    // // 오디오 재생
    // backgroundAudio.play();

    // 오디오 일시 정지
    // backgroundAudio.pause();

    // Create an AudioContext after a user gesture (e.g., click)
    // document.addEventListener('click', function() {
    //     const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    //     // 이제 오디오 로딩 및 재생을 수행할 수 있음
    //     const audioLoader = new THREE.AudioLoader();
    //     audioLoader.load('./model/audio/AquaRoad.mp3', function(buffer) {
    //       const listener = new THREE.AudioListener();
    //       const sound = new THREE.Audio(listener);
    //       sound.setBuffer(buffer);
    //       sound.setLoop(true);
    //       sound.setVolume(0.5);
    //       sound.play();
    //     });
    //   });
    // 카메라의 현재 위치를 가져옵니다.
    // 카메라 위치를 기준으로 어떤 노래를 재생할지 결정합니다.
    let audioFilePath;
    if (camera.position.x < 50 && camera.position.y < 50 && camera.position.z < 50) {
        audioFilePath = './model/audio/AquaRoad.mp3'; // 첫 번째 노래 파일 경로
    } else {
        audioFilePath = './model/audio/Elinia.mp3'; // 두 번째 노래 파일 경로
    }
    
    // 사용자 동작 이후에 오디오 컨텍스트 생성
    document.addEventListener('click', function() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
        // 오디오 로딩 및 재생
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load(audioFilePath, function(buffer) {
            const listener = new THREE.AudioListener();
            const sound = new THREE.Audio(listener);
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        });
    });
    
    window.addEventListener('mousedown', onDocumentMouseDown, false);
    function onDocumentMouseDown(event) {
        event.preventDefault();
        
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
        // 마우스 클릭 위치를 3D 공간 좌표로 변환
        const mouse3D = new THREE.Vector3(mouseX, mouseY, 0.5);
        mouse3D.unproject(camera);
    
        // 마우스 클릭 위치의 좌표를 출력
        console.log('Mouse click in 3D space:', mouse3D);
    }
    //----
    const cameraPosition = camera.position;
    
    // 카메라의 x, y, z 좌표 얻기
    const cameraX = cameraPosition.x;
    const cameraY = cameraPosition.y;
    const cameraZ = cameraPosition.z;
    
    console.log(`카메라 위치: X: ${cameraX}, Y: ${cameraY}, Z: ${cameraZ}`);
    
    


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
