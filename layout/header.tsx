import Image from "next/image";

export default function () {
	return (
		<div className="pt-8 pb-16">
			<div className="container mx-auto h-16 flex justify-between items-center px-4 gap-5">
				<div className="rounded-md bg-slate-200 p-3 font-bold md:hidden cursor-pointer">Menus</div>
				<div className="hidden lg:flex bg-[#F5F5F7] rounded-[30px] items-center p-4 shrink-0 grow-0 cursor-pointer">
					<div className="px-1">En</div>
					<Image src="assets/img/arrow-down.svg" width={16} height={16} alt="lang" priority />
				</div>
				<div className="hidden md:flex items-center mr-20 text-white shrink-0 grow-0 gap-4">
					<Image src="assets/img/profile-circle.svg" className="cursor-pointer" width={24} height={24} alt="profile" priority />
					<p className="hidden lg:block">مرحبًا بك ! محمد طارق</p>
				</div>
				<div className="hidden md:flex text-[18px] grow shrink justify-around">
					<div className="px-2 flex items-center gap-1 cursor-pointer">الاخبار</div>
					<div className="px-2 flex items-center gap-1 cursor-pointer">الاحداث والانشطة</div>
					<div className="px-2 flex items-center gap-1 cursor-pointer">
						<Image src="assets/img/arrow-down.svg" width={16} height={16} alt="down" priority />
						المعلومات
					</div>
					<div className="px-2 flex items-center gap-1 cursor-pointer">
						<Image src="assets/img/arrow-down.svg" width={16} height={16} alt="down" priority />
						الخدمات
					</div>
					<div className="px-2 flex items-center gap-1 font-bold cursor-pointer">الرئيسية</div>
				</div>
				<Image src="assets/img/logo.svg" className="shrink-0 grow-0" width={180} height={67} alt="logo" priority />
			</div>
			<div className="topbg"></div>
		</div>
	);
}
