   // Listen for the DOMContentLoaded event which fires when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            if (document.body.children.length === 0) {
                const textNode = document.createTextNode("DOM load success");
                document.body.appendChild(textNode);
            }
        });