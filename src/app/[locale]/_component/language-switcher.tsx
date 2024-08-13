"use client";

import { useRouter, usePathname } from "@/navigation";

export default function LanguageChanger({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: any) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange} className="bg-black">
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  );
}
