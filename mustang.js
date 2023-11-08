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
    scene.fog = new THREE.Fog(0xffffff, 60, 100); // 안개 효과

    // 카메라
    // 나중에 가장 마지막 파라미터 300으로 조정 (시야 조정)
    const camera = new THREE.PerspectiveCamera(50, canvas.width / canvas.height, 0.1, 300);
    // camera.rotation.x = 125 / 180 * Math.PI;
    // camera.rotation.y = 90 / 180 * Math.PI;
    camera.position.x = 12;
    camera.position.y = 10;
    camera.position.z = -370;

    // 컨트롤
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1; // 최소 줌 거리   
    controls.maxDistance = 1000; // 최대 줌 거리
    controls.update();

    // 투명 텍스쳐 생성
    const transparentMaterial = new THREE.MeshStandardMaterial({
        transparent: true, // 투명한 재질 설정
        opacity: 0, // 모든 면을 완전히 투명하게 만듭니다.
        side: THREE.DoubleSide // 모든 면을 표시하도록 설정
    });

    // ----------시작 배경---------- //

    // 정육면체 생성
    const primaryGeometry = new THREE.BoxGeometry(64, 46, 100);

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
    primaryBackground.position.x = 4; 
    primaryBackground.position.y = 18.8; 
    primaryBackground.position.z = -290;

    // 씬에 추가
    scene.add(primaryBackground); 

    // ----------시작 배경 끝---------- //

    // ----------에레브 배경 시작---------- //

    // 정육면체 생성
    const ereveGeometry = new THREE.BoxGeometry(64, 46, 80); // 크기

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
    ereveBackground.position.x = 4; 
    ereveBackground.position.y = 18.8; 
    ereveBackground.position.z = -200;

    // 씬에 추가
    scene.add(ereveBackground); 

    // ----------에레브 배경 끝---------- //

    // ----------커닝시티 배경 시작---------- //

    // 정육면체 생성
    const kerningGeometry = new THREE.BoxGeometry(64, 46, 65);

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
    kerningBackground.position.x = 4; 
    kerningBackground.position.y = 18.8; 
    kerningBackground.position.z = -127;

    // 씬에 추가
    scene.add(kerningBackground); 

    // ----------커닝시티 배경 끝---------- //

    // ----------엘리니아 배경 시작---------- //

    // 정육면체 생성
    const eliniaGeometry = new THREE.BoxGeometry(64, 46, 95);

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
    eliniaBackground.position.x = 4; 
    eliniaBackground.position.y = 18.8; 
    eliniaBackground.position.z = -47;

    // 씬에 추가
    scene.add(eliniaBackground); 

    // ----------엘리니아 배경 끝---------- //

    // ----------아쿠아로드 배경 시작---------- //

    // 정육면체 생성
    const aquaGeometry = new THREE.BoxGeometry(64, 46, 80);

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
    aquaBackground.position.x = 4; 
    aquaBackground.position.y = 18.8; 
    aquaBackground.position.z = 40;

    // 씬에 추가
    scene.add(aquaBackground); 

    // ----------아쿠아로드 배경 끝---------- //

    // 밝기 조정
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1 ); // Light color changed to white
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.1); // Light color changed to white
    pointLight.position.set(0, 1000, 1000);
    scene.add(pointLight);

    // 블렌더 맵 로드
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
