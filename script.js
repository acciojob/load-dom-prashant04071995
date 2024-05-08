//your JS code here. If required.
        // Listen for the DOMContentLoaded event which fires when the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Check if the body has no child nodes
            if (document.body.children.length === 0) {
                // Create a text node with the message
                var textNode = document.createTextNode("DOM load success");
                // Append the text node to the body
                document.body.appendChild(textNode);
            }
        });
    