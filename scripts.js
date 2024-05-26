document.addEventListener('DOMContentLoaded', function() {
    const chatbox = document.getElementById('chatbox');
    const chatbot = document.getElementById('chatbot');
    const closeChat = document.getElementById('closeChat');
    const modal = document.getElementById('modal');
    const confirmApply = document.getElementById('confirmApply');
    const cancelApply = document.getElementById('cancelApply');
    const positionsData = [
        { title: '자유 지원 ✨', description: '이메일로 지원하세요.' },
        { title: '투자 관련 리더 📈', description: '투자 전략을 이끌고 팀을 리드하세요.' },
        { title: '투자 분석가 💹', description: '시장 데이터를 분석하고 투자 결정을 지원하세요.' },
        { title: '프론트엔드 개발자 🌐', description: '멋진 사용자 인터페이스를 만들어보세요.' },
        { title: '백엔드 개발자 💻', description: '서버 사이드 로직을 설계하고 유지하세요.' },
        { title: '데이터 분석가 📊', description: '데이터 분석으로 의사 결정을 돕습니다.' },
        { title: '프로덕트 매니저 📋', description: '제품 비전과 전략을 이끌어주세요.' },
        { title: 'UX/UI 디자이너 🎨', description: '사용자 경험과 인터페이스 디자인을 개선하세요.' },
        { title: '데브옵스 엔지니어 🛠️', description: '개발과 운영의 효율성을 높이세요.' },
        { title: '모바일 앱 개발자 📱', description: '최신 모바일 애플리케이션을 개발하세요.' },
        { title: '보안 전문가 🔐', description: '시스템과 데이터를 보호하세요.' },
        { title: '마케팅 전문가 📈', description: '마케팅 전략을 개발하고 실행하세요.' }
    ];

    function renderPositions() {
        const positionsContainer = document.querySelector('#positions .grid');
        positionsContainer.innerHTML = '';
        positionsData.forEach(position => {
            const positionElement = document.createElement('div');
            positionElement.classList.add('position', 'bg-gray-800', 'p-8', 'rounded-lg', 'shadow-lg', 'text-center', 'transform', 'transition', 'hover:scale-105');
            positionElement.innerHTML = `
                <h3 class="text-2xl font-bold text-white mb-4">${position.title}</h3>
                <p class="text-gray-400 mb-6">${position.description}</p>
                <button class="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600" onclick="openModal('${position.title}')">지원하기</button>
            `;
            positionsContainer.appendChild(positionElement);
        });
    }

    chatbot.addEventListener('click', function() {
        chatbox.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', function() {
        chatbox.classList.add('hidden');
    });

    document.getElementById('lang-ko').addEventListener('click', function() {
        setLanguage('ko');
    });

    document.getElementById('lang-en').addEventListener('click', function() {
        setLanguage('en');
    });

    function openModal(position) {
        document.getElementById('modal-message').innerText = `${position} 포지션에 지원하시겠습니까?`;
        confirmApply.setAttribute('data-position', position);
        modal.classList.add('show');
    }

    confirmApply.addEventListener('click', function() {
        const position = this.getAttribute('data-position');
        window.location.href = `mailto:career@jjjclub.xyz?subject=${position} 포지션 지원`;
        modal.classList.remove('show');
    });

    cancelApply.addEventListener('click', function() {
        modal.classList.remove('show');
    });

    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchValue = e.target.value.toLowerCase();
        const positions = document.querySelectorAll('.position');

        positions.forEach(position => {
            const title = position.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchValue)) {
                position.classList.remove('hidden');
            } else {
                position.classList.add('hidden');
            }
        });
    });

    function setLanguage(lang) {
        if (lang === 'en') {
            document.title = 'JJJ Career';
            document.querySelector('h1').innerText = 'JJJ Career';
            document.querySelector('header p').innerText = 'Check out your passionate abilities on JJJ CLUB 🚀';
            document.querySelector('#searchInput').placeholder = 'Search positions...';

            const positions = document.querySelectorAll('.position');
            positionsData.forEach((position, index) => {
                positions[index].querySelector('h3').innerText = [
                    'Open Application ✨',
                    'Investment Leader 📈',
                    'Investment Analyst 💹',
                    'Frontend Developer 🌐',
                    'Backend Developer 💻',
                    'Data Analyst 📊',
                    'Product Manager 📋',
                    'UX/UI Designer 🎨',
                    'DevOps Engineer 🛠️',
                    'Mobile App Developer 📱',
                    'Security Specialist 🔐',
                    'Marketing Specialist 📈'
                ][index];
                positions[index].querySelector('p').innerText = [
                    'Apply via email.',
                    'Lead investment strategies and teams.',
                    'Analyze market data and support investment decisions.',
                    'Create amazing user interfaces.',
                    'Design and maintain server-side logic.',
                    'Assist in decision-making with data analysis.',
                    'Lead product vision and strategy.',
                    'Improve user experience and interface design.',
                    'Enhance development and operations efficiency.',
                    'Develop cutting-edge mobile applications.',
                    'Protect systems and data.',
                    'Develop and execute marketing strategies.'
                ][index];
            });
        } else if (lang === 'ko') {
            document.title = 'JJJ Career';
            document.querySelector('h1').innerText = 'JJJ Career';
            document.querySelector('header p').innerText = 'Check out your passionate abilities on JJJ CLUB 🚀';
            document.querySelector('#searchInput').placeholder = '포지션 검색...';

            const positions = document.querySelectorAll('.position');
            positionsData.forEach((position, index) => {
                positions[index].querySelector('h3').innerText = position.title;
                positions[index].querySelector('p').innerText = position.description;
            });
        }
    }

    renderPositions();
});












