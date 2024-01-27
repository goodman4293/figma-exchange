import Image from "next/image";

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<div className="flex flex-col-reverse md:flex-row gap-6 text-[20px] font-bold text-[#36405C] pb-6 border-b border-b-gray-200 mb-6">
				<div className="grow shrink">
					<p className="text-right mb-12 pr-8">الخدمات</p>
					<div className="flex gap-6 text-white justify-around flex-wrap">
						<div className="rounded-[5px] bg-[#56908C] h-[246px] grid place-items-center py-10 basis-[204px] grow-0 shrink-0">
							<Image src="assets/img/sms-tracking.svg" width={48} height={48} alt="sms" priority />
							<p className="font-bold text-base">البريد الالكتروني</p>
						</div>
						<div className="rounded-[5px] bg-[#BA8E2D] h-[246px] grid place-items-center py-10 basis-[204px] grow-0 shrink-0">
							<Image src="assets/img/square.svg" width={32} height={58} alt="square1" priority />
							<p className="font-bold text-base">ساعد الخرج</p>
						</div>
						<div className="rounded-[5px] bg-[#203055] h-[246px] grid place-items-center py-10 basis-[204px] grow-0 shrink-0">
							<Image src="assets/img/square.svg" width={32} height={58} alt="square2" priority />
							<p className="font-bold text-base">ساعد الرياض</p>
						</div>
						<div className="rounded-[5px] bg-[#B06844] h-[246px] grid place-items-center py-10 basis-[204px] grow-0 shrink-0">
							<Image src="assets/img/cloud-add.svg" width={48} height={48} alt="cloud" priority />
							<p className="font-bold text-base">خدمات الكترونية</p>
						</div>
						<div className="rounded-[5px] bg-[#84C8BC] h-[246px] grid place-items-center py-10 basis-[204px] grow-0 shrink-0">
							<Image src="assets/img/profile-2user.svg" width={48} height={48} alt="profile" priority />
							<p className="font-bold text-base">خدمات الموظفين</p>
						</div>
					</div>
				</div>
				<div className="grow-0 shrink-0 basis-[204px]">
					<p className="text-right mb-12">المعلومات</p>
					<div className="rounded-[5px] flex   justify-end bg-[rgba(54, 64, 92, 0.10)] border mb-[5px] text-base items-center">
						<p className="p-2">السياسات</p>
						<Image src="assets/img/document-text.svg" className="px-1" width={30} height={30} alt="document" priority />
					</div>
					<div className="rounded-[5px] flex justify-end bg-[rgba(54, 64, 92, 0.10)] border mb-[5px] text-base items-center">
						<p className="p-2">قواعد تنظيمية</p>
						<Image src="assets/img/document-text.svg" className="px-1" width={30} height={30} alt="document" priority />
					</div>
					<div className="rounded-[5px] flex justify-end bg-[rgba(54, 64, 92, 0.10)] border mb-[5px] text-base items-center">
						<p className="p-2">LMS</p>
						<Image src="assets/img/document-text.svg" className="px-1" width={30} height={30} alt="document" priority />
					</div>
					<div className="rounded-[5px] flex justify-end bg-[rgba(54, 64, 92, 0.10)] border mb-[5px] text-base items-center">
						<p className="p-2">البنك</p>
						<Image src="assets/img/document-text.svg" className="px-1" width={30} height={30} alt="document" priority />
					</div>
					<div className="rounded-[5px] flex justify-end bg-[rgba(54, 64, 92, 0.10)] border mb-[5px] text-base items-center">
						<p className="p-2">الخصومات</p>
						<Image src="assets/img/document-text.svg" className="px-1" width={30} height={30} alt="document" priority />
					</div>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-5 pb-6 border-b border-b-gray-200 mb-6 justify-between">
				<div className="bg-white rounded-[5px] border border-gray-200 flex-1">
					<div className="flex p-6 border-b border-b-gray-200 justify-between items-center">
						<div className="flex gap-2">
							<Image src="assets/img/vuesacs.svg" width={18} height={18} alt="leftarrow" priority />
							<div className="text-slate-500 text-sm font-bold ml-1">جميع الاحداث</div>
						</div>
						<div className="text-slate-700 text-xl font-bold">انشطة واحداث</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2">
						<div className="flex justify-end items-center p-6 gap-2">
							<div className="text-right text-slate-700 text-sm leading-normal">
								<p className="font-bold text-nowrap">عنوان الحدث يظهر هنا</p>
								<p className="text-opacity-60 font-normal text-nowrap">الاحد, 05 يناير, 12:00 ص</p>
							</div>
							<div className="basis-[61px] h-[61px] bg-[#56908C] rounded text-center text-base leading-5 font-bold text-white grid place-items-center p-2 grow-0 shrink-0">
								<p>04</p>
								<p>يناير</p>
							</div>
						</div>
						<div className="flex justify-end items-center p-6 gap-2">
							<div className="text-right text-slate-700 text-sm leading-normal">
								<p className="font-bold text-nowrap">عنوان الحدث يظهر هنا</p>
								<p className="text-opacity-60 font-normal text-nowrap">الاحد, 05 يناير, 12:00 ص</p>
							</div>
							<div className="basis-[61px] h-[61px] bg-[#56908C] rounded text-center text-base leading-5 font-bold text-white grid place-items-center p-2 grow-0 shrink-0">
								<p>04</p>
								<p>يناير</p>
							</div>
						</div>
						<div className="flex justify-end items-center p-6 gap-2">
							<div className="text-right text-slate-700 text-sm leading-normal">
								<p className="font-bold text-nowrap">عنوان الحدث يظهر هنا</p>
								<p className="text-opacity-60 font-normal text-nowrap">الاحد, 05 يناير, 12:00 ص</p>
							</div>
							<div className="basis-[61px] h-[61px] bg-[#56908C] rounded text-center text-base leading-5 font-bold text-white grid place-items-center p-2 grow-0 shrink-0">
								<p>04</p>
								<p>يناير</p>
							</div>
						</div>
						<div className="flex justify-end items-center p-6 gap-2">
							<div className="text-right text-slate-700 text-sm leading-normal">
								<p className="font-bold text-nowrap">عنوان الحدث يظهر هنا</p>
								<p className="text-opacity-60 font-normal text-nowrap">الاحد, 05 يناير, 12:00 ص</p>
							</div>
							<div className="basis-[61px] h-[61px] bg-[#56908C] rounded text-center text-base leading-5 font-bold text-white grid place-items-center p-2 grow-0 shrink-0">
								<p>04</p>
								<p>يناير</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="rounded-[5px] relative lg:flex-1 h-[300px] overflow-hidden"
					style={{ background: "linear-gradient(to top, #36405C, #36405c33)" }}
				>
					<img src="assets/img/image1.png" className="absolute object-cover w-full h-full top-0 left-0 opacity-50 z-[-1] rounded-[5px]" />
					<div className="flex h-full">
						<div className="grow shrink relative">
							<div className="absolute top-5 right-5 text-white w-12 h-12 bg-[#56908C] rounded text-center p-2 leading-4 text-sm">
								<p>30</p>
								<p>يناير</p>
							</div>
							<div className="text-right text-white text-base bottom-5 right-5 absolute font-bold">
								<p className="text-nowrap">انطلاق أعمال مؤتمر جمعية الشرق</p>
								<p className="text-nowrap">الأوسط وشمال أفريقيا لمحققي</p>
								<p className="text-nowrap">السلامة الجوية بجدة</p>
							</div>
						</div>
						<div className="p-2 z-10 grow-0 shrink-0 basis-[315px]">
							<div className="bg-[#FFFFFF88] h-full backdrop-blur rounded-md p-2">Calendar</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex font-bold text-xl text-[#203055] items-center justify-between mb-12">
					<div className="flex gap-2">
						<div className="w-2 h-2 bg-[#ccc] rounded-full"></div>
						<div className="w-2 h-2 bg-[#ccc] rounded-full"></div>
						<div className="w-2 h-2 bg-[#BA8E2D] rounded-full"></div>
					</div>
					<p>اخبار الموظفين والشركة</p>
				</div>
				<div className="flex flex-col lg:flex-row gap-5 pb-6 border-b border-b-gray-200 mb-6 justify-between">
					<div
						className="h-[181px] rounded-[5px] relative lg:flex-1 text-white text-xs font-bold leading-3"
						style={{ background: "linear-gradient(to top, #36405C, #36405c33)" }}
					>
						<img src="assets/img/image2.png" className="absolute object-cover w-full h-full top-0 left-0 z-[-1] rounded-[5px]" alt="imgcard1" />
						<div className="absolute top-5 left-5 flex items-center p-1 bg-blue-950 rounded-sm gap-2">
							<div className="">2023/10/25</div>
							<Image src="assets/img/calendar.svg" alt="calendar" width={18} height={18} priority />
						</div>
						<div className="absolute right-5 top-5 flex p-2 bg-yellow-600 rounded-sm">اخبار الشركة</div>
						<div className="text-right bottom-5 right-5 absolute text-sm leading-relaxed">
							<p className="text-nowrap">انطلاق أعمال مؤتمر جمعية الشرق الأوسط وشمال أفريقيا</p>
							<p className="text-nowrap">لمحققي السلامة الجوية بجدة</p>
						</div>
					</div>
					<div
						className="h-[181px] rounded-[5px] relative lg:flex-1 text-white text-xs font-bold leading-3"
						style={{ background: "linear-gradient(to top, #36405C, #36405c33)" }}
					>
						<img src="assets/img/image3.png" className="absolute object-cover w-full h-full top-0 left-0 z-[-1] rounded-[5px]" alt="imgcard2" />
						<div className="absolute top-5 left-5 flex items-center p-1 bg-blue-950 rounded-sm gap-2">
							<div className="">2023/10/25</div>
							<Image src="assets/img/calendar.svg" alt="calendar" width={18} height={18} priority />
						</div>
						<div className="absolute right-5 top-5 flex p-2 bg-yellow-600 rounded-sm">اخبار الشركة</div>
						<div className="text-right bottom-5 right-5 absolute text-sm leading-relaxed">
							<p className="text-nowrap">انطلاق أعمال مؤتمر جمعية الشرق الأوسط وشمال أفريقيا</p>
							<p className="text-nowrap">لمحققي السلامة الجوية بجدة</p>
						</div>
					</div>
					<div
						className="h-[181px] rounded-[5px] relative lg:flex-1 text-white text-xs font-bold leading-3"
						style={{ background: "linear-gradient(to top, #36405C, #36405c33)" }}
					>
						<img src="assets/img/image4.png" className="absolute object-cover w-full h-full top-0 left-0 z-[-1] rounded-[5px]" alt="imgcard3" />
						<div className="absolute top-5 left-5 flex items-center p-1 bg-blue-950 rounded-sm gap-2">
							<div className="">2023/10/25</div>
							<Image src="assets/img/calendar.svg" alt="calendar" width={18} height={18} priority />
						</div>
						<div className="absolute right-5 top-5 flex p-2 bg-yellow-600 rounded-sm">اخبار الشركة</div>
						<div className="text-right bottom-5 right-5 absolute text-sm leading-relaxed">
							<p className="text-nowrap">انطلاق أعمال مؤتمر جمعية الشرق الأوسط وشمال أفريقيا</p>
							<p className="text-nowrap">لمحققي السلامة الجوية بجدة</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
