# AssecoCodebase - module federation SWOT analysis

## S (Strengths) – Silné stránky:
- Rozdělení kódu do menších celků (modulů) = čitelnost, přehlednost, lepší performance, jendodušší debug ... 
- Rozdělení aplikace na menší části podle custom kritérií
- Výhoda u velkých projektů
- Možnost rozdělit aplikaci mezi na sobě nezávislé týmy = akcelerace vývoje
- Dynamické načítání celých aplikací
- Mono i Multi/Poly REPO

## W (Weaknesses) – Slabé stránky:
- ChangeDetection a ZONE.JS u starších verzích Angularu 
- Routing mezi SHELL a MFE1 
- Duplicitní DI/libraries/packages a potřeba na to celou dobu myslet 
- Složitější start tech-stacku 
- Složitější onboarding 
- Vhodné na robustnější / komplexnější aplikace 
- Celkem obtížné implementovat SSR (to vnímám asi jako největší nevýhodu, protože od v17 Angular obsahuje potřebné features na optimalizaci core-web vitals ale nejzásadnější z nich jsou právě součástí SSR mode)

## O (Opportunities) – Příležitosti:
- Vyvíjet menší celky, v různých týmech na různých platformách / jazycích / frameworcích (za předpokladu impelmentace WebComponents)
- Používat menší celky v jiných shells, tedy skládat shell jako puzzle z MFE aplikací

## T (Threats) – Hrozby:
- ukončení vývoje / podpory ze strany Angularu
- obtížný onboarding (za předpokladu že nebude federace součástí OOTB řešení Angularu a bude potřeba ji konfigurovat speciálně jako teď)
- update Angularu by mohl znamenat nutný refactor modulové federace


#### Využité zdroje:

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/

ChatGPT

StackOverFlow
