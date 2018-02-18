window.addEventListener("load", armMyEvents());

function armMyEvents() {
    window.addEventListener("scroll",
        function () {
            var nodes = document.getElementsByTagName("P");
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].getBoundingClientRect().top >= 0 &&
                    nodes[i].getBoundingClientRect().bottom < window.innerHeight) {
                    nodes[i].setAttribute("class", "fading");
                } else {
                    nodes[i].setAttribute("class", "");
                }
            }
        }
    )
}
