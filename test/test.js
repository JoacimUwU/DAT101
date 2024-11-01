function modifyText(text, maxSize, char, insertBefore) {
    // Calculate the number of characters to add
    const charsToAdd = maxSize - text.length;

    // Check if characters need to be added
    if (charsToAdd > 0) {
        // Create a string with the required number of characters
        const padding = char.repeat(charsToAdd);

        // Conditionally add characters to the beginning or end of the text
        if (insertBefore) {
            text = padding + text;
        } else {
            text = text + padding;
        }
    }

    // Print and return the new string
    console.log(text);
    return text;
}

// Example usage
modifyText("hello", 10, '*', true);  // Outputs: '*****hello'