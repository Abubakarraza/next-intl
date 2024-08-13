import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";
// import { locales /* ... */ } from "./config";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: locales /* ... */ });
