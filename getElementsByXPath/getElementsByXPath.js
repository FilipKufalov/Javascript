function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

// Test on Site: https://www.w3schools.com/xml/xpath_examples.asp
// Usage: getElementsByXPath("//div[7]/div[1]/div[1]/div/h3")[0].innerHTML;