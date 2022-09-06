

//creates our Canopy tab in the devtools window and displays devtool.html
chrome.devtools.panels.create("Canopy",
    "get_started32.png",
    "devtool.html",
    function(panel: object) {
      console.log(panel)
    }
);


chrome.devtools.panels.elements.createSidebarPane("Svelte Component",
    function(sidebar: any) {
        // sidebar initialization code here
        sidebar.setPage("/sidebar.html");
});