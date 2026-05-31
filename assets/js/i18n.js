async function loadLanguage(lang = "pt-BR") {

    const response =
        await fetch(`/assets/i18n/${lang}.json`);

    const strings =
        await response.json();

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