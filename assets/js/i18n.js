function getBaseUrl() {

    const htmlBaseUrl =
        document.documentElement.dataset.baseurl || "";

    const normalized =
        htmlBaseUrl.endsWith("/")
        ? htmlBaseUrl.slice(0, -1)
        : htmlBaseUrl;

    return normalized;
}

async function loadLanguage(lang = "pt-BR") {

    const baseUrl =
        getBaseUrl();

    const i18nPath =
        `${baseUrl}/assets/i18n/${lang}.json`;

    let strings = {};

    try {

        const response =
            await fetch(i18nPath);

        if(!response.ok) {
            throw new Error(
                `Failed to load ${i18nPath}`
            );
        }

        strings =
            await response.json();

    } catch(error) {

        console.warn(
            "Could not load i18n file:",
            i18nPath,
            error
        );

        return;
    }

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if(strings[key]) {
                element.innerHTML = strings[key];
            }

        });

    localStorage.setItem(
        "guardiao_language",
        lang
    );
}