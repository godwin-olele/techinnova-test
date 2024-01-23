import Assets from '@/constants/assets.constant';
import Image from 'next/image';

function SplashScreen() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Image src={Assets.logo} alt="logo" width={200} height={200} />
    </div>
  );
}

export default SplashScreen;
