# AssecoCodebase - NOTES

Poznámky během vývoje a doplňující informace k zadání a jeho řešení.

## Angular + Federation version
Nebyla specifikována konkrétní knihovna pro modulovou federaci, a protože jsem se rozhodl pro Angular 18, zvolil jsem @angular-architects/native-federation. Tato knihovna je nyní plně kompatibilní s esbuildem (OOTB builder pro Angular v18).

## ChangeDetection
Budoucnost bez Zone.js -> Rozhodl jsem se neimplementovat sdílení Zone.js mezi jednotlivými aplikacemi. Protože Angular stále více směřuje na zone-less a nahrazení hlavně pomocí signals.

## Routing
Protože byla implementována pouze jedna komponenta, nebyla potřeba integrovat celý router MFE1 do SHELL aplikace. Nebylo tedy nutné komplexně konfigurovat routování integrovaných komponent z MFE1 v SHELL.

## SSR
SSR nebylo požadováno. Po podrobné analýze jsem zjistil, že jeho implementace v rámci modulové federace není jednoduchá. Komponenty je třeba obalit speciálním elementem, který umožní hydrataci pouze uvnitř tohoto elementu. Další podrobnosti je nutné zjistit.

## PWA
Otázkou zůstává, jak bude fungovat PWA v kombinaci s modulovou federací, zejména se Service Workers. Tato problematika vyžaduje další analýzu.

## WebComponents
WebComponents představují způsob, jak implementovat komponenty z různých frameworků nebo ve verzích různých frameworků prostřednictvím modulové federace. Tohle je podle mě ideální přístup k Microfrontends – týmy mohou být plně nezávislé, každý na svém frameworku a projektu, aniž by byl potřeba middleware pro routování a zpracování událostí mezi jednotlivými MFE. O vše se postará samotný Angular SHELL.

#### Využité zdroje:

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/

ChatGPT

StackOverFlow
