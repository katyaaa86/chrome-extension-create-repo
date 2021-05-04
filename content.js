chrome.runtime.onMessage.addListener(function (msg, sender) {
    if (msg.text === 'create_repo') {
        let repoInput = document.querySelector('#repository_name');
        repoInput.value = 'new_repo';
        document.querySelector('#repository_description').value = 'repo description';

        waitForElementToDisplay('.is-autocheck-successful', function() {
            document.querySelector('.first-in-line').click();
        }, 1000, 9000);

        function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
        var startTimeInMs = Date.now();
        (function loopSearch() {
            if (document.querySelector(selector) != null) {
                callback();
                return;
            }
            else {
                setTimeout(function () {
                    if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs) {
                        return;
                    }
                    loopSearch();
            }, checkFrequencyInMs);
            }
        })();
        }        
    }
});