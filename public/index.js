var logo = document.getElementById('logo');

logo.addEventListener("mouseover", function() {
    logo.style.cursor = 'pointer';
})

function goHome() {
    window.location.href ="index.html"
}

function tab1() {
    document.getElementById('pop').innerHTML =
    `
    <h3>앞으로의 나의 목표</h3></br>
    <div>
    <li>신입 개발자 되기</li>
    <p>엘리스 과정을 무사히 끝마친 후에 신입 개발자로 커리어 체인지 하기 입니다.<br>
    아직 개발에 대해 많이 부족한 단계라 최대한 엘리스 과정을 잘 따라가면서<br> 웹 개발에 대한 전반적인 이해도를 높히고 싶습니다.<br><br> 비전공자로서 4개월이라는 시간은 모든걸 배우기엔 부족한 시간이지만<br> 과정을 끝마치면 저 혼자 스스로 공부할 수 있을만한 수준으로 올라가겠죠?<br> 시간이 소요되더라도 포기하지 않고 개발자의 꿈을 이뤄가고 싶어요!</p>
    </div>
    
    `
}

function tab2() {
    document.getElementById('pop').innerHTML =
    `<h3>관심 분야 또는 기술</h3></br>
    <div>
    <li>클라우드</li>
    <img src="img/logo.png" alt="logo">
    </div>`
}

function tab3() {
    document.getElementById('pop').innerHTML =
    `<h3>SW 트랙에서 가장 기대되는 점</h3></br>
    <div>
    <li>새로운 강의들</li>
    <p>저에겐 모든 강의들이 너무나도 새롭고 재밌습니다.<br>엘리스의 온라인 교육 플랫폼도 맘에 들고 앞으로 어떤 것들을 배우게 될지 기대됩니다.</p><br>

    <li>성장한 나의 모습</li>
    <p>엘리스 트랙에서 가장 기대되는 부분은 이 과정이 끝나고 성장해 있을 저의 모습입니다.<br> 엘리스 트랙에 지원하기 전에는 개발과 코딩에 대해서 전혀 몰랐지만,<br> 수업을 듣고 진도를 나가는 지금 저의 모습은 어제와 다르게 성장해 가고 있어요!<br> 아직 다른 동료들에 비해 한참 부족한 실력이지만 하루 하루 발전해 가는 저의 모습이<br> 너무 신기하고 공부하는 것이 즐겁습니다 :)</p>
    
    </div>`
}

function tab4() {
    document.getElementById('pop').innerHTML =
    `
    <h3>동료 레이서에게 하고 싶은 말</h3></br>
    <div>
    <p>" 코로나로 인해 대면 수업을 듣지 못하고 직접 얼굴 마주치며 만나지 못해 아쉽지만, 같은 목표를 가지고 공부할 수 있는 동료 레이서들을 만나게 되어서 너무 반갑습니다! 개발 공부가 처음이라 이해하지 못하는 부분이 많은데ㅠ 질문하면 답변도 잘 해주시고 도움 주셔서 항상 감사하게 생각하고 있어요~ 다른 동료분들의 질의문답을 보면서 배우고 얻어가는 부분도 많이 있어요! 엘리스 과정이 끝날때까지 동료 레이서 분들로부터 많은 도움 받을 것에 대해 미리 감사드립니다 :) 혹시라도 저처럼 개발에 익숙하지 않으시고 처음이신 동료분들도 계신다면 포기하지 말고 끝까지 함께 엘리스 과정 마무리 했으면 좋겠습니다~ 짧은 기간동안 많은 내용을 배우게 되어 힘들기도 하지만 좋은 분들 만나서 공부하는 것이 즐거워요! <br> <br> 엘리스 과정 수료 후에는 다들 원하시는 분야의 개발자가 되시길 바라고,<br> 항상 행복하셨으면 좋겠습니다 :) 화이팅해요!! "
    </p>
    </div>
    
    `
}

function tab5() {
    document.getElementById('pop').innerHTML =
    `
    <h3>나를 표현할 수 있는 정보</h3></br>
    <div>
    <li>취미</li>
    <p>볼링치기  /  책읽기  /  따릉이타기  /  음악감상하기</p>
    <li>특기</li>
    <p>하고 싶은 것 있음 후회하더라도 우선 해보기</li>
    <li>좋아하는 하늘</li>
    <p>뭉게구름이 몽실몽실 떠있는 파란 하늘</li>
    <li>성격</li>
    <p>ENFJ  /  철없음  /  눈치 빠른편  /  역마살  /  나름 계획적</li>
    </div>
    `
}
