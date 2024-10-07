


class CustomHead extends HTMLElement {
    connectedCallbaack() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dark Code Background</title>
            <!-- bootstrap link  -->
            <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
            <!-- Linking style sheet  -->
            <link rel="stylesheet" href="/css/style.css">
            <link rel="stylesheet" href="/css/tailwind_style.css">
            <link rel="" href="">
    
        </head>
        `
    }
}


customElements.define('custom-head', CustomHead)