document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const savedLanguage =
            localStorage.getItem(
                "guardiao_language"
            ) || "pt-BR";

        await loadLanguage(
            savedLanguage
        );

    }
);