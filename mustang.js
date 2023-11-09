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
    camera.position.x = 12;
    camera.position.y = 30;
    camera.position.z = -1420;
    camera.rotation.y = Math.PI; // 180도 회전

    const controls = new PointerLockControls(camera, document.body);

    // Pointer Lock를 사용한 마우스 클릭 이벤트 처리
    document.body.addEventListener("click", () => {
        if (!controls.isLocked) {
            controls.lock();
        }
    });

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
    primaryTextureArr.push(new THREE.MeshStandardMaterial({ map: primaryTexture_lf }));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({ map: primaryTexture_rt }));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({ map: primaryTexture_up }));
    primaryTextureArr.push(new THREE.MeshStandardMaterial({ map: primaryTexture_dn }));
    primaryTextureArr.push(transparentMaterial);
    primaryTextureArr.push(new THREE.MeshStandardMaterial({ map: primaryTexture_bk }));

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
    ereveTextureArr.push(new THREE.MeshStandardMaterial({ map: ereveTexture_lf }));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({ map: ereveTexture_rt }));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({ map: ereveTexture_up }));
    ereveTextureArr.push(new THREE.MeshStandardMaterial({ map: ereveTexture_dn }));
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
    kerningTextureArr.push(new THREE.MeshStandardMaterial({ map: kerningTexture_lf }));
    kerningTextureArr.push(new THREE.MeshStandardMaterial({ map: kerningTexture_rt }));
    kerningTextureArr.push(new THREE.MeshStandardMaterial({ map: kerningTexture_up }));
    kerningTextureArr.push(new THREE.MeshStandardMaterial({ map: kerningTexture_dn }));
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
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({ map: eliniaTexture_lf }));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({ map: eliniaTexture_rt }));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({ map: eliniaTexture_up }));
    eliniaTextureArr.push(new THREE.MeshStandardMaterial({ map: eliniaTexture_dn }));
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
    aquaTextureArr.push(new THREE.MeshStandardMaterial({ map: aquaTexture_lf }));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({ map: aquaTexture_rt }));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({ map: aquaTexture_up }));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({ map: aquaTexture_dn }));
    aquaTextureArr.push(new THREE.MeshStandardMaterial({ map: aquaTexture_ft }));
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1); // Light color changed to white
    scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 0.1); // Light color changed to white
    // pointLight.position.set(0, 1000, 1000);
    // scene.add(pointLight);


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



    console.log(`카메라 위치: X: ${cameraX}, Y: ${cameraY}, Z: ${cameraZ}, found: ${found}`);



    //단풍잎 로드
    const loader = new THREE.GLTFLoader();
    loader.load('maple.gltf', function (gltf) {
        object = gltf.scene;

        object.scale.set(5, 5, 5);
        object.position.set(130, -15, -1058)
        object.rotation.x = Math.PI / 2
        scene.add(object);
    });

    let isMouseOverObject = false;
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    //벽 로드
    loader.load('./model/wall.gltf', function (gltf) {
        wall = gltf.scene;

        wall.scale.set(1, 600, 280); //두깨, 높이, 너비
        wall.position.set(20, -15, -960)
        wall.rotation.y = Math.PI / 2;
        // 벽의 재질 투명하게
        const material = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.5 //0에 가까울수록 더 투명
        });

        wall.children[0].material = material;
        scene.add(wall);

    });

    // 블렌더 맵 로드
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


    var found = 1;
    var wallEnabled = true; // 벽의 충돌 감지 상태를 나타내는 변수

    //단풍잎 클릭했을 때 수행
    document.addEventListener('mousedown', onDocumentMouseDown);
    function onDocumentMouseDown(event) {
        event.preventDefault();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        var intersects = raycaster.intersectObject(object, true);

        if (intersects.length > 0) {
            // 이미지 엘리먼트 생성
            const image = document.createElement('img');
            image.src = 'mol.png';
            image.style.position = 'absolute';
            image.style.top = event.clientY + 'px';
            image.style.left = event.clientX + 'px';
            image.style.pointerEvents = 'none'; // 이미지가 마우스 이벤트를 가로채지 않도록 설정

            document.body.appendChild(image);

            //5초 후에 이미지 사라지게 함
            setTimeout(function () {
                document.body.removeChild(image);
            }, 5000);

            // 단풍 찾았을 때 단풍 삭제
            scene.remove(object);         

            wallEnabled = false;

            // 단풍 찾았을 때 벽 삭제
            scene.remove(wall);
            found++;

            if (found == 3) {
                
                // 에레브 단풍잎 생성
                object.scale.set(5, 5, 5);
                object.position.set(-66, -15, -862)
                object.rotation.x = Math.PI / 2
                scene.add(object);

                // 에레브 벽 생성
                wall.scale.set(1, 600, 280); //두깨, 높이, 너비
        wall.position.set(20, -15, -650)
                wall.rotation.y = Math.PI / 2;
                // 벽의 재질 투명하게
                const material = new THREE.MeshBasicMaterial({
                    transparent: true,
                    opacity: 0 //0에 가까울수록 더 투명
                });

                wall.children[0].material = material;
                scene.add(wall);

            }
            else if (found == 5) {
                //커닝시티 단풍잎 생성
                object.scale.set(5, 5, 5);
                object.position.set(-203, 70, -517)
                object.rotation.x = 0
                scene.add(object);

                //커닝시티 벽 생성
                wall.scale.set(1, 600, 280); //두깨, 높이, 너비
        wall.position.set(20, -15, -328)
                wall.rotation.y = Math.PI / 2;
                // 벽의 재질 투명하게
                const material = new THREE.MeshBasicMaterial({
                    transparent: true,
                    opacity: 0 //0에 가까울수록 더 투명
                });

                wall.children[0].material = material;
                scene.add(wall);

            }
            else if (found == 7) {
                //엘리니아 단풍잎 생성
                object.scale.set(5, 5, 5);
                object.position.set(-81, -15, -46)
                object.rotation.x = Math.PI / 2
                scene.add(object);

                //엘리니아 벽 생성
                wall.scale.set(1, 600, 280); //두깨, 높이, 너비
        wall.position.set(20, -15, -7)
                wall.rotation.y = Math.PI / 2;
                // 벽의 재질 투명하게
                const material = new THREE.MeshBasicMaterial({
                    transparent: true,
                    opacity: 0 //0에 가까울수록 더 투명
                });

                wall.children[0].material = material;
                scene.add(wall);

            }
            else if (found == 9) {
                //아쿠아로드 단풍잎 생성
                object.scale.set(10, 10, 10);
                object.position.set(-63, -13, 125)
                object.rotation.x = Math.PI / 2
                scene.add(object);

                //아쿠아로드 벽 생성
                wall.scale.set(1, 600, 280); //두깨, 높이, 너비
        wall.position.set(20, -15, 312)
                wall.rotation.y = Math.PI / 2;
                // 벽의 재질 투명하게
                const material = new THREE.MeshBasicMaterial({
                    transparent: true,
                    opacity: 0 //0에 가까울수록 더 투명
                });

                wall.children[0].material = material;
                scene.add(wall);
            }
            else { }

        }
    }

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
        console.log(`카메라 위치: X: ${cameraPositionInWorld.x}, Y: ${cameraPositionInWorld.y}, Z: ${cameraPositionInWorld.z}, found: ${found}, wallEnabled: ${wallEnabled}`);


        // z 좌표에 따라 다른 배경음악 재생
        if (cameraPositionInWorld.z < -1019) {
            newAudioFilePath = './model/audio/Title.mp3';
        } else if (cameraPositionInWorld.z < -700) {
            newAudioFilePath = './model/audio/Ereve.mp3';
        } else if (cameraPositionInWorld.z < -349) {
            newAudioFilePath = './model/audio/KerningCity.mp3';
        } else if (cameraPositionInWorld.z < -50) {
            newAudioFilePath = './model/audio/Elinia.mp3';
        } else
            newAudioFilePath = './model/audio/AquaRoad.mp3';

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

        // ----------벽 충돌 감지 파트 시작---------- //

        // 오른쪽 벽과의 충돌 확인
        if (cameraPositionInWorld.x < -213) { movement.right = false; }
        // 왼쪽 벽과의 충돌 확인
        else if (cameraPositionInWorld.x > 242) { movement.left = false; }
        // 시작 맵 뒷쪽 벽과의 충돌 확인
        else if (cameraPositionInWorld.z < -1419.99) { movement.backward = false; }
        // 아쿠아로드 앞쪽 벽과의 충돌 확인
        else if (cameraPositionInWorld.z > 304.99) { movement.forward = false; }

        // ----------벽 충돌 감지 파트 끝---------- //

        // ----------장애물 충돌 감지 파트 시작---------- //

        // 시작화면 장애물 처리 파트
        if (cameraPositionInWorld.x > 60 && cameraPositionInWorld.z > -1372 && cameraPositionInWorld.x < 248 && cameraPositionInWorld.z < -1320) { movement.forward = false; }
        if (cameraPositionInWorld.x > -206 && cameraPositionInWorld.x < -68 && cameraPositionInWorld.z > -1293 && cameraPositionInWorld.z < -1234) { movement.forward = false; }
        if (cameraPositionInWorld.x > -125 && cameraPositionInWorld.x < -14 && cameraPositionInWorld.z > -1221 && cameraPositionInWorld.z < -1152) { movement.forward = false; }
        if (cameraPositionInWorld.x > 60 && cameraPositionInWorld.x < 221 && cameraPositionInWorld.z > -1250 && cameraPositionInWorld.z < -1158) { movement.forward = false; }
        if (cameraPositionInWorld.x > 95 && cameraPositionInWorld.x < 242 && cameraPositionInWorld.z > -1116 && cameraPositionInWorld.z < -983) { movement.forward = false; }
        if (cameraPositionInWorld.x > -210 && cameraPositionInWorld.x < -100 && cameraPositionInWorld.z > -1123 && cameraPositionInWorld.z < -983) { movement.forward = false; }
        if (cameraPositionInWorld.x > -101 && cameraPositionInWorld.x < 0 && cameraPositionInWorld.z > -1089 && cameraPositionInWorld.z < -983) { movement.forward = false; }

        // 에레브 장애물 처리 파트
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

    // 벽과 카메라의 충돌을 검사하기 위한 레이캐스터 생성
    const wallRaycaster = new THREE.Raycaster();

    // 벽과 카메라의 충돌을 검사하는 함수
    function checkWallCollision() {
        const wallIntersects = [];
        if (!wallEnabled) {
            wallEnabled=true;
            return false; // 충돌 감지 비활성화 시 항상 false 반환
        }
        wallRaycaster.set(camera.position, new THREE.Vector3(0, 0, -1)); // 카메라 위치에서 앞쪽으로 레이 발사
        wallRaycaster.intersectObject(wall, true, wallIntersects); // 벽과의 충돌 감지

        return wallIntersects.length > 0;
    }

    function animate() {
        // 사용자 입력에 따라 카메라의 위치 조절
        const moveSpeed = 1.5;

        if (movement.forward) {
            // 벽과의 충돌을 확인
            const isColliding = checkWallCollision();

            // 벽과의 충돌이 없는 경우에만 카메라의 위치를 변경
            if (!isColliding) {
                camera.position.z += moveSpeed;
            }
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
