window.onload = function init() {
    const canvas = document.getElementById("gl-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 렌더러
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    // 씬
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 배경색 변경
    scene.fog = new THREE.Fog(0xffffff, 570, 600); // 안개 효과

    // 카메라
    // 나중에 가장 마지막 파라미터 300으로 조정 (시야 조정)
    const camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 3000);
    // camera.rotation.x = 125 / 180 * Math.PI;
    // camera.rotation.y = 90 / 180 * Math.PI;
    camera.position.x = 12;
    camera.position.y = 30;
    camera.position.z = -1420;

    // 컨트롤
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.minDistance = 1; // 최소 줌 거리   
    // controls.maxDistance = 1000; // 최대 줌 거리
    controls.update();

    // 투명 텍스쳐 생성
    const transparentMaterial = new THREE.MeshStandardMaterial({
        transparent: true, // 투명한 재질 설정
        opacity: 0, // 모든 면을 완전히 투명하게 만듭니다.
        side: THREE.DoubleSide // 모든 면을 표시하도록 설정
    });

    // ----------시작 배경---------- //

    // 정육면체 생성
    const primaryGeometry = new THREE.BoxGeometry(515, 460, 355);

    // 텍스쳐 배열 선언
    const primaryTextureArr = []; 

    // 텍스쳐 생성
    const primaryTexture_lf = new THREE.TextureLoader().load('./background_image/primary_lf.jpg'); // 텍스쳐 왼쪽 배경
    const primaryTexture_rt = new THREE.TextureLoader().load('./background_image/primary_rt.jpg'); // 텍스쳐 오른쪽 배경
    const primaryTexture_up = new THREE.TextureLoader().load('./background_image/primary_up.jpg'); // 텍스쳐 윗배경
    const primaryTexture_dn = new THREE.TextureLoader().load('./background_image/primary_dn.jpg'); // 텍스쳐 아랫배경
    const primaryTexture_bk = new THREE.TextureLoader().load('./background_image/primary_bk.jpg'); // 텍스쳐 뒷배경

    // 배열에 각각의 텍스쳐 추가
    primaryTextureArr.push(new THREE.MeshStandardMaterial({map: primaryTexture_lf}));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({map: primaryTexture_rt}));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({map: primaryTexture_up}));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({map: primaryTexture_dn}));
    primaryTextureArr.push(transparentMaterial);
    primaryTextureArr.push(new THREE.MeshStandardMaterial({map: primaryTexture_bk}));

    // 각각의 텍스쳐가 정육면체 안쪽으로 들어가도록 설정
    for (let i = 0; i < 6; i++) { primaryTextureArr[i].side = THREE.BackSide; }

    // 배경으로 사용할 정육면체 생성
    const primaryBackground = new THREE.Mesh(primaryGeometry, primaryTextureArr); 

    // 정육면체 위치 조정
    primaryBackground.position.x = 16.5; 
    primaryBackground.position.y = 211.5; 
    primaryBackground.position.z = -1150;

    // 씬에 추가
    scene.add(primaryBackground); 

    // ----------시작 배경 끝---------- //

    // ----------에레브 배경 시작---------- //

    // 정육면체 생성
    const ereveGeometry = new THREE.BoxGeometry(515, 460, 355); // 크기

    // 텍스쳐 배열 선언
    const ereveTextureArr = []; 

    // 텍스쳐 생성
    const ereveTexture_lf = new THREE.TextureLoader().load('./background_image/primary_lf.jpg'); // 텍스쳐 왼쪽 배경
    const ereveTexture_rt = new THREE.TextureLoader().load('./background_image/primary_rt.jpg'); // 텍스쳐 오른쪽 배경
    const ereveTexture_up = new THREE.TextureLoader().load('./background_image/primary_up.jpg'); // 텍스쳐 윗배경
    const ereveTexture_dn = new THREE.TextureLoader().load('./background_image/primary_dn.jpg'); // 텍스쳐 아랫배경

    // 배열에 각각의 텍스쳐 추가
    ereveTextureArr.push(new THREE.MeshStandardMaterial({map: ereveTexture_lf}));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({map: ereveTexture_rt}));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({map: ereveTexture_up}));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({map: ereveTexture_dn}));
    ereveTextureArr.push(transparentMaterial);
    ereveTextureArr.push(transparentMaterial);

    // 각각의 텍스쳐가 정육면체 안쪽으로 들어가도록 설정
    for (let i = 0; i < 6; i++) { ereveTextureArr[i].side = THREE.BackSide; }

    // 배경으로 사용할 정육면체 생성
    const ereveBackground = new THREE.Mesh(ereveGeometry, ereveTextureArr); 

    // 정육면체 위치 조정
    ereveBackground.position.x = 16.5; 
    ereveBackground.position.y = 211.5;
    ereveBackground.position.z = -800;

    // 씬에 추가
    scene.add(ereveBackground); 

    // ----------에레브 배경 끝---------- //

    // ----------커닝시티 배경 시작---------- //

    // 정육면체 생성
    const kerningGeometry = new THREE.BoxGeometry(515, 460, 295);

   // 텍스쳐 배열 선언
   const kerningTextureArr = []; 

   // 텍스쳐 생성
   const kerningTexture_lf = new THREE.TextureLoader().load('./background_image/primary_lf.jpg'); // 텍스쳐 왼쪽 배경
   const kerningTexture_rt = new THREE.TextureLoader().load('./background_image/primary_rt.jpg'); // 텍스쳐 오른쪽 배경
   const kerningTexture_up = new THREE.TextureLoader().load('./background_image/primary_up.jpg'); // 텍스쳐 윗배경
   const kerningTexture_dn = new THREE.TextureLoader().load('./background_image/primary_dn.jpg'); // 텍스쳐 아랫배경

   // 배열에 각각의 텍스쳐 추가
   kerningTextureArr.push(new THREE.MeshStandardMaterial({map: kerningTexture_lf}));
   kerningTextureArr.push(new THREE.MeshStandardMaterial({map: kerningTexture_rt}));
   kerningTextureArr.push(new THREE.MeshStandardMaterial({map: kerningTexture_up}));
   kerningTextureArr.push(new THREE.MeshStandardMaterial({map: kerningTexture_dn}));
   kerningTextureArr.push(transparentMaterial);
   kerningTextureArr.push(transparentMaterial);

   // 각각의 텍스쳐가 정육면체 안쪽으로 들어가도록 설정
   for (let i = 0; i < 6; i++) { kerningTextureArr[i].side = THREE.BackSide; }

    // 배경으로 사용할 정육면체 생성
    const kerningBackground = new THREE.Mesh(kerningGeometry, kerningTextureArr); 

    // 정육면체 위치 조정
    kerningBackground.position.x = 16.5; 
    kerningBackground.position.y = 211.5; 
    kerningBackground.position.z = -480;

    // 씬에 추가
    scene.add(kerningBackground); 

    // ----------커닝시티 배경 끝---------- //

    // ----------엘리니아 배경 시작---------- //

    // 정육면체 생성
    const eliniaGeometry = new THREE.BoxGeometry(515, 460, 315);

    // 텍스쳐 배열 선언
    const eliniaTextureArr = []; 

    // 텍스쳐 생성
    const eliniaTexture_lf = new THREE.TextureLoader().load('./background_image/primary_lf.jpg'); // 텍스쳐 왼쪽 배경
    const eliniaTexture_rt = new THREE.TextureLoader().load('./background_image/primary_rt.jpg'); // 텍스쳐 오른쪽 배경
    const eliniaTexture_up = new THREE.TextureLoader().load('./background_image/primary_up.jpg'); // 텍스쳐 윗배경
    const eliniaTexture_dn = new THREE.TextureLoader().load('./background_image/primary_dn.jpg'); // 텍스쳐 아랫배경

    // 배열에 각각의 텍스쳐 추가
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({map: eliniaTexture_lf}));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({map: eliniaTexture_rt}));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({map: eliniaTexture_up}));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({map: eliniaTexture_dn}));
    eliniaTextureArr.push(transparentMaterial);
    eliniaTextureArr.push(transparentMaterial);

    // 각각의 텍스쳐가 정육면체 안쪽으로 들어가도록 설정
    for (let i = 0; i < 6; i++) { eliniaTextureArr[i].side = THREE.BackSide; }

    // 배경으로 사용할 정육면체 생성
    const eliniaBackground = new THREE.Mesh(eliniaGeometry, eliniaTextureArr); // 정육면체 생성

    // 정육면체 위치 조정
    eliniaBackground.position.x = 16.5; 
    eliniaBackground.position.y = 211.5; 
    eliniaBackground.position.z = -175;

    // 씬에 추가
    scene.add(eliniaBackground); 

    // ----------엘리니아 배경 끝---------- //

    // ----------아쿠아로드 배경 시작---------- //

    // 정육면체 생성
    const aquaGeometry = new THREE.BoxGeometry(515, 460, 330);

    // 텍스쳐 배열 선언
    const aquaTextureArr = []; 

    // 텍스쳐 생성
    const aquaTexture_lf = new THREE.TextureLoader().load('./background_image/primary_lf.jpg'); // 텍스쳐 왼쪽 배경
    const aquaTexture_rt = new THREE.TextureLoader().load('./background_image/primary_rt.jpg'); // 텍스쳐 오른쪽 배경
    const aquaTexture_up = new THREE.TextureLoader().load('./background_image/primary_up.jpg'); // 텍스쳐 윗배경
    const aquaTexture_dn = new THREE.TextureLoader().load('./background_image/primary_dn.jpg'); // 텍스쳐 아랫배경
    const aquaTexture_ft = new THREE.TextureLoader().load('./background_image/primary_ft.jpg'); // 텍스쳐 앞배경

    // 배열에 각각의 텍스쳐 추가
    aquaTextureArr.push(new THREE.MeshStandardMaterial({map: aquaTexture_lf}));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({map: aquaTexture_rt}));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({map: aquaTexture_up}));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({map: aquaTexture_dn}));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({map: aquaTexture_ft}));
    aquaTextureArr.push(transparentMaterial);

    // 각각의 텍스쳐가 정육면체 안쪽으로 들어가도록 설정
    for (let i = 0; i < 6; i++) { aquaTextureArr[i].side = THREE.BackSide; }
 
    // 배경으로 사용할 정육면체 생성
    const aquaBackground = new THREE.Mesh(aquaGeometry, aquaTextureArr);

    // 정육면체 위치 조정
    aquaBackground.position.x = 16.5; 
    aquaBackground.position.y = 211.5; 
    aquaBackground.position.z = 140;

    // 씬에 추가
    scene.add(aquaBackground); 

    // ----------아쿠아로드 배경 끝---------- //

    // 밝기 조정
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1 ); // Light color changed to white
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
    // let audioFilePath;
    // if (camera.position.x < 50 && camera.position.y < 50 && camera.position.z < 50) {
    //     audioFilePath = './model/audio/AquaRoad.mp3'; // 첫 번째 노래 파일 경로
    // } else {
    //     audioFilePath = './model/audio/Elinia.mp3'; // 두 번째 노래 파일 경로
    // }
    
    // // 사용자 동작 이후에 오디오 컨텍스트 생성
    // document.addEventListener('click', function() {
    //     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    //     // 오디오 로딩 및 재생
    //     const audioLoader = new THREE.AudioLoader();
    //     audioLoader.load(audioFilePath, function(buffer) {
    //         const listener = new THREE.AudioListener();
    //         const sound = new THREE.Audio(listener);
    //         sound.setBuffer(buffer);
    //         sound.setLoop(true);
    //         sound.setVolume(0.5);
    //         sound.play();
    //     });
    // });
    
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
    
    


    // 블렌더 맵 로드
    const loader = new THREE.GLTFLoader();
    loader.load('./model/scene.gltf', function (gltf) {
        const car = gltf.scene.children[0];
        car.scale.set(4.0, 4.0, 4.0);

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

    const movement = {
        forward: false,
        backward: false,
        left: false,
        right: false
    };
    
    // 키보드 이벤트 리스너 등록
    document.addEventListener('keydown', (event) => {
        handleKeyDown(event);
    });
    document.addEventListener('keyup', (event) => {
        handleKeyUp(event);
    });
    let sound;
    const audioLoader = new THREE.AudioLoader();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    let audioFilePath = ''; // 현재 재생 중인 오디오 파일 경로

    
    function handleKeyDown(event) {
        const code = event.code;
        if (code === 'KeyW') {
            movement.forward = true;
        } else if (code === 'KeyS') {
            movement.backward = true;
        } else if (code === 'KeyA') {
            movement.left = true;
        } else if (code === 'KeyD') {
            movement.right = true;
        }
    
        // 카메라 좌표를 로그에 출력
        const cameraPositionInWorld = camera.position.clone().unproject(camera);
        console.log(`카메라 위치: X: ${cameraPositionInWorld.x}, Y: ${cameraPositionInWorld.y}, Z: ${cameraPositionInWorld.z}`);
    
        let newAudioFilePath = '';

        // X좌표가 10보다 작을 경우 노래 재생
        if(cameraPositionInWorld.y < 10.0033&&cameraPositionInWorld.z < -266.13) {
            newAudioFilePath = './model/audio/Title.mp3';
        } else if(cameraPositionInWorld.y < 10.0055&&cameraPositionInWorld.z < -168) {
            newAudioFilePath = './model/audio/Ereve.mp3';
        }else if(cameraPositionInWorld.y < 10.0082&&cameraPositionInWorld.z < -111) {
            newAudioFilePath = './model/audio/KerningCity.mp3';
        }else if(cameraPositionInWorld.y < 10.0420&&cameraPositionInWorld.z < -19.99) {
            newAudioFilePath = './model/audio/Elinia.mp3';
        }else
        newAudioFilePath='./model/audio/AquaRoad.mp3';
    
        // 현재 재생 중인 노래가 있는 경우 종료하지 않음
    if (sound && newAudioFilePath !== audioFilePath) {
        sound.stop();
        audioFilePath = '';
    }

        // 새로운 노래 재생
    if (newAudioFilePath !== audioFilePath) {
        audioFilePath = newAudioFilePath;
        audioLoader.load(audioFilePath, function (buffer) {
            const listener = new THREE.AudioListener();
            sound = new THREE.Audio(listener);
            sound.setBuffer(buffer);
            sound.setLoop(true);
            sound.setVolume(0.5);
            sound.play();
        });
    }
    }
    
    
    function handleKeyUp(event) {
        const code = event.code;
        if (code === 'KeyW') {
            movement.forward = false;
        } else if (code === 'KeyS') {
            movement.backward = false;
        } else if (code === 'KeyA') {
            movement.left = false;
        } else if (code === 'KeyD') {
            movement.right = false;
        }
    }

    function animate() {
        // 사용자 입력에 따라 카메라의 위치 조절
        const moveSpeed = 0.5; // 이동 속도 조절
        if (movement.forward) {
            camera.position.z += moveSpeed;
        }
        if (movement.backward) {
            camera.position.z -= moveSpeed;
        }
        if (movement.left) {
            camera.position.x += moveSpeed;
        }
        if (movement.right) {
            camera.position.x -= moveSpeed;
        }
    
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    
    animate();


}

