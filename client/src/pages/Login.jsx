import InBuddyLogoImg from '@/assets/InBuddy-logo.svg';
import cloudImg from '@/assets/cloud-img.svg';
import naverLoginBtnImg from '@/assets/naver-login-btn.svg';
import kakaoLoginBtnImg from '@/assets/kakao-login-btn.svg';
import chevronsDownIcon from '@/assets/icons/chevrons-down.svg';

function Login() {
    return (
        <div className="flex flex-col mx-auto my-auto  h-[200vh]">
            <div className="relative h-[100vh]">
                <img className="absolute z-10 inset-0 mx-auto mt-[5vh]" src={cloudImg} alt="구름 이미지" />
                <img className="absolute z-20 inset-0 mx-auto mt-[5vh]" src={InBuddyLogoImg} alt="브랜드 로고" />

                <div className=" flex flex-col">
                    <img className="z-10 inset-0 mx-auto mt-[10vh]" src={naverLoginBtnImg} alt="네이버 로고 버튼" />
                    <img className="z-10 inset-0 mx-auto mt-[10vh]" src={kakaoLoginBtnImg} alt="카카오 로고 버튼" />
                    <img className="z-10 inset-0 mx-auto mt-[10vh]" src={chevronsDownIcon} alt="아래 스크롤 아이콘" />
                </div>
            </div>
            <div className="h-[100vh]">아래 스크린</div>
        </div>
    );
}

export default Login;