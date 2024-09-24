# Q&A

### Nastudujte a vysvětlete jak se obecně chovají styly, které mají aplikace použité. Např. pokud styl v knihovně nebude odpovídat verzi stylu v cílové aplikace přes modulovou federaci

### Shrnutí:
#### SCOPED styly
V Angularu jsou scoped styly implicitně použity díky nastavení ViewEncapsulation.Emulated. Toto nastavení zajišťuje nativní izolaci stylů pro každou komponentu, což znamená, že by nemělo docházet ke konfliktům mezi HOST a REMOTE aplikacemi. Každá komponenta si udržuje své styly nezávisle na ostatních.

#### Globální styly
Zde však existuje riziko, že globální styly HOST aplikace přepíšou styly REMOTE aplikace. HOST aplikace je vždy nadřazena a přepíše globální styly REMOTE, pokud se shodují v selektorech. To může vést k nečekaným výsledkům.

#### 3rd party styly
Například styly z knihoven jako Tailwind, Bootstrap apod. by měly být zahrnuty v obou konfiguracích federace, aby se zabránilo jejich duplikaci. Toto doporučení minimalizuje riziko, že by došlo k neshodám v používání verzí těchto knihoven.

MAIN POINT:

Pokud HOST aplikace načítá komponentu z REMOTE aplikace, může dojít k tomu, že styly HOST aplikace přepíšou styly REMOTE komponenty, především pokud jsou použity globální styly. Tomu lze předejít několika způsoby:

- Izolací stylů pomocí nastavení ViewEncapsulation v Angularu.
- definováním globálních stylů pomocí specifických selektorů, aby se minimalizovalo riziko konfliktů.


##### Využité zdroje:

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-1-standalone-and-esbuild/

https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components/

ChatGPT

StackOverFlow
