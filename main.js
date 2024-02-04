const toggle = document.getElementById("toggle")

const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
}

const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

const handleToggle = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")

    const theme = currentTheme === "dark" ? "light" : "dark";

    setTheme(theme)
}

const initTheme = () => {
    const storedTheme = localStorage.getItem("theme") || getSystemTheme(); 

    toggle.checked = storedTheme === "light";

    setTheme(storedTheme)
} 

initTheme();

toggle.addEventListener("change", handleToggle)