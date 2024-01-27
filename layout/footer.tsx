import Image from "next/image";

export default function () {
	return (
		<div className="container mx-auto px-4 py-10 flex justify-between items-center">
			<div className="flex gap-24 items-center">
				<div className="flex gap-5">
					<Image src="assets/img/facebook.svg" width={32} height={32} alt="facebook" priority />
					<Image src="assets/img/whatsapp.svg" width={32} height={32} alt="wahtsapp" priority />
					<Image src="assets/img/linkedin.svg" width={32} height={32} alt="linkedin" priority />
				</div>
				<div className="hidden md:block text-sm text-[#36405C] font-bold">السياسات - الخصوصية</div>
			</div>
			<div className="text-right">جميع الحقوق محفوظة لشركة NCMS © 2023</div>
		</div>
	);
}
